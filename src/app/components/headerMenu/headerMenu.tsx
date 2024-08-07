import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Item } from "@/app/interface/haderMenuInterface";
import ClickOutside from "@/app/utils/clickOutside";

export function HeaderMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    console.log("toggleDropdown", isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  ClickOutside(dropdownRef, closeDropdown);

  const items: Item[] = [
    { label: "Accueil", url: "/" },
    { label: "Services", url: "/services" },
    { label: "Tarifs", url: "/tarifs" },
    { label: "Contact", url: "/contacts" },
  ];

  useEffect(() => {
    console.log("isDropdownOpen updated:", isDropdownOpen);
  }, [isDropdownOpen === false]);

  return (
    <div className="relative flex flex-row w-full h-full justify-between items-center bg-blue-50 p-4">
      <Image src="/LOGO_CB_Noire.png" alt="logo" width={150} height={150} />
      <nav className="hidden md:flex h-full items-center text-xl gap-8">
        {items.map(({ url, label }, index) => (
          <li key={index} className="list-none">
            <Link href={url}>
              <p className="p-2 rounded-lg transition duration-300 ease-in-out hover:bg-customBrown">
                {label}
              </p>
            </Link>
          </li>
        ))}
      </nav>
      <div className="flex md:hidden">
        <button
          id="dropdownDefaultButton"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
          onClick={toggleDropdown}
        >
          Menu
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
        {isDropdownOpen && (
          <div
            id="dropdown"
            ref={dropdownRef}
            className="absolute right-0 mt-10 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow z-50"
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {items.map(({ url, label }, index) => (
                <li key={index} className="list-none">
                  <Link
                    href={url}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
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
}
