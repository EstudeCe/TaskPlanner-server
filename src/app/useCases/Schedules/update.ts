import ScheduleRepository from "../../repositories/ScheduleRepository";

export async function updateSchedules(id: string, name: string, color: string) {
  const existsSchedule = await ScheduleRepository.findByID(id);

  if (!existsSchedule) {
    throw new Error("Schedule does not exists");
  }

  const newSchedule = await ScheduleRepository.update(id, { name, color });

  return {
    name,
    id,
  };
}
