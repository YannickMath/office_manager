import React from "react";

import Prestations from "./welcome_components/prestations";
import Cv from "./welcome_components/cv";
import Banner from "./welcome_components/banner";
import Pourquoi from "./welcome_components/pourquoi";

export default function Welcome(): JSX.Element {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-10">
      <div className="w-full">
        <Banner />
      </div>
      <div className="flex w-full justify-center">
        <Pourquoi />
      </div>
      <div className="flex w-full justify-center">
        <Cv />
      </div>
      <div className="flex w-full justify-center mb-10">
        <Prestations />
      </div>
    </div>
  );
}
