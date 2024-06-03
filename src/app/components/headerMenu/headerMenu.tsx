import React from "react";
import Link from "next/link";
import { FcAssistant } from "react-icons/fc";
import { LuMenuSquare } from "react-icons/lu";
import { HeaderMenuProps } from "@/app/interface/haderMenuInterface";
import { Item } from "@/app/interface/mainInterface";

export function HeaderMenu({
  handleOpenMenu,
  toggleMenuIsOpen,
}: HeaderMenuProps) {
  const items: Item[] = [
    { label: "Accueil", url: "/" }, //Home.tsx
    { label: "Mes services", url: "/services" },
    { label: "Tarifs", url: "/tarifs" }, //Tarifs.tsx
    { label: "A propos", url: "/aPropos" }, //APropos.tsx
    { label: "Contact", url: "/contacts" }, //Contact.tsx
  ];
  return (
    <div className="flex flex-row w-full h-full justify-center items-center bg-blue-50">
      <FcAssistant className="w-1/6 h-2/3" />
      <nav className="phone:w-4/6 h-full p-4 flex items-center  phone:text-xs text-xl">
        <LuMenuSquare
          className=" phone:block hidden cursor-pointer"
          onClick={handleOpenMenu}
        />
        <ul className="flex flex-row w-full items-end justify-center gap-8 p-4 phone:hidden border-b border-r  border-black">
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>
                <p className="p-2 rounded-lg transition duration-300 ease-in-out hover:bg-stone-400 hover:text-black">
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {toggleMenuIsOpen ? (
        <nav className="w-4/6  items-center text-xs">
          <ul className="flex flex-col w-full items-end justify-between p-2 phone:hidden">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  className=" hover:text-blue-700 hover:underline"
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
