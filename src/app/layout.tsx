"use client";

import React, { useEffect } from "react";

import "./globals.css";
import Footer from "./components/footer/footer";
// import useLayout from "./hooks/useLayout";
import HeaderMenu from "./components/headerMenu/headerMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className="h-full w-full">
        <body className="flex flex-col justify-between h-full w-full">
          <div className="h-32 w-full top-0 z-10 fixed flex items-center header">
            <HeaderMenu />
          </div>
          <main className="flex-grow mt-32">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
