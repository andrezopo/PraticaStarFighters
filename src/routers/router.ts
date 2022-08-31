import { Router } from "express";
import fighterRouter from "./fighterRouter";

const router = Router();

router.use(fighterRouter);

export default router;
