import express from "express";

const router = express.Router();
//user gains access to system
router.post('/users/signUp');
router.post('/users/signIn');

//implement middleware to admin user use of system

//routes for users to use the system

export { router };