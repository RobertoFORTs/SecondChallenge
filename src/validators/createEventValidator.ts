import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const requestValidation = Joi.object({
  description: Joi.string().required().messages({ "string.required": "Description is required" }),
  dayOfWeek: Joi.string().required().messages({ "string.required": "Day of week is required" }),
});

async function createEventValidator(req: Request, res: Response, next: NextFunction): Promise<void> { 
  
  await requestValidation.validateAsync(req.body);

  return next();
}

export { createEventValidator }