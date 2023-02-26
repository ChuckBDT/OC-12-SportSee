import React from "react";
import { Outlet } from "react-router-dom";

import {
  SwimmingMan,
  Dumbbell,
  CyclingMan,
  SeatedMan,
} from "./assets/icons/index";

import logo from "./assets/logo.svg";

function Root() {
  return (
    <main className="w-screen h-screen">
      {/* Font medium ??
  Shadow on top nav */}
      <nav className="w-full relative top-0 left-0 z-10 h-24 font-medium text-2xl flex justify-between items-center pl-8 pr-24 bg-black text-white">
        <img src={logo} alt="Logo SportSee"></img>
        <div href="/">Accueil</div>
        <div href="#">Profil</div>
        <div href="#">Réglage</div>
        <div href="#">Communauté</div>
      </nav>
      <nav className="h-full absolute top-0 left-0 z-0 w-28 flex flex-col justify-center items-center bg-black text-white gap-y-6">
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
      <Outlet />
    </main>
  );
}

export default Root;
