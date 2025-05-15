const saveLS = (activityData, key) => {
  const serializedArr = JSON.stringify(activityData);
  localStorage.setItem(key, serializedArr);
};

const getLS = (key) => {
  const retrievedArr = localStorage.getItem(key);
  if (retrievedArr !== null) {
    return JSON.parse(retrievedArr);
  } else {
    return null;
  }
};

const activitiesPerDay = getLS("activity") || {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
};

const remainingTimePerDay = {
  Monday: 1440,
  Tuesday: 1440,
  Wednesday: 1440,
  Thursday: 1440,
  Friday: 1440,
  Saturday: 1440,
  Sunday: 1440,
};

export { activitiesPerDay, remainingTimePerDay, saveLS, getLS };
