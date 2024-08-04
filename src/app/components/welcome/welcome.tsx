import React from "react";
import Intro from "./welcome_components/pourquoi";
import MiniCV from "./welcome_components/miniCV";
import Prestations from "./welcome_components/prestations";
import TitreJob from "./welcome_components/titreJob";

export default function Welcome(): JSX.Element {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10 ">
      <div className="w-full">
        <TitreJob />
      </div>
      <div className="w-full">
        <Intro />
      </div>
      <div className=" w-full">
        <MiniCV />
      </div>
      <div className="w-4/6">
        <Prestations />
      </div>
    </div>
  );
}
