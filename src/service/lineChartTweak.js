// Todo: Comment this function

export default function lineChartTweak(data) {
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
    console.log(lastFakeData);

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
