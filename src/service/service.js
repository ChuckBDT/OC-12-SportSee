import modelling from "./modelling/modelling";

export default async function fetchUsersData(id, mocked) {
  let user, activity, averageSessions, performance;

  if (mocked) {
    const [userRes, activityRes, averageSessionsRes, performanceRes] =
      await Promise.all([
        fetch(`./mockedData/${id}-id.json`),
        fetch(`./mockedData/${id}-activity.json`),
        fetch(`./mockedData/${id}-average-sessions.json`),
        fetch(`./mockedData/${id}-performance.json`),
      ]);

    user = await userRes.json();
    activity = await activityRes.json();
    averageSessions = await averageSessionsRes.json();
    performance = await performanceRes.json();
  } else {
    const [userRes, activityRes, averageSessionsRes, performanceRes] =
      await Promise.all([
        fetch(`http://localhost:3456/user/${id}`),
        fetch(`http://localhost:3456/user/${id}/activity`),
        fetch(`http://localhost:3456/user/${id}/average-sessions`),
        fetch(`http://localhost:3456/user/${id}/performance`),
      ]);

    user = await userRes.json();
    activity = await activityRes.json();
    averageSessions = await averageSessionsRes.json();
    performance = await performanceRes.json();
  }
  return modelling([user, activity, averageSessions, performance]);
}
