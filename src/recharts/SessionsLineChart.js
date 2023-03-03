import React from "react";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

const data = [
  { sessionLength: 37 },
  { day: 1, sessionLength: 30 },
  { day: 2, sessionLength: 23 },
  { day: 3, sessionLength: 45 },
  { day: 4, sessionLength: 50 },
  { day: 5, sessionLength: 0 },
  { day: 6, sessionLength: 0 },
  { day: 7, sessionLength: 60 },
  { sessionLength: 75 },
];

const CustomTooltip = ({ active, payload, label }) => {
  // Thanks to https://stackoverflow.com/a/72964329
  // Customized to show Tooltip only if a label is provided
  // As the first and last object of the array contain fake
  // data without labels to display the line on the edges
  // of the chart, the tooltip won't show the fake data

  if (active && payload && payload.length && label) {
    return (
      <div className="h-8 w-14 bg-white flex justify-center items-center">
        <p className="text-black font-medium text-xs">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

function SessionsLineChart() {
  return (
    <LineChart
      className="rounded-md bg-red-project"
      width={260}
      height={260}
      data={data}
      margin={{
        bottom: 15,
      }}
    >
      <text y={40} x={25} fill="rgb(255 255 255 / .5)">
        Durée moyenne
      </text>
      <text y={65} x={25} fill="rgb(255 255 255 / .5)">
        des sessions
      </text>

      <XAxis
        dataKey="day"
        tick={{ fill: "rgb(255 255 255 / .5" }}
        axisLine={false}
        tickLine={false}
      />

      <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />

      <Line
        type="basis"
        dataKey="sessionLength"
        stroke="rgb(255 255 255 / .5"
        strokeWidth="0.15rem"
        dot={false}
        activeDot={{ r: 3, fill: "white" }}
      />
    </LineChart>
  );
}

export default SessionsLineChart;
