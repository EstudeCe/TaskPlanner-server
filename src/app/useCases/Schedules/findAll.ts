import ScheduleRepository from "../../repositories/ScheduleRepository";

export async function findAllSchedules() {
  const allSchedules = await ScheduleRepository.findAll();

  return allSchedules;
}
