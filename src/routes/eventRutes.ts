import express, { NextFunction, Request, Response } from "express";
import { EventController } from "../controllers/EventController";
import { createEventValidator } from "../validators/createEventValidator";
import { dayOfWeekValidator } from "../validators/dayOfWeekValidator";
import { idValidator } from "../validators/idValidator";

const eventRouter = express.Router();

const eventController = new EventController();

eventRouter.post("/", createEventValidator, eventController.createEvent);

eventRouter.get("/", eventController.getAllEvents);
eventRouter.get("/dayOfWeek", dayOfWeekValidator, eventController.getEventByDayOfWeek);
eventRouter.get("/:id", idValidator, eventController.getEventById);

eventRouter.delete("/event/:id", idValidator, eventController.deleteEventById);
eventRouter.delete("/", dayOfWeekValidator, eventController.deleteEventByDayOfWeek);

export { eventRouter }