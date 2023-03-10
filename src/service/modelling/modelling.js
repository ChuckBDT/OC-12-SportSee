import activityChart from "./parts/activityChart";
import perfRadar from "./parts/perfRadar";
import scoreRadial from "./parts/scoreRadial";
import sessionsLineChart from "./parts/sessionsLineChart";
import sideStats from "./parts/sideStats";

/**
 * Modeling function for the fetched data from service
 *
 * The goal is to model every data received to avoid any
 * data treatment in the components in which they will be
 * passed through props
 *
 * @param {Array} data
 * @returns {{}}
 */

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
