"use client";

import React, { useEffect } from "react";
import "./globals.css";
import { HeaderMenu } from "./components/headerMenu/headerMenu";
import Footer from "./components/footer/footer";
import useLayout from "./hooks/useLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isTransparent, handleScroll } = useLayout();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <html lang="en">
        <body className="bg-customBrown">
          <div
            className={`h-32 sticky top-0 z-10 flex items-center bg-zinc-50 header ${
              isTransparent ? "transparent" : ""
            }`}
          >
            <HeaderMenu />
          </div>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
