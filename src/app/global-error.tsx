"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="fr">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 bg-gray-100">
          <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold text-red-600">
              Erreur critique
            </h2>
            <p className="text-gray-600 text-center">
              Une erreur critique s&apos;est produite. Veuillez recharger la
              page.
            </p>
            <button
              onClick={reset}
              className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition mt-4"
            >
              Recharger la page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
