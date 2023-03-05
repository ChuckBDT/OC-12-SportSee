import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

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
    <ResponsiveContainer>
      <RadarChart
        className="bg-zinc-800 rounded-md justify-self-center"
        outerRadius={90}
        data={dataM}
      >
        <PolarGrid stroke="#FFFFFF" />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: "white", fontSize: "12px", fontWeight: "500" }}
        />
        <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
