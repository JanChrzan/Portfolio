import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

export const Form = mongoose.model<{
  name: string;
  email: string;
  message: string;
}>("Form", formSchema);
