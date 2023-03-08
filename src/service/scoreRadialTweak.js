export default function scoreRadialTweak(data) {
  const treatedData = [];
  const score = data.todayScore ? data.todayScore * 100 : data.score * 100;
  treatedData.push({ score: score });
  return treatedData;
}
