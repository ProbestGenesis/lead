'use client';


import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { categories } from '@/data/categories';
import Link from 'next/link';
function ProductsCategories() {
  const [currentCard, setCurrentCard] = useState<string | null>(null);

  return (
    <section className="py-24 2xl:px-12  mx-auto">
      <div className="container mx-auto  max-sm:px-4 md:px-6 flex flex-col  space-y-12">
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
          <CatgeoriesList categories={categories} iconSize="normal" />
        </div>{' '}
      </div>
    </section>
  );
}

export const CatgeoriesList = ({ categories, iconSize }: { categories: { name: string; icon: StaticImageData }[] , iconSize: "normal" | "small"}) => {
  return (
    <div className="container  2xl:px-12 max-sm:px-4 mx-auto flex flex-row flex-wrap max-sm:justify-center  gap-8 md:space-x-16 ">
      {categories.map((category, idx) => (
        <Link
          href={`/store/category/${category.name.split(' ').join('_')}`}
          key={idx}
          className="flex flex-col  items-center justify-center space-y-4 cursor-pointer active:bg-accent/40 p-2 active:border-transparent rounded-lg"
        >
          <div
            className={`relative ${
              iconSize === 'small' ? 'w-12 h-12' : ' w-30 h-30'
            }`}
          >
            <Image
              src={category.icon}
              alt={`${category.name} icon`}
              fill
              objectFit="cover"
            />
          </div>
          <h3 className="text-lg max-sm:text-xs text-blue-500">
            {category.name}
          </h3>
        </Link>
      ))}
    </div>
  );
}
export default ProductsCategories;
