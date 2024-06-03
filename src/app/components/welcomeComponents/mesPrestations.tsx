"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MesPrestations() {
  const imagesArray = [
    { id: "1", src: "/gestion_administrative.webp", alt: "secretariat" },
    { id: "2", src: "/gestion_administrative.webp", alt: "secretariat2" },
    { id: "3", src: "/gestion_administrative.webp", alt: "secretariat3" },
    { id: "4", src: "/gestion_administrative.webp", alt: "secretariat4" },
  ];

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageWidth = windowWidth < 899 ? 100 : 200;

  return (
    <div className="flex flex-col border-2 gap-8 p-6 items-center">
      <div>
        <h2 className="text-2xl">Mes prestations</h2>
      </div>
      <div className="flex phone:flex-col flex-row justify-evenly w-full gap-4">
        {imagesArray.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={imageWidth}
            height={100}
          />
        ))}
      </div>
    </div>
  );
}
