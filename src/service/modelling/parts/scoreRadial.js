// Transform the score from 0,XX to XX

export default function scoreRadial(data) {
  const treatedData = [];
  const score = data.todayScore ? data.todayScore * 100 : data.score * 100;
  treatedData.push({ score: score });
  return treatedData;
}
