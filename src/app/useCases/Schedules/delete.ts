import ScheduleRepository from "../../repositories/ScheduleRepository";

export async function deleteSchedules(id: string) {
  const existsSchedule = await ScheduleRepository.findByID(id);

  if (!existsSchedule) {
    throw new Error("Schedule does not exists");
  }

  await ScheduleRepository.delete(id);

  return;
}
