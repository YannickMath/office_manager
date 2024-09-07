"use client";

import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import useHeaderMenu from "@/app/hooks/useHeaderMenu";

const HeaderMenu = () => {
  const { isDropdownOpen, dropdownRef, items, closeDropdown, toggleDropdown } =
    useHeaderMenu();

  const pathname = usePathname();

  const activeItem = items.find((item) => item.url === pathname);
  const [activePage, setActivePage] = useState(
    activeItem ? activeItem.label : "Accueil"
  );
  const newActiveItem = items.find((item) => item.url === pathname);

  useEffect(() => {
    setActivePage(newActiveItem ? newActiveItem.label : "Accueil");
  }, [pathname, items]);

  const GetActiveLabel = () => {
    return (
      <>
        {activePage ? (
          <p className="phone:mt-4 phone:text-sm desktop:hidden bg-customCardBg rounded-lg p-2">
            {activePage}
          </p>
        ) : null}
      </>
    );
  };

  return (
    <div className="relative flex flex-row w-full h-full bg-customBrown justify-center gap-[10vw] text-xs phone:gap-4 items-center p-4">
      <Image src="/LOGO_CB_Noire.png" alt="logo" width={180} height={180} />
      <nav className="hidden md:flex h-full items-center text-xl gap-8">
        {items.map(({ url, label }, index) => (
          <div key={index} className="list-none">
            <Link href={url}>
              <p
                className={`p-2 rounded-lg transition duration-300 ease-in-out hover:bg-customCardBg
                  ${pathname === url ? "bg-customCardBg" : ""}
                  `}
              >
                {label}
              </p>
            </Link>
          </div>
        ))}
      </nav>
      <div className="flex md:hidden flex-col h-full items-center justify-center">
        <button
          id="dropdownDefaultButton"
          type="button"
          onClick={toggleDropdown}
        >
          <p className="phone:text-lg">Menu</p>
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <GetActiveLabel />
        {isDropdownOpen && (
          <div
            id="dropdown"
            ref={dropdownRef}
            className="absolute right-0 mt-14 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow z-50"
          >
            <ul className="py-2 text-sm">
              {items.map(({ url, label }, index) => (
                <li key={index} className="list-none">
                  <Link href={url} className="block px-4 py-2 ">
                    <p onClick={closeDropdown}>{label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;
