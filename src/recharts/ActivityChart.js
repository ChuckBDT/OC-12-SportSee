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
  ResponsiveContainer,
} from "recharts";

export default function ActivityChart({ data }) {
  return (
    <div className="col-span-3 h-80 bg-gray-500 rounded-md">
      <ResponsiveContainer>
        <BarChart
          // width={600}
          // height={320}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <text y={40} x={25} fill="rgb(23 23 23)">
            Activité quotidienne
          </text>
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
      </ResponsiveContainer>
    </div>
  );
}
