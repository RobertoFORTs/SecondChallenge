import {  HydratedDocument } from "mongoose";
import { Event } from "../models/Event";

interface IEvent {
  description: string;
  dayOfWeek: string;
  createdAt: Date;
}

interface IEventRepository {
  create(event: IEvent): Promise<HydratedDocument<IEvent>>;
  getEventById(id: string): Promise<HydratedDocument<IEvent> | null>;
  getEventsByDayOfWeek(dayOfWeek: string): Promise<HydratedDocument<IEvent>[]>;  
  getAllEvents(): Promise<HydratedDocument<IEvent>[]>;  
  deleteEventById(id: string): Promise<void>;
  deleteEventsByDayOfWeek(dayOfWeek: string): Promise<void>;
}

class EventRepository implements IEventRepository {
  private static INSTANCE: EventRepository;

  static getInstance() {
    if (!EventRepository.INSTANCE) {
      EventRepository.INSTANCE = new EventRepository();
    }

    return EventRepository.INSTANCE;
  }

  async create({ description, dayOfWeek, createdAt }: IEvent): Promise<HydratedDocument<IEvent>> {
    const event = await Event.create({ description, dayOfWeek, createdAt });

    return event;
  }

  async getEventById(id: string): Promise<HydratedDocument<IEvent> | null> {
    const event = await Event.findById(id);

    return event;
  }

  async getEventsByDayOfWeek(dayOfWeek: string): Promise<HydratedDocument<IEvent>[]> {
    const events = await Event.find();
    const eventsByDayOfWeek = events.filter((event: HydratedDocument<IEvent>) => {
      if (dayOfWeek === event.dayOfWeek) {
        return event;
      }
    });

    return eventsByDayOfWeek;
  }

  async getAllEvents(): Promise<HydratedDocument<IEvent>[]> {
    const events = await Event.find();

    return events;
  }

  async deleteEventById(id: string): Promise<void> {
    await Event.deleteOne({ _id: id });
    
    return;
  }

  async deleteEventsByDayOfWeek(dayOfWeek: string): Promise<void> {
    const events = await Event.find();
    events.filter(async (event: HydratedDocument<IEvent>) => {
      if (dayOfWeek === event.dayOfWeek) {
        await Event.deleteOne(event._id);
      }
    });

    return;
  }
}

export { EventRepository }