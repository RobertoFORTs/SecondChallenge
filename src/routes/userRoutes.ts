import express from "express";
import { UserController } from "../controllers/UserController";

const userRouter = express.Router();

const userController = new UserController();

//user gains access to system
userRouter.post("/users/signUp", userController.signUserUp);
userRouter.post("/users/signIn");

//implement middleware to admin user use of system

//routes for users to use the system

export { userRouter };