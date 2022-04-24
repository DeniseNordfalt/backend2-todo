const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const multer = require("multer");
const morgan = require("morgan");
// const { requireLogin } = require("./controllers/auth");

const { User } = require("./models/user");
const { ToDo } = require("./models/todo");
const { sendStatus } = require("express/lib/response");

const app = express();

//variables
const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//checks headers for token
app.use((req, res, next) => {
  const authHeader = req.header("Authorization");
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log("token", token);
    req.user = jwt.verify(token, JWT_SECRET);
  }
  next();
});

//makes sure user is logged in
const requireLogin = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

app.get("/", async (req, res) => {
  res.send("hello");
});
///////////////////////////////////////////////////////

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.use(upload.array("files"));
app.use("/uploads", express.static("./uploads"));

app.post("/todos", requireLogin, async (req, res) => {
  console.log("req.body", req.body);
  console.log("files", req.files);
  const { title, content } = req.body;
  const files = req.files;
  const user = req.user;
  if (title) {
    const todo = new ToDo({ title, content, files, author: user.userId });
    await todo.save();

    res.json({ user, todo });
  } else {
    res.status(400).json("Title is required");
  }
});

app.get("/todos/:id/:file", requireLogin, async (req, res) => {
  console.log("params", req.params);
  console.log("query", req.query);
  const params = req.params;
  const todo = await ToDo.findOne({ _id: params.id });
  await ToDo.findOneAndUpdate(
    {
      _id: params.id,
      files: { $elemMatch: { filename: params.file } },
    },
    {
      $pull: { files: { filename: params.file } },
    }
  );

  res.send(todo.files[params.file]);
});
////////////////////////////////////////////////////

//gets token
app.post("/tokens", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.login(username, password);
  if (user) {
    const userId = user._id.toString();
    const token = jwt.sign({ userId, username: user.username }, JWT_SECRET, {
      expiresIn: "24h",
      subject: userId,
    });
    res.json({ token, userId, username: user.username });
  } else {
    res.sendStatus(401);
  }
});

app.use("/users", require("./routes/users"));
app.use("/todos", require("./routes/todos"));

const MONGODB_URI = process.env.MONGODB_URI;
// mongoose.connect("mongodb://127.0.0.1/todo");
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`Started server on port: ${PORT}`);
});
