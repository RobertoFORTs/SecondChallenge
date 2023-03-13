import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { AppError } from "../errors/AppError";

const requestValidation = Joi.string().required();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

async function dayOfWeekValidator(req: Request, res: Response, next: NextFunction): Promise<void> {
  const  dayOfWeek = String(req.query.dayOfWeek);

  await requestValidation.validateAsync(dayOfWeek);

  const isDayOfWeekValid = days.includes(dayOfWeek);

  if (!isDayOfWeekValid) {
    next(new AppError("Invalid day of week", 400));
  }

  return next();
}

export { dayOfWeekValidator }