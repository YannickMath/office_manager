import React from "react";
import Intro from "./welcomeComponents/pourquoi";
import Titre from "./welcomeComponents/titreJob";
import MiniCV from "./welcomeComponents/miniCV";
import Prestations from "./welcomeComponents/prestations";
import TitreJob from "./welcomeComponents/titreJob";

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
