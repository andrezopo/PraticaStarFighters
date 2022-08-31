import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers/router";

dotenv.config();

const app = express();

app.use([cors(), express.json()]);

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Servidor funfando dibas na porta ${process.env.PORT}`);
});
