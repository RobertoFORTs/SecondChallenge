import express from "express";
import { UserController } from "../controllers/UserController";
import { signUpValidator } from "../validators/signUpValidator";
import { baseProtection, isLoggedIn } from "../controllers/authController";

const userRouter = express.Router();

const userController = new UserController();

//user gains access to system
userRouter.post("/users/signUp", signUpValidator, userController.signUserUp);
userRouter.post("/users/signIn", isLoggedIn, userController.signUserIn);

//implement middleware to admin user use of system
userRouter.use(baseProtection);

userRouter
  .route("/users")
  .put(userController.uptadeMe)
  .delete();

export { userRouter };