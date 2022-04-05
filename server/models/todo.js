const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  content: { type: String, required: true, maxlength: 100 },
  date: { type: Date, default: Date.now },
  done: { type: Boolean, default: false },
});

const ToDo = mongoose.model("ToDo", todoSchema);

exports.ToDo = ToDo;
