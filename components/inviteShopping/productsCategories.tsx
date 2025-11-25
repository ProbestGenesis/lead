'use client';

import { Workflow } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Button } from '../ui/button';

function ProductsCategories() {
  const [currentCard, setCurrentCard] = useState<string | null>(null);
  const categories = [
    {
      name: 'Energie solaire',
      icon: Workflow,
    },
    {
      name: 'Electricité batiment',
      icon: Workflow,
    },

    {
      name: 'Antenne parabolique et installation divers',
      icon: Workflow,
    },

    {
      name: 'Particulier',
      icon: Workflow,
    },
  ];
  return (
    <div className="flex flex-col mx-auto py-24 px-4 md:px-6 lg:px-8 ">
      <div className="container flex flex-col space-y-12">
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Visitez nos catégories
          </h2>
          <div className="h-1 w-20 bg-secondary rounded-full" />
        </div>
        <div className=" flex items-center justify-center w-full">
          <div className="flex flex-row flex-wrap gap-8 md:space-x-16">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="flex flex-col  itesm-center justify-center space-y-4"
              >
                <category.icon className="w-12 h-12 text-secondary" />
                <h3 className="text-lg text-blue-500">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>{' '}
      </div>
    </div>
  );
}
export default ProductsCategories;
