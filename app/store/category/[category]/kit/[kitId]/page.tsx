'use client';

import React, { ReactNode } from 'react';
import { ComposantComponent } from '../compare/page';
import { kitData } from '@/data/kitdata';
import { useParams } from 'next/navigation';
import { Badge } from 'lucide-react';
import { GetComponentIcon } from '../compare/page';
import { GetComponentName } from '../compare/page';
import { Button } from '@/components/ui/button';
function Page() {
  const { kitId }: { kitId: string } = useParams();
  console.log(kitId);
  const id = parseInt(kitId);
  return (
    <section className="bg-gray-50">
      <div className="bg-yellow-400 h-screen">
        <div className="flex space-x-12 flex-row items-center w-full h-full justify-center max-sm:flex-col-reverse">
          <div className="flex flex-col space-y-4 max-w-sm">
            <h3 className="text-3xl font-bold tracking-tight sm:text-7xl text-gray-900">
              {kitData.solar_kits[id]?.name}
            </h3>

            <p className="text-accent">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              itaque velit ullam aliquam. Nulla, vitae? Fugiat in voluptatibus,
              .
            </p>

            <div className="flex flex-row justify-end space-x-4 ">
              <Button variant="outline" className="rounded-full">
                En savoir plus
              </Button>

              <Button variant={'default'} className="rounded-full">
                Commander
              </Button>
            </div>
          </div>
          <div className="border border-white min-w-[500px] min-h-[300px]">
            ee
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-12 min-h-24">
        <div></div>
      </div>

      <div className="container mx-auto mt-12 flex flex-col space-y-12">
        <div className=" mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Nos Domaines d'Intervention
          </h2>
          <div className="h-1 w-20 bg-secondary  rounded-full" />
          <p className="text-gray-600 max-w-2xl  text-left text-lg">
            Des solutions complètes adaptées aux particuliers et professionnels,
            réalisées dans le respect strict des normes en vigueur.
          </p>
        </div>
        <div className=" container min-h-screen">
          <ComposantComponent item={kitData.solar_kits[id]} />
        </div>
      </div>
    </section>
  );
}
export default Page;
