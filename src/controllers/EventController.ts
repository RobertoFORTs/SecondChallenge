import { Request, Response } from "express";
import { EventRepository } from "../repositories/EventRepository";
import { User } from "../models/User";

const eventRepository = EventRepository.getInstance();
interface IRequest extends Request {
  description: string;
  dayOfWeek: string;
  createdAt: Date;
};

class EventController {
  async createEvent(req: any, res: Response): Promise<Response> {
    const { description, dayOfWeek }: IRequest = req.body;
    const user = req.user._id;

    const eventCreated = await eventRepository.create({ description, dayOfWeek, user });

    return res.status(201).json({ event: eventCreated });
  }

  async getAllEvents(req: Request, res: Response): Promise<Response> {
    const events = await eventRepository.getAllEvents();

    return res.status(200).json({ events: events });
  }

  async getEventById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const eventFound = await eventRepository.getEventById(id);

    return res.status(200).json({ event: eventFound });
  }

  async getEventByDayOfWeek(req: Request, res: Response): Promise<Response> {
    let dayOfWeek = String(req.query.dayOfWeek);  
  
    const eventsFound = await eventRepository.getEventsByDayOfWeek(dayOfWeek);

    return res.status(200).json({ events: eventsFound });
  }

  async deleteEventById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await eventRepository.deleteEventById(id);

    return res.status(204).json({ message: "Event deleted" });
  }

  async deleteEventByDayOfWeek(req: Request, res: Response): Promise<Response> {
    let dayOfWeek = String(req.query.dayOfWeek);  

    await eventRepository.deleteEventsByDayOfWeek(dayOfWeek);

    return res.status(204).json({ message: "Event deleted" });
  }
}

export { EventController }