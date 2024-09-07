"use client";

import { useEffect, useState } from "react";

interface TitreProps {
  title: string;
  description?: string;
}

export default function Titre({ title, description }: TitreProps): JSX.Element {
  const [isRootPath, setIsRootPath] = useState(false);

  useEffect(() => {
    // Ce code s'exécute uniquement côté client
    const isRoot = window.location.pathname === "/";
    setIsRootPath(isRoot);
    console.log("window.location.pathname", window.location.pathname);
    console.log("isRootPath after setting", isRoot);
  }, []);
  return (
    <div
      className={` flex flex-col w-full ${
        isRootPath ? "h-[180px]" : "h-[100px]"
      } justify-end items-center phone:p-2 p-8 text-center gap-10
    `}
    >
      <div
        className="flex justify-center items-center w-4/5
                  shadow-xl border-b border-r border-black p-4 bg-opacity-30
      phone:bg-office-manager-main-bg phone:bg-cover phone:bg-no-repeat phone:bg-center phone:text-white
                  
                  "
      >
        <div className="flex flex-col justify-center gap-8 phone:gap-4">
          <h1 className="text-3xl phone:text-xl font-bold">{title}</h1>
          {description ? (
            <p className="text-x phone:text-base phone:font-bolder">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
    // <div className="flex flex-col w-full h-[150px] justify-center items-center p-8 text-center gap-10">
    //   <div
    //     className="relative flex justify-center items-center
    //                 shadow-xl border-b border-r border-black p-4
    //                 phone:bg-office-manager-main-bg phone:bg-cover phone:bg-no-repeat phone:bg-center"
    //   >
    //     {/* Overlay semi-transparent */}
    //     {isRootPath && (
    //       <div className="absolute inset-0 bg-black opacity-20 phone:opacity-50"></div>
    //     )}

    //     <div className="relative flex flex-col justify-center gap-8 phone:gap-4">
    //       <h1
    //         className={`text-3xl phone:text-xl font-bold ${
    //           !isRootPath ? "text-white" : ""
    //         }`}
    //       >
    //         {title}
    //       </h1>
    //       <p className="text-xl phone:text-base phone:font-bolder text-white">
    //         {description}
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
