import { Schema, model } from "mongoose";

interface IEvent {
  description: string;
  dateTime: Date;
  createdAt: Date;
}

const eventSchema = new Schema<IEvent>({
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

const Event = model<IEvent>("Event", eventSchema);

export { Event }