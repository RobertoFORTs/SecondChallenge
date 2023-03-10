import express from "express";
import { UserController } from "../controllers/UserController";

const router = express.Router();

const userController = new UserController();

//user gains access to system
router.post('/users/signUp', userController.signUserUp);
router.post('/users/signIn');

//implement middleware to admin user use of system

//routes for users to use the system

export { router };