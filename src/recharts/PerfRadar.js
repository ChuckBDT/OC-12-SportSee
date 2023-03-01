import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

const dataM = [
  { value: 80, kind: "cardio" },
  { value: 120, kind: "energy" },
  { value: 140, kind: "endurance" },
  { value: 50, kind: "strength" },
  { value: 200, kind: "speed" },
  { value: 90, kind: "intensity" },
];

export default function PerfRadar({ data }) {
  return (
    <RadarChart
      className="h-64 bg-zinc-800 rounded-md"
      outerRadius={100}
      width={260}
      height={260}
      data={dataM}
    >
      <PolarGrid stroke="#FFFFFF" />
      <PolarAngleAxis dataKey="kind" />
      <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
    </RadarChart>
  );
}
