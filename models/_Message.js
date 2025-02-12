import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models["Message"] ||
  mongoose.model("Message", messageSchema);
