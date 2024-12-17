import express, { Application } from "express";
import cors from "cors";
export const app: Application = express();

// parsers

app.use(express.json());

app.use(cors());

export default app;
