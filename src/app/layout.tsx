"use client";

import React, { useState } from "react";

import "./globals.css";
import Footer from "./components/footer/footer";
import HeaderMenu from "./components/headerMenu/headerMenu";
import Conditions from "./conditions/page";

// Note: metadata export cannot be used in client components
// Metadata should be moved to a separate layout file or root layout

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
      <html lang="fr" className="h-full w-full">
        <head>
          <title>{process.env.NEXT_PUBLIC_BUSINESS_NAME || "Office Manager"} - Office Manager Indépendant</title>
          <meta name="description" content={`${process.env.NEXT_PUBLIC_BUSINESS_NAME || "Office Manager"} propose des services d'office manager pour les entreprises : gestion administrative, commerciale, du personnel et pré-comptabilité. Services professionnels sur mesure.`} />
          <meta name="keywords" content="office manager, gestion administrative, assistante indépendante, secrétariat, gestion commerciale, ressources humaines" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={`${process.env.NEXT_PUBLIC_BUSINESS_NAME || "Office Manager"} - Office Manager Indépendant`} />
          <meta property="og:description" content="Services d'office manager professionnels : gestion administrative, commerciale, du personnel et pré-comptabilité." />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="fr_FR" />
        </head>
        <body className="h-full w-full">
          {/* blur effect */}
          <div
            className={`relative flex flex-col justify-between h-full w-full ${
              isCgpsOpen ? "blur-sm" : ""
            }`}
          >
            <div className="phone:h-32 h-24 w-full top-0 z-10 fixed flex items-center header">
              <HeaderMenu />
            </div>
            <main className="flex-grow phone:mt-32 mt-24">{children}</main>
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
