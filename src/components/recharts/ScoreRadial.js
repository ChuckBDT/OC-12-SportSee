import React from "react";

import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import { colors } from "../../assets/colors";

// Score component : Returns a radial chart of the user's score
function ScoreRadial({ data }) {
  return (
    <ResponsiveContainer height={260}>
      <RadialBarChart
        className=' bg-grayLight rounded-md relative flex justify-center items-center justify-self-end'
        innerRadius={80}
        outerRadius={90}
        barSize={10}
        startAngle={90}
        endAngle={450}
        data={data}
      >
        <text className='font-medium' y={40} x={25} fill={colors.grayDark}>
          Score
        </text>
        <PolarAngleAxis
          type='number'
          domain={[0, 100]}
          angleAxisId={0}
          axisLineType='circle'
          tick={false}
        />
        <RadialBar fill={colors.red} cornerRadius={5} dataKey='score' />
        <text
          x={"50%"}
          y={110}
          fill={colors.grayDark}
          textAnchor='middle'
          dominantBaseline='middle'
          className='text-2xl font-bold'
        >
          {data[0].score} %
        </text>
        <text
          x={"50%"}
          y={140}
          fill={colors.grayMedium}
          textAnchor='middle'
          dominantBaseline='middle'
          className='text-base font-medium'
        >
          de votre objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default ScoreRadial;
