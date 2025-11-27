'use client';


import { useState } from 'react';
import Image from 'next/image';
import solarPanel from "@/assets/solarPanel.png"
import electricBuilding from "@/assets/building.png"
import smartHouse from "@/assets/smartHouse.png"
import screwdriver from "@/assets/screwdriver.png"
import industry from "@/assets/industry.png"

function ProductsCategories() {
  const [currentCard, setCurrentCard] = useState<string | null>(null);
  const categories = [
    {
      name: 'Energie solaire',
      icon: solarPanel,
    },
    {
      name: 'Electricité batiment',
      icon: electricBuilding,
    },

    {
      name: "Electricité industrielle",
      icon: industry
    }
    ,

    {
      name: 'Domotique',
      icon: smartHouse,
    },

    {
      name: 'Particulier',
      icon: screwdriver,
    },
    
  ];
  return (
    <section className="py-24 lg:ms-32">
      <div className="container mx-auto  px-4 md:px-6 flex flex-col lg:px-8 space-y-12">
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl max-w-2xl text-gray-900">
            Tout les outils et accessoires dont vous avez besoin
          </h2>
          <div className="h-1 w-20 bg-secondary rounded-full" />
          <p className="text-gray-600 max-w-2xl text-lg mt-4">
            Vous trouvez chezs nous les outils pour: 
          </p>
        </div>
        <div className=" flex items-center justify-center w-full">
          <div className="flex flex-row flex-wrap gap-8 md:space-x-16">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="flex flex-col  items-center justify-center space-y-4"
              >
                <div className="relative w-30 h-30">
                  <Image
                    src={category.icon}
                    alt={`${category.name} icon`}
                    fill
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-lg text-blue-500">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>{' '}
      </div>
    </section>
  );
}
export default ProductsCategories;
