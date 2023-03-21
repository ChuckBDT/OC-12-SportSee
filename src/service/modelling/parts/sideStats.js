/**
 * Transform calorie count from XXXX to X,XXX
 * @param {{}} data
 * @returns {{}}
 */

export default function sideStats(data) {
  data.calorieCount = (data.calorieCount / 1000).toFixed(3).replace(/\./g, ",");
  return data;
}
