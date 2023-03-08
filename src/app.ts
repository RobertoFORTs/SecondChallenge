import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { AppError } from "./errors/AppError";
import { router as userRouter } from "./routes/userRoutes";
import { connect } from "mongoose";
import dotenv  from "dotenv";
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE!.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD!
);
  
connect(DB)
.then(() => console.log("DB connection successful!"));

const app = express();

app.use(express);

app.use('api/v1', userRouter);

// Error handling
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });  
  }

  return res.status(500).json({ message: "Internal server error" });
});

export { app }