/* eslint-disable import/no-extraneous-dependencies */
import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const signupRouter = express.Router();

signupRouter.post(
  "/api/auth/signup",
  [body("email").isEmail().withMessage("Email must be valid")],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).send({});
    }
    res.send({});
  }
);

export default signupRouter;
