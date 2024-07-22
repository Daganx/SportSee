import { User, Activity, AverageSessions, Performance } from "./models.js";

const API_URL = "http://localhost:3000";

const getUserData = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  const { data } = await response.json();
  console.log("User Data:", data);
  return new User(data);
};

const getUserActivity = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}/activity`);
  if (!response.ok) {
    throw new Error("Failed to fetch user activity");
  }
  const { data } = await response.json();
  console.log("User Activity:", data);
  return new Activity(data);
};

const getUserAverageSessions = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}/average-sessions`);
  if (!response.ok) {
    throw new Error("Failed to fetch user average sessions");
  }
  const { data } = await response.json();
  console.log("User Average Sessions:", data);
  return new AverageSessions(data);
};

const getUserPerformance = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}/performance`);
  if (!response.ok) {
    throw new Error("Failed to fetch user performance");
  }
  const { data } = await response.json();
  console.log("User Performance:", data);
  return new Performance(data);
};

export {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};
