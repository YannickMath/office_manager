import React from "react";

export default function Services() {
  return (
    <div className="h-full w-full">
      <h1 className="text-4xl font-bold text-center">Mes services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Prestation 1</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Prestation 2</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Prestation 3</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque.
          </p>
        </div>
      </div>
    </div>
  );
}
