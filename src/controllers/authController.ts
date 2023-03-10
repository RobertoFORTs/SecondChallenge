import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

const signToken = (id: ObjectId) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { //there will be a string
    expiresIn: process.env.JWT_TOKEN_EXPIRES  
  });
};

export function createJwtToken (user: any, sCode: number, message: string, res: any): void{ 
  const newToken = signToken(user._id);


  user.password = undefined; //it doesnt send in the response but saves it to database
  res.setHeader('Token', newToken);
  res.status(sCode).json({
    status: "success",
    message: message,
    token: newToken,
    data: {
      user
    }
  });
}
