"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CardContainer from "../../shared/cardContainer";

export default function Prestations() {
  const [windowWidth, setWindowWidth] = useState(0);

  const imagesArray = [
    {
      id: "1",
      label: "Gestion administrative",
      src: "/gestion_administrative.webp",
      alt: "secretariat",
    },
    {
      id: "2",
      label: "Gestion commerciale",
      src: "/gestion_administrative.webp",
      alt: "secretariat2",
    },
    {
      id: "3",
      label: "Gestion du personnel",
      src: "/gestion_administrative.webp",
      alt: "secretariat3",
    },
    {
      id: "4",
      label: "Pré-comptabilité",
      src: "/gestion_administrative.webp",
      alt: "secretariat4",
    },
  ];

  const PrestationsContent = () => {
    return imagesArray.map(({ id, label, src, alt }) => (
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
}
