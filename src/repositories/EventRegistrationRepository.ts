import {  HydratedDocument, Types } from "mongoose";

interface IEventRegistration {
  descripttion: string;
  dateTime: string;
  createdAt: string;
}

interface IEventRegistrationRepository {
  create(EventRegistration: IEventRegistration): Promise<HydratedDocument<IEventRegistration>>;
  getEventRegistrationById(id: string): Promise<HydratedDocument<IEventRegistration> | null>;
  getEventsRegistrationByDayOfTheWeek(dayOfTheWeek: number): Promise<HydratedDocument<IEventRegistration>[]>;  
  getAllEventsRegistration(): Promise<HydratedDocument<IEventRegistration>[]>;  
  deleteEventRegistrationById(id: string): Promise<void>;
  // deleteFromWeekDay(dayOfTheWeek: number): Promise<void>;
}

export class EventRegistrationRepository implements IEventRegistrationRepository {
  create(EventRegistration: IEventRegistration)
  : Promise<HydratedDocument<IEventRegistration>> {
    throw new Error("Method not implemented.");
  }
  getEventRegistrationById(id: string)
  : Promise<HydratedDocument<IEventRegistration> | null> {
    throw new Error("Method not implemented.");
  }
  getEventsRegistrationByDayOfTheWeek(dayOfTheWeek: number)
  : Promise<HydratedDocument<IEventRegistration>[]> {
    throw new Error("Method not implemented.");
  }
  getAllEventsRegistration()
  : Promise<HydratedDocument<IEventRegistration>[]> {
    throw new Error("Method not implemented.");
  }
  deleteEventRegistrationById(id: string)
  : Promise<void> {
    throw new Error("Method not implemented.");
  }
}