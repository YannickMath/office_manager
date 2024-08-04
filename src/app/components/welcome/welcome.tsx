import React from "react";
import Intro from "./welcomeComponents/intro";
import Titre from "./welcomeComponents/titre";
import MiniCV from "./welcomeComponents/miniCV";
import Prestations from "./welcomeComponents/prestations";

export default function Welcome(): JSX.Element {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10 ">
      <div className="w-full">
        <Titre />
      </div>
      <div className="w-full">
        <Intro />
      </div>
      <div className=" w-3/4">
        <MiniCV />
      </div>
      <div className="w-4/6">
        <Prestations />
      </div>
    </div>
  );
}
