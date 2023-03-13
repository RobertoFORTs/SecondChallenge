import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { AppError } from "../errors/AppError";

const requestValidation = Joi.string().required();
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

async function dayOfWeekValidator(req: Request, res: Response, next: NextFunction): Promise<void> {
  let  dayOfWeek = String(req.query.dayOfWeek);
  dayOfWeek = dayOfWeek.toLowerCase();

  await requestValidation.validateAsync(dayOfWeek);

  const isDayOfWeekValid = days.includes(dayOfWeek);

  if (!isDayOfWeekValid) {
    next(new AppError("Invalid day of week", 400));
  }

  return next();
}

export { dayOfWeekValidator }