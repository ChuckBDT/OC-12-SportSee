import React from "react";

function Home() {
  return (
    <div className="w-full pl-28 flex ">
      <div className="grid-container bg-slate-700 w-2/3 grid grid-cols-3 grid-rows-2">
        {/* <ActivityChart /> */}
        <div className="duree h-64"></div>
        <div className="hexagone h-64"></div>
        <div className="circleee h-64"></div>
      </div>
      <div className="flex flex-col justify-between bg-orange-600 w-1/3 h-full">
        <div className="">Calories</div>
        <div className="">Proteines</div>
        <div className="">Glucides</div>
        <div className="">Lipides</div>
      </div>
    </div>
  );
}

export default Home;
