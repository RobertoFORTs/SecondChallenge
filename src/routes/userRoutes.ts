import express from "express";
import { UserController } from "../controllers/UserController";
import { baseProtection, isLoggedIn } from "../controllers/authController";

const userRouter = express.Router();

const userController = new UserController();

//user gains access to system
userRouter.post("/users/signUp", userController.signUserUp);
userRouter.post("/users/signIn", isLoggedIn, userController.signUserIn);

//implement middleware to admin user use of system
userRouter.use(baseProtection);

userRouter
  .route("/users")
  .put(userController.uptadeMe)
  .delete();

export { userRouter };