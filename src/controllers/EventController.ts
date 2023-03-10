import { Request, Response } from "express";
import { EventRepository } from "../repositories/EventRepository";
import { IEvent as IRequest } from "../models/IEvent";
import { dayOfWeekValidator } from "../validators/dayOfWeekValidator";
import { AppError } from "../errors/AppError";

const eventRepository = EventRepository.getInstance();

class EventController {
  async createEvent(req: Request, res: Response): Promise<Response> {
    const { description, dayOfWeek }: IRequest = req.body;
    const eventCreated = await eventRepository.create({ description, dayOfWeek });

    return res.status(201).json({ event: eventCreated });
  }

  async getAllEvents(req: Request, res: Response): Promise<Response> {
    const events = await eventRepository.getAllEvents();

    return res.status(200).json({ events: events });
  }

  async getEventById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const event = await eventRepository.getEventById(id);

    return res.status(200).json({ event: event });
  }

  async getEventByDayOfWeek(req: Request, res: Response): Promise<Response> {
    let dayOfWeek = String(req.query.dayOfWeek);  
    dayOfWeek = await dayOfWeekValidator(dayOfWeek);

    const events = await eventRepository.getEventsByDayOfWeek(dayOfWeek);

    return res.status(200).json({ events: events });
  }

  async deleteEventById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await eventRepository.deleteEventById(id);

    return res.status(200).json({ message: "Event deleted" });
  }

  async deleteEventByDayOfWeek(req: Request, res: Response): Promise<Response> {
    let dayOfWeek = String(req.query.dayOfWeek);  
    dayOfWeek = await dayOfWeekValidator(dayOfWeek);

    await eventRepository.deleteEventsByDayOfWeek(dayOfWeek);

    return res.status(200).json({ message: "Event deleted" });
  }
}

export { EventController }