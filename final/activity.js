export class ACTIVITY {
  constructor(
    activityName,
    dayOfWeek,
    startTime,
    endTime,
    important,
    reminderTime
  ) {
    this.activityName = activityName;
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
    this.important = important;
    this.reminderTime = reminderTime;
  }
}
