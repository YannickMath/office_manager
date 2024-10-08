"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import useWelcome from "@/app/hooks/useWelcome";
import CardContainer from "../shared/cardContainer";

const Prestations = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const PrestationsContent = () => {
    const { arrayBuilderImages } = useWelcome();
    return arrayBuilderImages.map(({ id, label, src, alt }) => (
      <Link
        key={id}
        href={`/services#${label.replace(/\s+/g, "-").toLowerCase()}`}
        passHref
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src={src} alt={alt} width={imageWidth} height={90} />
          <p className="text-center text-gray-700 text-base phone:text-base font-bolder underline">
            {label}
          </p>
        </div>
      </Link>
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

  const imageWidth = windowWidth < 899 ? 90 : 140;

  return (
    <CardContainer width="w-1/2 phone:w-3/4 phone:mb-6">
      <div className="flex flex-col items-center gap-12 phone:gap-6 p-2">
        <div>
          <h2 className="text-xl phone:text-lg">Mes prestations</h2>
        </div>
        <div
          className="flex flex-row gap-4
        laptop:flex-col laptop:items-center"
        >
          <PrestationsContent />
        </div>
      </div>
    </CardContainer>
  );
};

export default Prestations;
