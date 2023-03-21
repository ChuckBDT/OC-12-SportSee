/**
 * This function is related to the way that
 * recharts show the LineChart component.
 * To make a line on each edge of the chart,
 * recharts show the first and last data also
 * on the edges of the chart.
 * Considering this, it's impossible to make
 * a proper result that matches the mockup.
 *
 * So, with the two functions inside sessionsLineChart,
 * a fake first and last data are provided based on the
 * existing data. Those fake data have no "day" key
 * to avoid the Tooltip showing up.
 *
 * @param {Array} data
 * @returns {Array}
 */

export default function sessionsLineChart(data) {
  function calculateFirstFake() {
    const firstFakeData = data[1].sessionLength - data[0].sessionLength;

    if (firstFakeData > 0) {
      return data[0].sessionLength - firstFakeData;
    } else if (firstFakeData === 0) {
      return data[0].sessionLength;
    } else {
      return data[0].sessionLength + firstFakeData;
    }
  }
  const first = { sessionLength: calculateFirstFake() };

  function calculateLastFake() {
    const lastFakeData =
      data[data.length - 1].sessionLength - data[data.length - 2].sessionLength;

    if (lastFakeData > 0) {
      return data[data.length - 1].sessionLength + lastFakeData;
    } else if (lastFakeData === 0) {
      return data[data.length - 1].sessionLength;
    } else {
      return data[data.length - 1].sessionLength - lastFakeData;
    }
  }
  const last = { sessionLength: calculateLastFake() };

  data.unshift(first);
  data.push(last);

  return data;
}
