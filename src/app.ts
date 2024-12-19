import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.route";
export const app: Application = express();

// parsers

app.use(express.json());

app.use(cors());

// applications routes
app.use("/api/v1/students", StudentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("alamin");
});

export default app;
