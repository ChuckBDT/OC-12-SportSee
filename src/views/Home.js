import React from "react";
import ActivityChart from "../recharts/ActivityChart";
import PerfRadar from "../recharts/PerfRadar";
import SideStats from "../components/SideStats";
import ScoreRadial from "../recharts/ScoreRadial";
import SessionsLineChart from "../recharts/SessionsLineChart";

import id from "../data/12-id.json";
import activity from "../data/12-activity.json";
import performance from "../data/12-performance.json";

const id12 = id.data.keyData;
const activity12 = activity.data.sessions;
const performance12 = performance;

function Home() {
  return (
    <div className="w-full pl-28 flex ">
      <div className="grid-container w-2/3 grid grid-cols-3 grid-rows-2 justify-between items-center">
        <ActivityChart data={activity12} />
        <SessionsLineChart />
        <PerfRadar data={performance12} />
        <ScoreRadial />
      </div>
      <SideStats data={id12} />
    </div>
  );
}

export default Home;
