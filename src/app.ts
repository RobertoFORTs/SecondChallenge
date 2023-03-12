import express, { Request, Response, NextFunction } from "express";

import "express-async-errors";
import { connect } from "mongoose";
import dotenv from "dotenv";
import { ValidationError } from "joi";

import { AppError } from "./errors/AppError";
import { userRouter } from "./routes/userRoutes";
import { eventRouter } from "./routes/eventRutes";

import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json());
app.use("/apiDocs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use("/api/v1", userRouter);
app.use("/api/v1/events", eventRouter);

// Database connection
const DB = process.env.DATABASE!.replace("<PASSWORD>", process.env.DATABASE_PASSWORD!);
connect(DB).then(() => console.log("DB connection successful!"));

// Error handling
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ValidationError) {
    return res.status(400).json({ message: error.message });
  }

  return res.status(500).json({ message: error.message });
});

export { app };