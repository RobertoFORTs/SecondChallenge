import Joi from "joi";
import { AppError } from "../errors/AppError";

const requestValidation = Joi.string().required();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

async function dayOfWeekValidator(dayOfWeek: string): Promise<string> {
  
  await requestValidation.validateAsync(dayOfWeek);

  const isDayOfWeekValid = days.includes(dayOfWeek);

  if (!isDayOfWeekValid) {
    throw new AppError("Invalid day of week", 400);
  }

  return dayOfWeek;
}

export { dayOfWeekValidator }