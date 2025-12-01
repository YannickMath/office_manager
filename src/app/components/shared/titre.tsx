"use client";

import { useEffect, useState } from "react";

interface TitreProps {
  title: string;
  description?: string;
}

export default function Titre({ title, description }: TitreProps): JSX.Element {
  const [isRootPath, setIsRootPath] = useState(false);

  useEffect(() => {
    const isRoot = window.location.pathname === "/";
    setIsRootPath(isRoot);
  }, []);
  return (
    <div
      className={`flex flex-col w-full  justify-end items-center phone:p-2 p-8 text-center gap-10`}
    >
      <div className="relative flex justify-center items-center w-4/5 shadow-xl border-b border-r border-black p-4 phone:bg-office-manager-main-bg phone:bg-cover phone:bg-no-repeat phone:bg-center">
        {/* Overlay semi-transparent */}
        {isRootPath && (
          <div className="phone:absolute phone:inset-0 phone:bg-black phone:opacity-50"></div>
        )}

        <div className="relative flex flex-col justify-center gap-8 phone:gap-4">
          <h1
            className={`text-3xl phone:text-xl font-bold ${
              isRootPath ? "phone:text-white" : ""
            }`}
          >
            {title}
          </h1>
          {description ? (
            <p className="text-xl phone:text-base phone:font-bolder phone:text-white">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
