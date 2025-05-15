import { activitiesPerDay } from "./storage.js";

export const checkReminders = () => {
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentDay = currentTime.toLocaleString("en-US", { weekday: "long" });

  Object.keys(activitiesPerDay).forEach((day) => {
    activitiesPerDay[day].forEach((activity) => {
      if (activity.startTime && activity.reminderTime) {
        const [startHours, startMinutes] = activity.startTime
          .split(":")
          .map(Number);

        const startDate = new Date();
        startDate.setHours(startHours);
        startDate.setMinutes(startMinutes);

        const reminderDate = new Date(startDate);
        reminderDate.setMinutes(
          reminderDate.getMinutes() - activity.reminderTime
        );

        if (
          currentHours === reminderDate.getHours() &&
          currentMinutes === reminderDate.getMinutes() &&
          currentDay === day
        ) {
          alert(
            `Reminder: ${activity.activityName} is scheduled at ${activity.startTime}`
          );
        }
      }
    });
  });
};
