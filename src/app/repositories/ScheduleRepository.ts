import { v4 as uuidv4 } from "uuid";

interface Schedule {
  name: string;
  id: string;
  color: string;
}

let schedules: Schedule[] = [
  { name: "Schedule 1", color: "#ccc", id: uuidv4() },
  { name: "Schedule 2", color: "#159", id: uuidv4() },
  { name: "Schedule 3", color: "#874", id: uuidv4() },
];

class ScheduleRepository {
  findAll() {
    return new Promise((resolve) => resolve(schedules));
  }

  findByName(name: string) {
    return new Promise((resolve) =>
      resolve(schedules.find((schedule) => schedule.name === name))
    );
  }

  findByID(id: string) {
    return new Promise((resolve) =>
      resolve(schedules.find((schedule) => schedule.id === id))
    );
  }

  create(name: string, color: string) {
    return new Promise((resolve) => {
      const newSchedule = {
        id: uuidv4(),
        name,
        color,
      };

      schedules.push(newSchedule);

      resolve(schedules);
    });
  }

  update(id: string, { name, color }: { name: string; color: string }) {
    return new Promise((resolve) => {
      schedules = schedules.map((schedule) => {
        if (schedule.id === id) {
          return { color, id, name };
        }

        return schedule;
      });

      resolve({ id, name, color });
    });
  }

  delete(id: string) {
    return new Promise((resolve) => {
      schedules = schedules.filter((schedule) => schedule.id !== id);

      resolve("");
    });
  }
}

export default new ScheduleRepository();
