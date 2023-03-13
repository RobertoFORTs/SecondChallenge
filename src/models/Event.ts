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
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    select: false
  }
});

const Event = model<IEvent>("Event", eventSchema);

export { Event }