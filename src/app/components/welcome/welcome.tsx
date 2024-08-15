import React from "react";

import Prestations from "./components/prestations";
import Cv from "./components/cv";
import Banner from "./components/banner";
import Pourquoi from "./components/pourquoi";

const Welcome: React.FC = () => {
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
};

export default Welcome;
