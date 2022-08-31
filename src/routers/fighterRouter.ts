import { Router } from "express";
import { compareUsers, getRanking } from "../controllers/fighterController";
import validateUsers from "../middlewares/validateUsers";

const fighterRouter = Router();

fighterRouter.post("/battle", validateUsers, compareUsers);

fighterRouter.get("/ranking", getRanking);

export default fighterRouter;
