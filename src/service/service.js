import modelling from "./modelling/modelling";

/**
 * Fetch function to get all the user's data
 * from the API or the mocked data
 *
 * The received data is stored in an array then
 * passed to the function modelling, the data returned
 * from modelling is then returned.
 *
 * @param {number} id
 * @param {boolean} mocked
 * @returns {{}}
 */

export default async function fetchUsersData(id, mocked) {
  let user, activity, averageSessions, performance;
  let [userRes, activityRes, averageSessionsRes, performanceRes] = [];

  if (mocked) {
    [userRes, activityRes, averageSessionsRes, performanceRes] =
      await Promise.all([
        fetch(`/mockedData/${id}-id.json`),
        fetch(`/mockedData/${id}-activity.json`),
        fetch(`/mockedData/${id}-average-sessions.json`),
        fetch(`/mockedData/${id}-performance.json`),
      ]);
  } else {
    [userRes, activityRes, averageSessionsRes, performanceRes] =
      await Promise.all([
        fetch(`http://localhost:3456/user/${id}`),
        fetch(`http://localhost:3456/user/${id}/activity`),
        fetch(`http://localhost:3456/user/${id}/average-sessions`),
        fetch(`http://localhost:3456/user/${id}/performance`),
      ]);
  }

  user = await userRes.json();
  activity = await activityRes.json();
  averageSessions = await averageSessionsRes.json();
  performance = await performanceRes.json();

  return modelling([user, activity, averageSessions, performance]);
}
