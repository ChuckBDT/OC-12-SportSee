import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "value",
    uv: 12,
  },
];

const size = 260;

function ScoreRadial() {
  return (
    <ResponsiveContainer>
      <RadialBarChart
        className=" bg-gray-50 rounded-md relative flex justify-center items-center justify-self-end"
        innerRadius={80}
        outerRadius={90}
        barSize={10}
        startAngle={90}
        endAngle={450}
        data={data}
      >
        <text y={40} x={25} fill="rgb(23 23 23)">
          Score
        </text>
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          axisLineType="circle"
          tick={false}
        />
        <RadialBar fill="#FF0000" cornerRadius={5} dataKey="uv" />
        <text
          x={size / 2}
          y={110}
          //   Equivalent of text-neutral-900 of TailwindCSS
          fill="rgb(23 23 23)"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl font-bold"
        >
          {data[0].uv} %
        </text>
        <text
          x={size / 2}
          y={140}
          //   Equivalent of text-neutral-500 of TailwindCSS
          fill="rgb(115 115 115)"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-base font-medium"
        >
          de votre objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default ScoreRadial;
