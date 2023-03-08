import express from "express";

const router = express.Router();

router.post('/users/signUp');

router.post('/users/signIn');

export { router };