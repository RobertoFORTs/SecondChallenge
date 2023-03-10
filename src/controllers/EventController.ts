import { Request, Response } from "express";
import { EventRepository } from "../repositories/EventRepository";
import { IEvent as IRequest } from "../models/IEvent";

const eventRepository = new EventRepository();

export class EventController {
  async getAllEvents(req: Request, res: Response): Promise<Response> {
    const events = await eventRepository.getAllEvents();

    return res.status(200).json({ events: events });
  }

  async getEventById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const event = await eventRepository.getEventById(id);

    return res.status(200).json({ event: event });
  }

  async getEventByDayOfTheWeek(req: Request, res: Response): Promise<Response> {
    const dayOfTheWeekInNumber = 1;

    const events = await eventRepository.getEventsByDayOfTheWeek(dayOfTheWeekInNumber);

    return res.status(200).json({ events: events });
  }
}