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
const name = id.data.userInfos.firstName;
const activity12 = activity.data.sessions;
const performance12 = performance;

function Home() {
  return (
    <div className="flex flex-col h-full justify-between pl-56 pt-44 pr-28 pb-16">
      <p className="font-medium text-5xl">
        Bonjour <span className="text-[#FF0101]">{name}</span>
      </p>
      <p className="font-normal text-lg">
        Felicitation ! Vous avez explosé vos objectifs hier
      </p>
      {/* Todo: Fix the proportions */}
      <div className="w-full flex gap-x-8 ">
        <div className="grid-container gap-y-8 gap-x-8 w-3/4 grid grid-cols-3 grid-rows-2 items-end">
          <ActivityChart data={activity12} />
          <SessionsLineChart />
          <PerfRadar data={performance12} />
          <ScoreRadial />
        </div>
        <SideStats data={id12} />
      </div>
    </div>
  );
}

export default Home;
