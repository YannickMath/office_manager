import React from "react";
import Intro from "./welcome_components/pourquoi";
import MiniCV from "./welcome_components/miniCV";
import Prestations from "./welcome_components/prestations";
import TitreJob from "./welcome_components/titreJob";

export default function Welcome(): JSX.Element {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-10">
      <div className="w-full">
        <TitreJob />
      </div>
      <div className="flex w-full justify-center">
        <Intro />
      </div>
      <div className="flex w-full justify-center">
        <MiniCV />
      </div>
      <div className="flex w-full justify-center mb-10">
        <Prestations />
      </div>
    </div>
  );
}
