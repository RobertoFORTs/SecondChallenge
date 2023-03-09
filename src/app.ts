import express, { Request, Response, NextFunction } from "express";

import "express-async-errors";
import { connect } from "mongoose";
import dotenv from "dotenv";

import { AppError } from "./errors/AppError";
import { router as userRouter } from "./routes/userRoutes";

import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerOptions from "./swaggerOptions";

dotenv.config({ path: "./config.env" });

const app = express();

const DB = process.env.DATABASE!.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD!
);

connect(DB).then(() => console.log("DB connection successful!"));

//app.use(express); this breaks everything lol

app.use("api/v1", userRouter);

// Error handling
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(500).json({ message: "Internal server error" });
});

const specs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

export { app };