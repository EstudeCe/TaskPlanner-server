import { Request, Response } from "express";
import { findAllSchedules } from "../useCases/Schedules/findAll";
import { createSchedules } from "../useCases/Schedules/create";
import { deleteSchedules } from "../useCases/Schedules/delete";
import { updateSchedules } from "../useCases/Schedules/update";

class ScheduleController {
  async findAll(request: Request, response: Response) {
    const allSchedules = await findAllSchedules();
    return response.json(allSchedules);
  }

  async create(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const createSchedule = await createSchedules(name);

    return response.json(createSchedule);
  }

  async update(request: Request, response: Response) {
    const { name } = request.body;
    const { id } = request.params;

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    if (!id) {
      return response.status(400).json({ error: "ID is required" });
    }

    const newSchedule = await updateSchedules(name, id);

    return response.json(newSchedule);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.body;

    if (!id) {
      return response.status(400).json({ error: "ID is required" });
    }

    await deleteSchedules(id);

    return response.sendStatus(204);
  }
}

export default new ScheduleController();
