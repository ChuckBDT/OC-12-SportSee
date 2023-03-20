import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import PropTypes from "prop-types";

// PerfRadar component : Returns a RadarChart component
export default function PerfRadar({ data }) {
  return (
    <ResponsiveContainer height={260}>
      <RadarChart
        className='bg-grayDark rounded-md justify-self-center'
        outerRadius={80}
        data={data}
        startAngle={-150}
        endAngle={210}
      >
        <PolarGrid stroke='#FFFFFF' />
        <PolarAngleAxis
          dataKey='kind'
          tick={{ fill: "white", fontSize: "12px", fontWeight: "500" }}
        />
        <Radar dataKey='value' fill='#FF0101' fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

PerfRadar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.string.isRequired,
    })
  ).isRequired,
};
