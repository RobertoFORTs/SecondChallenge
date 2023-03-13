import { NextFunction } from "express";
import { ObjectId } from "mongoose";
import { AppError } from "../errors/AppError"
import { promisify } from "util";
import { User } from "../models/User";

import jwt from "jsonwebtoken";

const signToken = (id: ObjectId) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { 
    expiresIn: process.env.JWT_TOKEN_EXPIRES
  });
};

export function createJwtToken (user: any, sCode: number, message: string, res: any): void{ 
  const newToken = signToken(user._id);

  user.password = undefined;
  res.setHeader("token", newToken);
  res.status(sCode).json({
    status: "success",
    message: message,
    token: newToken,
    data: {
      user
    }
  });

  return;
}

export async function isLoggedIn(req: any, res: any, next: NextFunction): Promise<void> {
  if (!req.headers.authorization){
    return next();
  }

  const token = req.headers.authorization.split(" ")[1];
  const validateToken: any = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const candidateUser = await User.findById(validateToken.id);

  if (!candidateUser){
    return next();
  }

  if (candidateUser.email === req.body.email){
    return next(new AppError("User is already logged in!! Logging off current user", 401));
  }

  return next();
}

export async function baseProtection (req: any, res: any, next: NextFunction): Promise<void> {
  let token: string;
  req.user = null;

  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  } 
  else{
    return next( new AppError("Please log in to gain access", 401));
  }

  const validateToken: any = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  let current = await User.findById(validateToken.id);

  if (!current){
    next( new AppError("User does not exist", 404));
  }

  req.user = current;
  res.locals.user = current;
  return next();
}