const express = require("express");
const router = express.Router();
// const requireLogin = require("../controllers/auth");

const { User } = require("../models/user");
const { ToDo } = require("../models/todo");

const requireLogin = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

//GET ALL TODOS
router.get("/", requireLogin, async (req, res) => {
  const user = req.user;
  if (user) {
    console.log("USER", req.user);
    const todos = await ToDo.find({ author: req.user.userId, done: false })
      .sort({ date: -1 })
      .exec();
    res.json({ todos });
  } else {
    res.sendStatus(401);
  }
});

//CREATE A TODO
// router.post("/", async (req, res) => {
//   console.log("req.body", req.body);
//   console.log("files", req.files);
//   const { title, content, files } = req.body;
//   const user = req.user;
//   if (title) {
//     const todo = new ToDo({ title, content, files, author: user.userId });
//     await todo.save();

//     res.json({ user, todo });
//   } else {
//     res.status(400).json("Title is required");
//   }
// });

//GET COMPLETED
router.get("/completed", requireLogin, async (req, res) => {
  console.log("user", req.user);
  const user = req.user;
  //find out why this is undefined
  console.log("userid", req.userId);
  if (user) {
    const todos = await ToDo.find({ author: req.user.userId, done: true })
      .sort({ date: -1 })
      .exec();
    return res.json({ todos });
  } else {
    return res.status(401).json("You have to be logged in to see todos");
  }
});

//GET TODO BY ID TOGGLE
router.get("/:id", requireLogin, async (req, res) => {
  const todo = await ToDo.findOne({ _id: req.params.id });
  todo.done = !todo.done;
  await todo.save();

  res.json(todo);
});

router.get("/todos/:id/:file", requireLogin, async (req, res) => {
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

//DELETE TODO BY ID
router.delete("/:id", requireLogin, async (req, res) => {
  const todo = await ToDo.findOneAndDelete({ _id: req.params.id });
  res.json(todo);
});

// //update a todo
router.put("/:id", requireLogin, async (req, res) => {
  const { title, content, files } = req.body;
  const todo = await ToDo.findOneAndUpdate(
    { _id: req.params.id },
    { title, content, files },
    { new: true }
  );
  res.json({ todo });
});

module.exports = router;
