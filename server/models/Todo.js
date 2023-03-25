import mongoose from "mongoose";

const Todo = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  }
  title:{
    type: String,
    required: true,
  }
  description: {
    type: String,
    required: true,
  }
  completed: {
    type: Boolean,
  }
},
{ timestamps : true }
);