export default function activityChartTweak(data) {
  for (let el of data) {
    el.day = new Date(el.day).getDate();
  }

  return data;
}
