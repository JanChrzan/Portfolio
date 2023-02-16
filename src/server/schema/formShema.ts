import mongoose from "mongoose";
import { FormData } from "../../utils/TypeFormData";

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

export const Form = mongoose.model<FormData>("Form", formSchema);
