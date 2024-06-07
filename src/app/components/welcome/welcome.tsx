import React from "react";
import TitreJob from "./welcomeComponents/titreJob";
import Intro from "./welcomeComponents/intro";
import MiniCV from "./welcomeComponents/miniCV";
import MesPrestations from "./welcomeComponents/mesPrestations";
import PourquoiFaireAppel from "./welcomeComponents/pourquoiFaireAppel";

export default function Welcome(): JSX.Element {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <div className="w-full">
        <TitreJob />
      </div>
      <div className="w-full">
        <Intro />
      </div>
      <div className=" w-3/4">
        <MiniCV />
      </div>
      <div className="w-4/6">
        <MesPrestations />
      </div>
    </div>
  );
}
