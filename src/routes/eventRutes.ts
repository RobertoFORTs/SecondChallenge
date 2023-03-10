import express, { Request, Response } from "express";
import { EventController } from "../controllers/EventController";
import { createEventValidator } from "../validators/createEventValidator";
import { idValidator } from "../validators/idValidator";

const eventRouter = express.Router();

const eventController = new EventController();

eventRouter.post("/", createEventValidator, eventController.createEvent);

eventRouter.get("/", (req: Request, res: Response) => {
  req.query.dayOfWeek ? eventController.getEventByDayOfWeek(req, res) 
  : eventController.getAllEvents(req, res);
});
eventRouter.get("/:id", idValidator, eventController.getEventById);

eventRouter.delete("/event/:id", idValidator, eventController.deleteEventById);
eventRouter.delete("/", eventController.deleteEventByDayOfWeek);

export { eventRouter }