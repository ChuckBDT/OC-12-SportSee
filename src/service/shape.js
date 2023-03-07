import fetchUsersData from "./service";
import lineChartTweak from "./lineChartTweak";
import perfRadarTweak from "./perfRadarTweak";

export default async function shapeData(id, mocked) {
  const data = await fetchUsersData(id, mocked);

  const userName = data[0].data.userInfos.firstName;

  const activityChart = data[1].data.sessions;

  // Transform day to only day's number
  // console.log(activityChart);

  const sessionsLineChart = lineChartTweak(data[2].data.sessions);

  const perfRadar = perfRadarTweak(data[3].data);

  const scoreRadial = data[0].data.todayScore
    ? data[0].data.todayScore * 100
    : data[0].data.score * 100;

  let sideStats = data[0].data.keyData;
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
