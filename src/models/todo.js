import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    text: { type: "string", required: true },
    isDone: { type: "boolean", default: false },
  },
  {
    timestamps: true,
  }
);

const todoModel = mongoose.models.todos || mongoose.model("todos", todoSchema);
export default todoModel;
