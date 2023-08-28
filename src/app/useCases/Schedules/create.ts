import ScheduleRepository from "../../repositories/ScheduleRepository";

export async function createSchedules(name: string, color: string) {
  const existsSchedule = await ScheduleRepository.findByName(name);

  if (existsSchedule) {
    throw new Error("Name is already in use");
  }

  const newSchedule = await ScheduleRepository.create(name, color);

  return newSchedule;
}
