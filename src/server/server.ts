import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { formRouter } from "./routes/formRouter.js";

dotenv.config();

const port: string = process.env.PORT || "5000";
const mongoDBKey = process.env.MONGODB_KEY || "";

mongoose.set("strictQuery", true);

function checkMongoDBKey() {
  if (!mongoDBKey) {
    console.error("MONGODB_KEY is missing in the environment variables");
    process.exit(1);
  }
}

checkMongoDBKey();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(mongoDBKey, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() =>
    console.log("The connection to the database has been established.")
  )
  .catch((err: any) =>
    console.error("Error while connecting to the database:", err)
  );

app.use("/api", formRouter);

app.listen(port, () =>
  console.log(`The server is running on the port ${port}.`)
);
