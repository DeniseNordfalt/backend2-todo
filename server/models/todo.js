const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.ObjectId, ref: "User" },
  title: { type: String, required: true, maxlength: 100 },
  content: { type: String, maxlength: 500 },
  date: { type: Date, default: Date.now },
  done: { type: Boolean, default: false },
  files: { type: Array, default: [] },
  tagList: { type: [String], default: [] },
});

const ToDo = mongoose.model("ToDo", todoSchema);

exports.ToDo = ToDo;
