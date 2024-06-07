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

  const imageWidth = windowWidth < 899 ? 90 : 180;

  return (
    <div className="flex flex-col items-center border-2 gap-12 p-6">
      <div>
        <h2 className="text-2xl">Mes prestations</h2>
      </div>
      <div
        className="flex flex-row w-3/4 justify-evenly gap-4
                      phone:flex-col "
      >
        {imagesArray.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={imageWidth}
            height={90}
          />
        ))}
      </div>
    </div>
  );
}
