import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function PerfRadar({ data }) {
  return (
    <ResponsiveContainer height={260}>
      <RadarChart
        className="bg-zinc-800 rounded-md justify-self-center"
        outerRadius={90}
        data={data}
        startAngle={-150}
        endAngle={210}
      >
        <PolarGrid stroke="#FFFFFF" />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: "white", fontSize: "12px", fontWeight: "500" }}
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
