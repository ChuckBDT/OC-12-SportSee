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

import PropTypes from "prop-types";

import { colors } from "../../assets/colors";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='h-20 w-14 bg-red text-white flex flex-col justify-around items-center border-0'>
        <p className='font-medium text-xs'>{`${payload[0].value} kg`}</p>
        <p className='font-medium text-xs'>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

// Activity chart component : Displays a bar chart with
// activity data (weight, burned calories) depending on the day
export default function ActivityChart({ data }) {
  return (
    <div className=' h-80 bg-grayLight rounded-md flex flex-col justify-center items-end'>
      <div className='flex w-full h-36 justify-between items-center px-8 font-medium'>
        <p className='text-grayDark text-base flex-1 '>Activité quotidienne</p>
        <p className='text-grayMedium text-sm pl-4 ml-4 weight-circle flex flex-row-reverse justify-between items-center relative'>
          Poids (kg)
        </p>
        <p className='text-grayMedium text-sm pl-4 ml-4 calorie-circle flex flex-row-reverse justify-between items-center relative'>
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
          <CartesianGrid strokeDasharray='2 2' vertical={false} />
          <XAxis stroke={colors.grayMedium} tickLine={false} dataKey='day' />
          <YAxis
            yAxisId='right'
            orientation='right'
            dataKey='kilogram'
            stroke={colors.grayMedium}
            domain={["dataMin-10", "dataMax+1"]}
            axisLine={false}
            tickLine={false}
            tickCount={3}
          />
          <YAxis
            yAxisId='left'
            orientation='left'
            dataKey='calories'
            domain={["dataMin -10", "dataMax"]}
            hide={true}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
            wrapperStyle={{ outline: "none" }}
          />

          <Bar
            yAxisId='right'
            dataKey='kilogram'
            barSize={7}
            radius={[5, 5, 0, 0]}
            fill={colors.grayDark}
          />
          <Bar
            yAxisId='left'
            dataKey='calories'
            barSize={7}
            radius={[5, 5, 0, 0]}
            fill={colors.red}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

ActivityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};
