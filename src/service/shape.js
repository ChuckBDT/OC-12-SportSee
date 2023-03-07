import fetchUsersData from "./service";
import lineChartTweak from "./lineChartTweak";

export default async function shapeData(id, mocked) {
  const data = await fetchUsersData(id, mocked);

  const userName = data[0].data.userInfos.firstName;
  let scoreRadial = data[0].data.todayScore
    ? data[0].data.todayScore
    : data[0].data.score;
  let sideStats = data[0].data.keyData;
  const activityChart = data[1].data.sessions;
  const sessionsLineChart = data[2].data.sessions;
  const perfRadar = data[3].data;

  // Todo: lowercase on name then uppercase on first letter
  // console.log("Name : " + userName);

  // Transform day to only day's number
  // console.log(activityChart);

  // Add fake first and fake last data to make line on edges
  lineChartTweak(sessionsLineChart);

  // Change names to french
  // console.log(perfRadar);

  // Changing score's scale
  scoreRadial = scoreRadial * 100;

  // Transform calorie count from XXXX to X,XXX
  sideStats.calorieCount = (sideStats.calorieCount / 1000)
    .toFixed(3)
    .replace(/\./g, ",");

  const treatedData = {
    name: userName,
    activityChart: activityChart,
    sessionsLineChart: sessionsLineChart,
    perfRadar: perfRadar,
    scoreRadial: { score: scoreRadial },
    sideStats: sideStats,
  };
  return treatedData;
}
