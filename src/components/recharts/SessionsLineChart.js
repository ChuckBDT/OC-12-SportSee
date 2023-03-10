import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

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

function SessionsLineChart({ data }) {
  return (
    <ResponsiveContainer height={260}>
      <LineChart
        className="rounded-md bg-red"
        data={data}
        margin={{
          bottom: 15,
        }}
      >
        <text
          className="font-medium"
          y={40}
          x={25}
          fill="white"
          fillOpacity={0.5}
        >
          Durée moyenne
        </text>
        <text
          className="font-medium"
          y={65}
          x={25}
          fill="white"
          fillOpacity={0.5}
        >
          des sessions
        </text>

        <XAxis
          dataKey="day"
          tick={{ fill: "white" }}
          opacity={0.5}
          axisLine={false}
          tickLine={false}
        />

        <YAxis padding={{ top: 80 }} orientation="right" hide={true} />

        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: "transparent" }}
          wrapperStyle={{ outline: "none" }}
        />

        <Line
          type="basis"
          dataKey="sessionLength"
          stroke="white"
          strokeOpacity={0.5}
          strokeWidth="0.15rem"
          dot={false}
          activeDot={{
            r: 4,
            fill: "white",
            stroke: "rgb(255,255,255, .4)",
            strokeWidth: "8px",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SessionsLineChart;
