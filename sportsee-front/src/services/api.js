const API_URL = "http://localhost:3000";

const getUserData = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  const { data } = await response.json();
  console.log("User Data:", data);
  return data;
};

const getUserActivity = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}/activity`);
  if (!response.ok) {
    throw new Error("Failed to fetch user activity");
  }
  const { data } = await response.json();
  console.log("User Activity:", data);
  return data;
};

const getUserAverageSessions = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}/average-sessions`);
  if (!response.ok) {
    throw new Error("Failed to fetch user average sessions");
  }
  const { data } = await response.json();
  console.log("User Average Sessions:", data);
  return data;
};

const getUserPerformance = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}/performance`);
  if (!response.ok) {
    throw new Error("Failed to fetch user performance");
  }
  const { data } = await response.json();
  console.log("User Performance:", data);
  return data;
};

export {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};
