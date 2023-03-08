import { Schema, model } from "mongoose";

interface IEventRegistration {
  description: string;
  dateTime: Date;
  createdAt: Date;
}

const eventRegistrationSchema = new Schema<IEventRegistration>({
  description: { 
    type: String,
  },
  dateTime: { 
    type: Date,
  },
  createdAt: { 
    type: Date, 
    default: Date.now(),
  },
});

const EventRegistration = model<IEventRegistration>("EventRegistration", eventRegistrationSchema);

export { EventRegistration }