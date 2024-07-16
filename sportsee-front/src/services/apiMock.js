import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mockData.js";

const getMockUserData = (userId) => {
  return new Promise((resolve, reject) => {
    const user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));
    if (user) {
      resolve(user);
    } else {
      reject("User not found");
    }
  });
};

const getMockUserActivity = (userId) => {
  return new Promise((resolve, reject) => {
    const activity = USER_ACTIVITY.find(
      (activity) => activity.userId === parseInt(userId)
    );
    if (activity) {
      resolve(activity);
    } else {
      reject("Activity not found");
    }
  });
};

const getMockUserAverageSessions = (userId) => {
  return new Promise((resolve, reject) => {
    const sessions = USER_AVERAGE_SESSIONS.find(
      (session) => session.userId === parseInt(userId)
    );
    if (sessions) {
      resolve(sessions);
    } else {
      reject("Sessions not found");
    }
  });
};

const getMockUserPerformance = (userId) => {
  return new Promise((resolve, reject) => {
    const performance = USER_PERFORMANCE.find(
      (performance) => performance.userId === parseInt(userId)
    );
    if (performance) {
      resolve(performance);
    } else {
      reject("Performance not found");
    }
  });
};

export {
  getMockUserData,
  getMockUserActivity,
  getMockUserAverageSessions,
  getMockUserPerformance,
};
