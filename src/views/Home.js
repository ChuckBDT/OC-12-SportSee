import React, { useEffect, useState } from "react";
import ActivityChart from "../recharts/ActivityChart";
import PerfRadar from "../recharts/PerfRadar";
import SideStats from "../components/SideStats";
import ScoreRadial from "../recharts/ScoreRadial";
import SessionsLineChart from "../recharts/SessionsLineChart";
import shapeData from "../service/shape";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await shapeData(12, true);
      setData(data);
    };
    getData();
  }, []);

  if (data) {
    return (
      <div className="flex flex-col h-full justify-between pl-56 pt-44 pr-28 pb-16">
        <p className="font-medium text-5xl">
          Bonjour <span className="text-[#FF0101] capitalize">{data.name}</span>
        </p>
        <p className="font-normal text-lg">
          Felicitation ! Vous avez explosé vos objectifs hier
        </p>
        {/* Todo: Fix the proportions */}
        <div className="w-full flex gap-x-8 ">
          <div className="grid-container gap-y-8 gap-x-8 w-3/4 grid grid-cols-3 grid-rows-2 items-end">
            <ActivityChart data={data.activityChart} />
            <SessionsLineChart data={data.sessionsLineChart} />
            <PerfRadar data={data.perfRadar} />
            <ScoreRadial data={data.scoreRadial} />
          </div>
          <SideStats data={data.sideStats} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Home;
