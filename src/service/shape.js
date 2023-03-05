import fetchUsersData from "./service";

export default async function shapeData(id) {
  const data = await fetchUsersData(id);

  const userName = data[0].data.userInfos.firstName;
  let scoreRadial = data[0].data.todayScore;
  const sideStats = data[0].data.keyData;
  const activityChart = data[1].data.sessions;
  const sessionsLineChart = data[2].data.sessions;
  const perfRadar = data[3].data;
}
