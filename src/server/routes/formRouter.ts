import express from "express";
import { Form } from "../schema/formShema.js";

export const formRouter = express.Router();
formRouter.post("/form", (req: express.Request, res: express.Response) => {
  console.log("POST request received:", req.body);

  const form = new Form({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  form
    .save()
    .then(() => {
      res.send({ message: "The form has been sent!" });
    })
    .catch((err: any) => {
      res.status(400).send(err);
    });
});
