import { Request, Response, NextFunction } from "express";
import compareUsersSchema from "../schemas/compareUsersSchema";

export default function validateUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = compareUsersSchema.validate(req.body);
  if (error) {
    res.status(400).send("Bad Request");
    return;
  }
  next();
}
