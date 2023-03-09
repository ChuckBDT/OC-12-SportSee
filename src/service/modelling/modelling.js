import activityChart from "./parts/activityChart";
import perfRadar from "./parts/perfRadar";
import scoreRadial from "./parts/scoreRadial";
import sessionsLineChart from "./parts/sessionsLineChart";
import sideStats from "./parts/sideStats";

export default async function modelling(data) {
  const treatedData = {
    name: data[0].data.userInfos.firstName,
    activityChart: activityChart(data[1].data.sessions),
    sessionsLineChart: sessionsLineChart(data[2].data.sessions),
    perfRadar: perfRadar(data[3].data),
    scoreRadial: scoreRadial(data[0].data),
    sideStats: sideStats(data[0].data.keyData),
  };
  return treatedData;
}
