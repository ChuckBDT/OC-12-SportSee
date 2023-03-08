import fetchUsersData from "./service";
import lineChartTweak from "./lineChartTweak";
import perfRadarTweak from "./perfRadarTweak";
import activityChartTweak from "./activityChartTweak";
import scoreRadialTweak from "./scoreRadialTweak";

export default async function shapeData(id, mocked) {
  const data = await fetchUsersData(id, mocked);

  const userName = data[0].data.userInfos.firstName;

  const activityChart = activityChartTweak(data[1].data.sessions);

  const sessionsLineChart = lineChartTweak(data[2].data.sessions);

  const perfRadar = perfRadarTweak(data[3].data);

  const scoreRadial = scoreRadialTweak(data[0].data);

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
    scoreRadial: scoreRadial,
    sideStats: sideStats,
  };
  return treatedData;
}
