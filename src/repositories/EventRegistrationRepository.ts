import { Document, HydratedDocument, Types } from "mongoose";

interface IEventRegistration {
  descripttion: string;
  dateTime: string;
  createdAt: string;
}

interface IEventRegistrationRepository {
  create(EventRegistration: IEventRegistration): Promise<HydratedDocument<IEventRegistration>>;
  getEventById(id: string): Promise<HydratedDocument<IEventRegistration> | null>;
  getEventsByWeekDay(dayOfTheWeek: number): Promise<HydratedDocument<IEventRegistration>[]>;  
  getAllEvents(): Promise<HydratedDocument<IEventRegistration>[]>;  
  deleteById(id: string): Promise<void>;
  // deleteFromWeekDay(dayOfTheWeek: number): Promise<void>;
}

export class EventRegistrationRepository implements IEventRegistrationRepository {
  create(EventRegistration: IEventRegistration): Promise<HydratedDocument<IEventRegistration>> {
    throw new Error("Method not implemented.");
  }
  getEventById(id: string): Promise<HydratedDocument<IEventRegistration> | null> {
    throw new Error("Method not implemented.");
  }
  getEventsByWeekDay(dayOfTheWeek: number): Promise<HydratedDocument<IEventRegistration>[]> {
    throw new Error("Method not implemented.");
  }
  getAllEvents(): Promise<HydratedDocument<IEventRegistration>[]> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}