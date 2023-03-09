import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  // Thanks to https://stackoverflow.com/a/72964329
  if (active && payload && payload.length) {
    return (
      <div className="h-20 w-14 bg-red-600 text-white flex flex-col justify-around items-center">
        <p className="font-medium text-xs">{`${payload[0].value} kg`}</p>
        <p className="font-medium text-xs">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

export default function ActivityChart({ data }) {
  return (
    <div className=" h-80 bg-gray-50 rounded-md flex flex-col justify-center items-end">
      <div className="flex w-full h-36 justify-between items-center px-8 font-medium">
        <p className="text-neutral-900 text-base flex-1 ">
          Activité quotidienne
        </p>
        <p className="text-neutral-500 text-sm pl-4 ml-4 weight-circle flex flex-row-reverse justify-between items-center relative">
          Poids (kg)
        </p>
        <p className="text-neutral-500 text-sm pl-4 ml-4 calorie-circle flex flex-row-reverse justify-between items-center relative">
          Calories brûlées (kCal)
        </p>
      </div>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 30,
            bottom: 5,
          }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis stroke="#9B9EAC" tickLine={false} dataKey="day" />
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
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />

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
