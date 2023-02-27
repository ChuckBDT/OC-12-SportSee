import React from "react";
import ActivityChart from "../recharts/ActivityChart";
import SideStats from "../components/SideStats";

import id from "../data/12-id.json";
import activity from "../data/12-activity.json";

const activity12 = activity.data.sessions;
const id12 = id.data.keyData;

function Home() {
  return (
    <div className="w-full pl-28 flex ">
      <div className="grid-container bg-slate-700 w-2/3 grid grid-cols-3 grid-rows-2">
        <ActivityChart data={activity12} />
        <div className="duree h-64"></div>
        <div className="hexagone h-64"></div>
        <div className="circleee h-64"></div>
      </div>
      <SideStats data={id12} />
    </div>
  );
}

export default Home;
