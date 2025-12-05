"use client";

import { useRef, useState } from "react";
import ClickOutside from "../utils/clickOutside";
import { ItemProps } from "../interface/headerMenuInterface";

const useHeaderMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  ClickOutside(dropdownRef, closeDropdown);

  const items: ItemProps[] = [
    { label: "Accueil", url: "/" },
    { label: "Prestations", url: "/services" },
    { label: "Tarifs", url: "/tarifs" },
    { label: "Contact", url: "/contacts" },
  ];

  return { isDropdownOpen, dropdownRef, items, closeDropdown, toggleDropdown };
};

export default useHeaderMenu;
