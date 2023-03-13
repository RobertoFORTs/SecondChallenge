import mongoose from "mongoose";

interface IEvent {
  description: string;
  dayOfWeek: string;
  createdAt: Date;
  user: mongoose.Schema.ObjectId
}

export { IEvent };