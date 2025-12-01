"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function StickyContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 phone:bottom-4 phone:right-4 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <Link href="/contacts">
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 phone:py-2 phone:px-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2">
          <span className="phone:text-sm">✉️</span>
          <span className="phone:text-xs">Contact</span>
        </button>
      </Link>
    </div>
  );
}
