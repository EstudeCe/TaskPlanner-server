import { Request, Response } from "express";
import { findAllSchedule } from "../useCases/Schedules/findAll";

class ScheduleController {
  async findAll(request: Request, response: Response) {
    const allSchedules = await findAllSchedule();

    return response.json(allSchedules);
  }

  create(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    return response.json({ message: "create", name });
  }

  update(request: Request, response: Response) {
    const { name } = request.body;
    const { id } = request.params;

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    if (!id) {
      return response.status(400).json({ error: "ID is required" });
    }

    return response.json({ message: "update", name, id });
  }

  delete(request: Request, response: Response) {
    const { id } = request.body;

    if (!id) {
      return response.status(400).json({ error: "ID is required" });
    }

    return response.sendStatus(204);
  }
}

export default new ScheduleController();
