import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

const signToken = (id: ObjectId) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { //there will be a string
    expiresIn: process.env.JWT_TOKEN_EXPIRES  
  });
};

export function createJwtToken (user: any, sCode: number, res: any): void{ //change type later
  const newToken = signToken(user._id);
  //generate cokkie
  
  const expireTime: number = +process.env.JWT_TOKEN_EXPIRES! ;
  const cookieOptions = {
    expires: new Date(Date.now() + expireTime * 24* 60* 60 * 1000),
    httpOnly: true
  };

  res.cookie('jwt', newToken, cookieOptions);
  user.password = undefined;
  res.status(sCode).json({
    status: "success",
    token: newToken,
    data: {
      user
    }
  });
}
