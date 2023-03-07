export default function activityChartTweak(data) {
  const treatedData = [];
  for (let el of data) {
    treatedData.push({
      day: new Date(el.day).getDate(),
      kilogram: el.kilogram,
      calories: el.calories,
    });
  }
  return treatedData;
}
