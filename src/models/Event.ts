import mongoose, { Schema, model } from "mongoose";
import { IEvent } from "./IEvent";

const eventSchema = new Schema<IEvent>({
  description: {
    type: String,
  },
  dayOfWeek: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user : {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  }
});

const Event = model<IEvent>("Event", eventSchema);

export { Event }