import mongoose from "mongoose";

interface IEvent {
  description: string;
  dayOfWeek: string;
  createdAt: Date;
  user: mongoose.Schema.Types.ObjectId
}

export { IEvent };