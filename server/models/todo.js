const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  content: { type: String, required: true, maxlength: 100 },
  date: { type: Date, default: Date.now },
  done: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", todoSchema);

exports.Todo = Todo;
