"use client";

import React, { useState } from "react";

import "./globals.css";
import Footer from "./components/footer/footer";
import HeaderMenu from "./components/headerMenu/headerMenu";
import Conditions from "./conditions/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCgpsOpen, setIsCgpsOpen] = useState(false);

  const handleToggleCgps = () => {
    setIsCgpsOpen(!isCgpsOpen);
  };

  return (
    <>
      <html lang="en" className="h-full w-full">
        <body className="h-full w-full">
          {/* blur effect */}
          <div
            className={`relative flex flex-col justify-between h-full w-full ${
              isCgpsOpen ? "blur-sm" : ""
            }`}
          >
            <div className="h-32 w-full top-0 z-10 fixed flex items-center header">
              <HeaderMenu />
            </div>
            <main className="flex-grow mt-32">{children}</main>
            <Footer isCgpsOpen={isCgpsOpen} onToggleCgps={handleToggleCgps} />
          </div>
          {isCgpsOpen && (
            <div className="fixed inset-0 z-50">
              <Conditions onClose={handleToggleCgps} />
            </div>
          )}
        </body>
      </html>
    </>
  );
}
