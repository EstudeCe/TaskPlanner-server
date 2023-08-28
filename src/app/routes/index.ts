import { Router } from "express";
import scheduleRoutes from "./schedule.routes";

const routes = Router();

routes.use("/api/schedule", scheduleRoutes);

export default routes;
