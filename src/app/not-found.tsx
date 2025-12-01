import Link from "next/link";
import Button from "./components/shared/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
      <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-6xl font-bold text-blue-800">404</h1>
        <h2 className="text-2xl font-bold text-gray-800">Page non trouvée</h2>
        <p className="text-gray-600">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été
          déplacée.
        </p>
        <div className="mt-4">
          <Button url="/" label="Retour à l'accueil" size="normal" />
        </div>
      </div>
    </div>
  );
}
