import { Request, Response } from "express";
import { EventRepository } from "../repositories/EventRepository";
import { ObjectId } from "mongoose";
import { AppError } from "../errors/AppError";

const eventRepository = EventRepository.getInstance();
interface IRequest extends Request {
  description: string;
  dayOfWeek: string;
  user: {
    _id: string;
  }
};

class EventController {
  async createEvent(req: IRequest, res: Response): Promise<Response> {
    let { description, dayOfWeek }: IRequest = req.body;
    dayOfWeek = dayOfWeek.toLowerCase();
    const user = req.user._id;

    let eventCreated = await eventRepository.create({ description, dayOfWeek, user });

    return res.status(201).json({
      message: 'success',
      data: {
        description: eventCreated.description,
        dayOfWeek: eventCreated.dayOfWeek,
        _id: eventCreated._id
      }

    });
  }

  async getAllEvents(req: IRequest, res: Response): Promise<Response> {
    const user = req.user._id;
    const events = await eventRepository.getAllEvents(user);

    return res.status(200).json({ events: events });
  }

  async getEventById(req: IRequest, res: Response): Promise<Response> {
    const { id } = req.params;
    const user = req.user._id;

    const eventFound = await eventRepository.getEventById(id, user);

    return res.status(200).json({ event: eventFound });
  }

  async getEventByDayOfWeek(req: IRequest, res: Response): Promise<Response> {
    let dayOfWeek = String(req.query.dayOfWeek);  
    dayOfWeek = dayOfWeek.toLowerCase();
    const user = req.user._id;
  
    const eventsFound = await eventRepository.getEventsByDayOfWeek(dayOfWeek, user);

    return res.status(200).json({ events: eventsFound });
  }

  async deleteEventById(req: IRequest, res: Response): Promise<Response> {
    const { id } = req.params;
    const user = req.user._id;

    const { deletedCount } = await eventRepository.deleteEventById(id, user);

    if (!deletedCount) {
      throw new AppError("Cannot find event delete", 404);
    }

    return res.status(204).send();
  }

  async deleteEventByDayOfWeek(req: IRequest, res: Response): Promise<Response> {
    let dayOfWeek = String(req.query.dayOfWeek);  
    dayOfWeek = dayOfWeek.toLowerCase();
    const user = req.user._id;

    const { deletedCount }= await eventRepository.deleteEventsByDayOfWeek(dayOfWeek, user);

    if (!deletedCount) {
      throw new AppError("Cannot find event delete", 404);
    }

    return res.status(204).send();
  }
}

export { EventController }