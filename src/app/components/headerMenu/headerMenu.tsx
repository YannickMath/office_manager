import React from "react";
import Link from "next/link";
import { FcAssistant } from "react-icons/fc";
import { LuMenuSquare } from "react-icons/lu";
import { HeaderMenuProps } from "@/app/interface/haderMenuInterface";
import { Item } from "@/app/interface/haderMenuInterface";

export function HeaderMenu({
  handleOpenMenu,
  toggleMenuIsOpen,
}: HeaderMenuProps) {
  const items: Item[] = [
    { label: "Accueil", url: "/" },
    { label: "Mes services", url: "/services" },
    { label: "Tarifs", url: "/tarifs" },
    { label: "A propos", url: "/aPropos" },
    { label: "Contact", url: "/contacts" },
  ];
  return (
    <div className="flex flex-row w-full h-full justify-center items-center bg-blue-50">
      <FcAssistant className="w-1/6 h-2/3" />
      <nav
        className="flex h-full items-center  p-4 text-xl
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
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>
                <p
                  className="p-2 rounded-lg transition duration-300 ease-in-out 
                            hover:bg-customBrown hover:text-black"
                >
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {toggleMenuIsOpen ? (
        <nav className="w-4/6  text-xs">
          <ul
            className="flex flex-col w-full items-end justify-between p-2 
                        phone:hidden"
          >
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  className="hover:text-blue-700 hover:underline"
                  href={item.url}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </div>
  );
}
