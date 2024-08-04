import React from "react";

import Link from "next/link";
import Image from "next/image";

import { LuMenuSquare } from "react-icons/lu";
import { HeaderMenuProps } from "@/app/interface/haderMenuInterface";
import useHeader from "@/app/hooks/useHeader";

export function HeaderMenu({
  handleOpenMenu,
  toggleMenuIsOpen,
}: HeaderMenuProps) {
  const { MenuContent, items } = useHeader();

  return (
    <div className="flex flex-row w-full h-full justify-center items-center bg-blue-50 gap-[6vw]">
      <Image src="/LOGO_CB_Noire.png" alt="logo" width={150} height={150} />
      <nav
        className="flex h-full items-center p-4 text-xl
                  phone:text-xs phone:w-4/6"
      >
        <LuMenuSquare
          className="phone:block hidden cursor-pointer"
          onClick={handleOpenMenu}
        />
        <ul
          className="flex flex-row w-full items-end justify-center gap-8 p-4 border-b border-r  border-black
                    phone:hidden "
        >
          {items.map(({ url, label }, index) => (
            <li key={index}>
              <Link href={url}>
                <p
                  className="p-2 rounded-lg transition duration-300 ease-in-out 
                            hover:bg-customBrown"
                >
                  {label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {toggleMenuIsOpen ? <MenuContent /> : null}
    </div>
  );
}
