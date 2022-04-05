const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const { User } = require("./models/user");
const { ToDo } = require("./models/todo");

const app = express();

//variables - move to .env?
const PORT = 5000;
const JWT_SECRET = "supersecret";

app.use(cors());
app.use(express.json());

//checks headers for token
app.use((req, res, next) => {
  const authHeader = req.header("Authorization");
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log("token: ", token);
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

//creates user
app.post("/users", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.json({ username });
});

//gets token
app.post("/tokens", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.login(username, password);
  if (user) {
    const userId = user._id.toString();
    const token = jwt.sign({ userId, username: user.username }, JWT_SECRET, {
      expiresIn: "1h",
      subject: userId,
    });
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
});

//creates a todo-item
// app.post("/todos", async (req, res) => {
//   const { content } = req.body;
//   const todo = new ToDo({ content });
//   await todo.save();
//   res.json({ content });
// });

//creates a todo-item for a specific user
app.post("/todos", async (req, res) => {
  const { content } = req.body;
  const user = req.user;
  const todo = new ToDo({ content, user: user._id });
  await todo.save();

  res.json({ user, todo });
});

//lists all todos
app.get("/todos", async (req, res) => {
  const todos = await ToDo.find().sort({ date: -1 }).exec();

  res.json({ todos });
});

//list all todos connected to a user
app.get("/todos", requireLogin, async (req, res) => {
  const todos = await ToDo.find({ user: req.user._id })
    .sort({ date: -1 })
    .exec();
  res.json({ todos });
});

mongoose.connect("mongodb://127.0.0.1/todo");

app.listen(PORT, () => {
  console.log(`Started server on port: ${PORT}`);
});
