import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

import PropTypes from "prop-types";

/**
 * Customized to show Tooltip only if a label is provided
 * See comment on /src/service/modelling/parts/sessionsLineChart.js
 *
 * @param {boolean} active
 * @param {Array} payload
 * @param {number} label
 * @returns {JSX.Element}
 */

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length && label) {
    return (
      <div className='h-8 w-14 bg-white flex justify-center items-center'>
        <p className='text-black font-medium text-xs'>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

/**
 * SessionsLineChart component : Returns a line chart with a line
 * depending of session's durations and session's day
 * @component
 * @param {Array} data
 */

function SessionsLineChart({ data }) {
  return (
    <ResponsiveContainer height={260}>
      <LineChart
        className='rounded-md bg-red'
        data={data}
        margin={{
          bottom: 15,
        }}
      >
        <text
          className='font-medium'
          y={40}
          x={25}
          fill='white'
          fillOpacity={0.5}
        >
          Durée moyenne
        </text>
        <text
          className='font-medium'
          y={65}
          x={25}
          fill='white'
          fillOpacity={0.5}
        >
          des sessions
        </text>

        <XAxis
          dataKey='day'
          tick={{ fill: "white" }}
          opacity={0.5}
          axisLine={false}
          tickLine={false}
        />

        <YAxis padding={{ top: 80 }} orientation='right' hide={true} />

        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: "transparent" }}
          wrapperStyle={{ outline: "none" }}
        />

        <Line
          type='basis'
          dataKey='sessionLength'
          stroke='white'
          strokeOpacity={0.5}
          strokeWidth='0.15rem'
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

SessionsLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SessionsLineChart;
