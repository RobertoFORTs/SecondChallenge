import { Request, Response } from "express";
import { EventRegistrationRepository } from "../repositories/EventRegistrationRepository";

const eventRegistrationRepository = new EventRegistrationRepository();

export class EventRegistrationController {
  async getAllEventsRegistration(req: Request, res: Response): Promise<Response> {
    const eventsRegistration = await eventRegistrationRepository
    .getAllEventsRegistration();

    return res.status(200).json({ events: eventsRegistration });
  }

  async getEventRegistrationById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const eventRegistration = await eventRegistrationRepository
    .getEventRegistrationById(id);

    return res.status(200).json({ event: eventRegistration });
  }

  async getEventRegistrationByDayOfTheWeek(req: Request, res: Response): Promise<Response> {
    const dayOfTheWeekInNumber = 1;

    const eventsRegistration = await eventRegistrationRepository
    .getEventsRegistrationByDayOfTheWeek(dayOfTheWeekInNumber);

    return res.status(200).json({ events: eventsRegistration });
  }
}