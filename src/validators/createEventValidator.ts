import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const requestValidation = Joi.object({
  description: Joi.string().required().messages({ "string.required": "Description is required" }),
  dateTime: Joi.date().required().messages({ "date.base": "Date time must be a valid date" }),
});

async function createEventValidator(req: Request, res: Response, next: NextFunction): Promise<void> { 
  
  await requestValidation.validateAsync(req.body);

  return next();
}

export { createEventValidator }