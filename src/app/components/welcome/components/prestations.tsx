"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import CardContainer from "../../shared/cardContainer";
import useWelcome from "@/app/hooks/useWelcome";

const Prestations = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const PrestationsContent = () => {
    const { arrayBuilderImages } = useWelcome();
    return arrayBuilderImages.map(({ id, label, src, alt }) => (
      <div key={id} className="flex flex-col items-center">
        <Image src={src} alt={alt} width={imageWidth} height={90} />
        <p className="text-center">{label}</p>
      </div>
    ));
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageWidth = windowWidth < 899 ? 90 : 180;

  return (
    <CardContainer width="w-1/2">
      <div className="flex flex-col items-center border-2 gap-12 p-6 mb-10">
        <div>
          <h2 className="text-2xl">Mes prestations</h2>
        </div>
        <div
          className="flex flex-row justify-evenly
        phone:flex-col phone:items-center"
        >
          <PrestationsContent />
        </div>
      </div>
    </CardContainer>
  );
};

export default Prestations;
