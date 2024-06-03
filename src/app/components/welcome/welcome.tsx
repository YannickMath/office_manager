import React from "react";
import TitreJob from "../welcomeComponents/titreJob";
import Intro from "../welcomeComponents/intro";
import MiniCV from "../welcomeComponents/miniCV";
import PhrasePub from "../welcomeComponents/phrasePub";
import MesPrestations from "../welcomeComponents/mesPrestations";
import PourquoiFaireAppel from "../welcomeComponents/pourquoiFaireAppel";
import VosAvantages from "../welcomeComponents/vosAvantages";

export default function Welcome(): JSX.Element {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-6 ">
      <div className="w-full">
        <TitreJob />
      </div>
      <div className="w-1/3">
        <Intro />
      </div>
      <div className="flex flex-row w-2/3">
        <div className="w-4/6">
          <MiniCV />
        </div>
        <div className="w-2/6">
          <PhrasePub />
        </div>
      </div>
      <div className="w-4/6">
        <MesPrestations />
      </div>
      <div className="w-5/6">
        <VosAvantages />
      </div>
      <div className="w-4/6">
        <PourquoiFaireAppel />
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
