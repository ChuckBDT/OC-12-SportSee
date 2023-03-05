import fetchUsersData from "./service";

export default async function shapeData(id, mocked) {
  const data = await fetchUsersData(id, mocked);

  console.log(data);
  const userName = data[0].data.userInfos.firstName;
  let scoreRadial = data[0].data.todayScore
    ? data[0].data.todayScore
    : data[0].data.score;
  const sideStats = data[0].data.keyData;
  const activityChart = data[1].data.sessions;
  const sessionsLineChart = data[2].data.sessions;
  const perfRadar = data[3].data;

  // Todo: lowercase on name then uppercase on first letter
  console.log("Name : " + userName);

  // Changing score's scale
  scoreRadial = scoreRadial * 100;
  console.log("Score : " + scoreRadial);

  // Changing key's names and adjusting calories count
  console.log(sideStats);
  //   Object.defineProperty(sideStats, "calorieCount", "calories");
  //   console.log(sideStats);
}
