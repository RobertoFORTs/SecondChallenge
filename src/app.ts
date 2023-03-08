import express from "express";
import {router as userRouter} from "./routes/userRoutes";

const app = express();

app.use(express);

app.use('api/v1', userRouter);

export { app }