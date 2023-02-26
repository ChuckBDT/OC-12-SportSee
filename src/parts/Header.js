import React from "react";

import {
  SwimmingMan,
  Dumbbell,
  CyclingMan,
  SeatedMan,
} from "../assets/icons/index";

import logo from "../assets/logo.svg";

function Header() {
  return (
    <main>
      {/* Font medium ??
  Shadow on top nav */}
      <nav className="w-screen relative top-0 left-0 z-10 h-24 font-medium text-2xl flex justify-between items-center pl-8 pr-24 bg-black text-white">
        <img src={logo} alt="Logo SportSee"></img>
        <div href="/">Accueil</div>
        <div href="#">Profil</div>
        <div href="#">Réglage</div>
        <div href="#">Communauté</div>
      </nav>
      <nav className="h-screen absolute top-0 left-0 z-0 w-28 flex flex-col justify-center items-center bg-black text-white gap-y-6">
        <div
          className="h-16 w-16 bg-white flex justify-center items-center rounded-md"
          href="/"
        >
          <SeatedMan />
        </div>
        <div
          className="h-16 w-16 bg-white flex justify-center items-center rounded-md"
          href="#"
        >
          <SwimmingMan />
        </div>
        <div
          className="h-16 w-16 bg-white flex justify-center items-center rounded-md"
          href="#"
        >
          <CyclingMan />
        </div>
        <div
          className="h-16 w-16 bg-white flex justify-center items-center rounded-md"
          href="#"
        >
          <Dumbbell />
        </div>
        <p className="absolute text-white font-medium text-xs whitespace-nowrap -rotate-90 bottom-28">
          Copyright, SportSee 2020
        </p>
      </nav>
      <div className="container w-screen  ml-28 flex ">
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
    </main>
  );
}

export default Header;
