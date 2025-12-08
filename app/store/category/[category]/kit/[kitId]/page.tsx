"use client";

import React, { ReactNode } from "react";
import { kitData } from "../compare/page";
import { useParams } from "next/navigation";
import { Badge } from "lucide-react";
import { getComponentIcon } from "../compare/page";
import { getComponentName } from "../compare/page";
function page() {
  const { kitId }: { kitId: string } = useParams();
  const id = parseInt(kitId);
  return (
    <section className="bg-gray-50">
      <div className="bg-yellow-400 h-screen">
        <div className="flex space-x-8 flex-row items-center w-full h-full justify-center max-sm:flex-col-reverse">
          <div className="flex flex-col space-y-4 max-w-sm">
            <h3 className="text-3xl font-bold tracking-tight sm:text-7xl text-gray-900">
              {kitData.solar_kits[id].name}
            </h3>

            <p className="text-accent">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              itaque velit ullam aliquam. Nulla, vitae? Fugiat in voluptatibus,
              .
            </p>
          </div>
          <div className="border border-white min-w-[500px] min-h-[300px]">
            ee
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-12 min-h-24">
        <div></div>
      </div>
      <div className="mx-auto container">
        <ul className="space-y-2">
          {Object.entries(kitData.solar_kits[id].components).map(([key, value]) => (
            <li key={key} className="flex items-start text-sm text-gray-600">
              <span className="flex-shrink-0 mr-2 mt-1">
                {getComponentIcon(key)}
              </span>
              {/* --- Ligne Modifiée pour afficher la clé en Français --- */}
              <strong className="capitalize text-gray-900 mr-1">
                {getComponentName(key)}:
              </strong>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default page;
