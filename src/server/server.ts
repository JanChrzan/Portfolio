import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { formRouter } from "./routes/formRouter.js";

dotenv.config();

const port: string = process.env.PORT || "5000";
const mongoDBKey = process.env.MONGODB_KEY || "";

if (!mongoDBKey) {
  console.error("MONGODB_KEY is missing in the environment variables");
  process.exit(1);
}

mongoose.set("strictQuery", true);

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(mongoDBKey, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Error connecting to the database:", err));

app.use("/api", formRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
