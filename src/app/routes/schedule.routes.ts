import { Router } from "express";
import ScheduleController from "../controllers/ScheduleController";

const scheduleRoutes = Router();

scheduleRoutes.get("/", ScheduleController.findAll);
scheduleRoutes.post("/", ScheduleController.create);
scheduleRoutes.put("/:id", ScheduleController.update);
scheduleRoutes.delete("/", ScheduleController.delete);

export default scheduleRoutes;
