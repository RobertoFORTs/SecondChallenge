import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const requestValidation = Joi.object({
  firstName: Joi.string().required().messages({ "string.required": "FirstName is required" }), 
  lastName: Joi.string().required().messages({ "string.required": "LastName is required" }),
  birthDate: Joi.date().required().messages({ "date.base": "Date time must be a valid date" }), 
  city: Joi.string().required().messages({ "string.required": "City is required" }), 
  country: Joi.string().required().messages({ "string.required": "Country is required" }), 
  email: Joi.string().email().required().messages({ "string.required": "Email is required" }), 
  password: Joi.string().required().messages({ "string.required": "Password is required" }), 
  confirmPassword: Joi.string().valid(Joi.ref("password"))
  .required().messages({ "string.required": "The passwords must be the same" }) 
});

async function signUpValidator(req: Request, res: Response, next: NextFunction): Promise<void> {
  await requestValidation.validateAsync(req.body);

  return next();
}

export { signUpValidator }