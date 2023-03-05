export default async function fetchUsersData(id) {
  const [userRes, activityRes, averageSessionsRes, performanceRes] =
    await Promise.all([
      fetch(`http://localhost:3000/user/${id}`),
      fetch(`http://localhost:3000/user/${id}/activity`),
      fetch(`http://localhost:3000/user/${id}/average-sessions`),
      fetch(`http://localhost:3000/user/${id}/performance`),
    ]);

  const user = await userRes.json();
  const activity = await activityRes.json();
  const averageSessions = await averageSessionsRes.json();
  const performance = await performanceRes.json();

  return [user, activity, averageSessions, performance];
}
