import React, { useEffect, useState } from "react";

import shapeData from "../service/shape";

import ActivityChart from "../recharts/ActivityChart";
import PerfRadar from "../recharts/PerfRadar";
import SideStats from "../components/SideStats";
import ScoreRadial from "../recharts/ScoreRadial";
import SessionsLineChart from "../recharts/SessionsLineChart";

function Home() {
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState(12);

  function userIdToggle(id) {
    if (id === 12) {
      setUserId(18);
    } else {
      setUserId(12);
    }
  }

  useEffect(() => {
    const getData = async () => {
      const data = await shapeData(userId, true);
      setData(data);
    };
    getData();
  }, [userId]);

  if (data) {
    return (
      <div className="flex flex-col h-full justify-start pl-56 pt-40 pr-28 pb-16">
        <header className="flex h-44">
          <div className="w-4/5 flex flex-col justify-start">
            <p className="font-medium text-5xl">
              Bonjour{" "}
              <span className="text-[#FF0101] capitalize">{data.name}</span>
            </p>
            <p className="font-normal py-8 text-lg">
              Felicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div className="w-1/5 flex items-start justify-end">
            <input type="checkbox" id="switch" />
            <label
              onClick={() => {
                userIdToggle(userId);
              }}
              htmlFor="switch"
            >
              Toggle
            </label>
          </div>
        </header>

        <div className="w-full flex gap-x-8 ">
          <div className="flex flex-col h-full gap-y-8 w-9/12 justify-between ">
            <ActivityChart data={data.activityChart} />
            <div className="flex justify-between gap-x-8">
              <SessionsLineChart data={data.sessionsLineChart} />
              <PerfRadar data={data.perfRadar} />
              <ScoreRadial data={data.scoreRadial} />
            </div>
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
