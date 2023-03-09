import {  HydratedDocument } from "mongoose";

interface IEvent {
  descripttion: string;
  dateTime: string;
  createdAt: string;
}

interface IEventRepository {
  create(event: IEvent): Promise<HydratedDocument<IEvent>>;
  getEventById(id: string): Promise<HydratedDocument<IEvent> | null>;
  getEventsByDayOfTheWeek(dayOfTheWeek: number): Promise<HydratedDocument<IEvent>[]>;  
  getAllEvents(): Promise<HydratedDocument<IEvent>[]>;  
  deleteEventById(id: string): Promise<void>;
  // deleteFromWeekDay(dayOfTheWeek: number): Promise<void>;
}

export class EventRepository implements IEventRepository {
  create(event: IEvent): Promise<HydratedDocument<IEvent>> {
    throw new Error("Method not implemented.");
  }
  getEventById(id: string): Promise<HydratedDocument<IEvent> | null> {
    throw new Error("Method not implemented.");
  }
  getEventsByDayOfTheWeek(dayOfTheWeek: number): Promise<HydratedDocument<IEvent>[]> {
    throw new Error("Method not implemented.");
  }
  getAllEvents(): Promise<HydratedDocument<IEvent>[]> {
    throw new Error("Method not implemented.");
  }
  deleteEventById(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}