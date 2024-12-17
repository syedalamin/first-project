import dotenv from "dotenv";
import { Request, Response } from "express";
import path from "path";
import { app } from "../../app";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
app.get("/", (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});
