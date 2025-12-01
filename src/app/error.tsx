"use client";

import { useEffect } from "react";
import Button from "./components/shared/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
      <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-bold text-red-600">
          Oups ! Une erreur est survenue
        </h2>
        <p className="text-gray-600 text-center">
          Nous sommes désolés, quelque chose s&apos;est mal passé. Veuillez
          réessayer.
        </p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={reset}
            className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Réessayer
          </button>
          <Button url="/" label="Retour à l'accueil" size="normal" />
        </div>
      </div>
    </div>
  );
}
