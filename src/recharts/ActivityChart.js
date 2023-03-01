import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function ActivityChart({ data }) {
  return (
    <div className="col-span-3 h-80 bg-white">
      <BarChart
        width={600}
        height={320}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5" />
        <XAxis stroke="#9B9EAC" />
        <YAxis orientation="right" dataKey="kilogram" stroke="#9B9EAC" />
        <Tooltip />
        <Legend verticalAlign="top" align="right" />
        <Bar
          dataKey="kilogram"
          barSize={7}
          radius={[5, 5, 0, 0]}
          fill="#282D30"
        />
        <Bar
          dataKey="calories"
          barSize={7}
          radius={[5, 5, 0, 0]}
          fill="#ff0000"
        />
      </BarChart>
    </div>
  );
}
