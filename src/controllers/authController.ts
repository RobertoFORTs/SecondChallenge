import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

const signToken = (id: ObjectId) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { //there will be a string
    expiresIn: process.env.JWT_TOKEN_EXPIRES
  });
};