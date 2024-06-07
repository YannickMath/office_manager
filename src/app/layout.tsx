"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";
import { HeaderMenu } from "./components/headerMenu/headerMenu";
import Footer from "./components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isTransparent, setIsTransparent] = useState(false);
  console.log("isTransparent", isTransparent);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [toggleMenuIsOpen, setToggleMenuIsOpen] = React.useState(false);

  const handleOpenMenu = () => {
    setToggleMenuIsOpen(!toggleMenuIsOpen);
  };

  return (
    <>
      <html lang="en">
        <body>
          <div
            className={`h-32 sticky top-0 z-10 flex items-center bg-zinc-50 header ${
              isTransparent ? "transparent" : ""
            }`}
          >
            <HeaderMenu
              handleOpenMenu={handleOpenMenu}
              toggleMenuIsOpen={toggleMenuIsOpen}
            />
          </div>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
