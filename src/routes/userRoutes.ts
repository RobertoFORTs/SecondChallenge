import express from "express";

import { UserController } from "../controllers/UserController";
import { signUpValidator } from "../validators/signUpValidator";
import { baseProtection, isLoggedIn } from "../controllers/authController";
import { updateMeValidator } from "../validators/updateMeValidator";

const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/signUp", signUpValidator, userController.signUserUp);
userRouter.post("/signIn", isLoggedIn, userController.signUserIn);

userRouter.use(baseProtection);

userRouter.put("/update", updateMeValidator, userController.uptadeMe);
userRouter.delete("/delete", userController.deleteMe);

export { userRouter };