import express from "express";
import { UserController } from "../controllers/UserController";
import { signUpValidator } from "../validators/signUpValidator";

const userRouter = express.Router();

const userController = new UserController();

//user gains access to system
userRouter.post("/users/signUp", signUpValidator, userController.signUserUp);
userRouter.post("/users/signIn", userController.signUserIn);

//implement middleware to admin user use of system

//routes for users to use the system

export { userRouter };