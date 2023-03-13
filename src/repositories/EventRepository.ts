import {  HydratedDocument, ObjectId } from "mongoose";
import { Event } from "../models/Event";

interface IEvent {
  description: string;
  dayOfWeek: string;
  user: ObjectId | string;
}

interface IEventRepository {
  create(event: IEvent): Promise<HydratedDocument<IEvent>>;
  getEventById(id: string, userId: string): Promise<HydratedDocument<IEvent> | null>;
  getEventsByDayOfWeek(dayOfWeek: string, userId: string): Promise<HydratedDocument<IEvent>[]>;  
  getAllEvents(userId: string): Promise<HydratedDocument<IEvent>[]>;  
  deleteEventById(id: string, userId: string): Promise<any>;
  deleteEventsByDayOfWeek(dayOfWeek: string, userId: string): Promise<any>;
}

class EventRepository implements IEventRepository {
  private static INSTANCE: EventRepository;

  static getInstance() {
    if (!EventRepository.INSTANCE) {
      EventRepository.INSTANCE = new EventRepository();
    }

    return EventRepository.INSTANCE;
  }

  async create({ description, dayOfWeek, user }: IEvent): Promise<HydratedDocument<IEvent>> {
    const event = await Event.create({ description, dayOfWeek, user});

    return event;
  }

  async getEventById(id: string, userId: string): Promise<HydratedDocument<IEvent> | null> {
    const event = await Event.findOne({ _id: id, user: userId });

    return event;
  }

  async getEventsByDayOfWeek(dayOfWeek: string, userId: string): Promise<HydratedDocument<IEvent>[]> {
    const eventsByDayOfWeek = await Event.find({ dayOfWeek, user: userId });

    return eventsByDayOfWeek;
  }

  async getAllEvents(userId: string): Promise<HydratedDocument<IEvent>[]> {
    const events = await Event.find({ user: userId});

    return events;
  }

  async deleteEventById(id: string, userId: string): Promise<any> {
    const eventDeleted = await Event.deleteOne({ _id: id, user: userId });
    
    return eventDeleted;
  }

  async deleteEventsByDayOfWeek(dayOfWeek: string, userId: string): Promise<any> {
    const eventDeleted = await Event.deleteMany({ dayOfWeek: dayOfWeek, user: userId });

    return eventDeleted;
  }
}

export { EventRepository }