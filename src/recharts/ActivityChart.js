import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ActivityChart({ data }) {
  return (
    <div className="col-span-3 h-80 bg-gray-50 rounded-md">
      <ResponsiveContainer height={250}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 5,
          }}
          barGap={8}
        >
          <text y={40} x={25} fill="rgb(23 23 23)">
            Activité quotidienne
          </text>
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis stroke="#9B9EAC" tickLine={false} />
          <YAxis
            yAxisId="right"
            orientation="right"
            dataKey="kilogram"
            stroke="#9B9EAC"
            domain={["dataMin-10", "dataMax+1"]}
            axisLine={false}
            tickLine={false}
            tickCount={3}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            dataKey="calories"
            domain={["dataMin -10", "dataMax"]}
            hide={true}
          />
          <Tooltip />
          <Legend verticalAlign="top" align="right" />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            barSize={7}
            radius={[5, 5, 0, 0]}
            fill="#282D30"
          />
          <Bar
            yAxisId="left"
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
