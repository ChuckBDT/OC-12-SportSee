// This function takes the day of each object
// and replace it by the day of the month only
// ex : 02/12/2003 => 2
// the goal here is to show only the day's number
// in the chart

export default function activityChart(data) {
  for (let el of data) {
    el.day = new Date(el.day).getDate();
  }

  return data;
}
