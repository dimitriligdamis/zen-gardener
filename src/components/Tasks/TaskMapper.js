export default class TaskMapper {
  static toBigCalEvents(taskEvents) {
    return taskEvents.map((task) => ({
      title: task.label,
      start: new Date(task.begin_date),
      end: new Date(task.limit_date),
    }));
  }
}
