import { Request, Response } from "express";
import { getUserRepos } from "../services/compareUsersService";

export async function getRanking(req: Request, res: Response) {
  res.send("To funfando");
}

export async function compareUsers(req: Request, res: Response) {
  try {
    const { firstUser, secondUser } = req.body;
    const firstUserRepos = getUserRepos(firstUser);
    const secondUserRepos = getUserRepos(secondUser);
  } catch (err) {
    res.status(500).send("Internal Error");
  }
}
