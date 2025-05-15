const convertToMinutes = (time) => {
  console.log(time);
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const calculateTotalOccupiedTime = (activities, day) => {
  return activities[day].reduce((total, activity) => {
    const startTime = convertToMinutes(activity.startTime);
    const endTime = convertToMinutes(activity.endTime);
    return total + (endTime - startTime);
  }, 0);
};

export const canAddActivity = (
  activities,
  newActivity,
  remainingTimePerDay
) => {
  console.log(newActivity);
  const totalOccupiedTime = calculateTotalOccupiedTime(
    activities,
    newActivity.dayOfWeek
  );
  const remainingTime =
    remainingTimePerDay[newActivity.dayOfWeek] - totalOccupiedTime;
  const newActivityDuration =
    convertToMinutes(newActivity.endTime) -
    convertToMinutes(newActivity.startTime);

  return remainingTime >= newActivityDuration;
};

export const updateRemainingTime = (activities, remainingTimePerDay) => {
  for (const day in activities) {
    const totalOccupiedTime = calculateTotalOccupiedTime(activities, day);

    remainingTimePerDay[day] = 1440 - totalOccupiedTime;
  }
};
