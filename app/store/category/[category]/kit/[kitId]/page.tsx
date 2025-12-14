'use client';

import React, { ReactNode } from 'react';
import { ComposantComponent } from '../compare/page';
import { kitData } from '@/data/kitdata';
import { useParams } from 'next/navigation';
import { Badge } from 'lucide-react';
import { GetComponentIcon } from '../compare/page';
import { GetComponentName } from '../compare/page';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/technicien';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import canal from "@/assets/canal.png"

function Page() {
  const { kitId }: { kitId: string } = useParams();
  console.log(kitId);
  const id = parseInt(kitId);

  const data = kitData.solar_kits.find((item) => item.id === id);
  return (
    <section className="">
      <div className="bg-yellow-400 h-[82vh] max-sm:min-h-[90vh] ">
        <div className="flex space-x-12 flex-row sm:items-center w-full h-full sm:justify-between container mx-auto max-sm:flex-col-reverse max-sm:gap-12">
          <div className="flex flex-col space-y-4 max-w-lg px-4 flex-1">
            <h3 className="text-3xl font-bold tracking-tight sm:text-7xl text-gray-900 text-wrap">
              {data?.name}
            </h3>

            <p className="text-accent text-wrao">
              Kit solaire complet, facile à installer, idéal pour alimenter vos
              appareils essentiels en toute autonomie.
            </p>

            <div className="flex flex-row justify-end space-x-4 ">
              <Button variant="outline" className="rounded-full">
                <a href="#details">En savoir plus </a>
              </Button>

              <Button variant={'default'} className="rounded-full">
                <a href="#contact"> Commander</a>
              </Button>
            </div>
          </div>
          <div className=" w-[500px] max-sm:w-full h-96 relative">
            <Image
              src={data?.images?.[0] ?? ""}
              alt=""
              fill
              className="object-cover  z-10"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-4 min-h-24">
        <ScrollArea>
          <ul className="flex flex-row w-full justify-between items-center  container sm:mx-auto  ">
            <li className="flex flex-col space-y-4 text-center items-center  max-sm text-sm">
              <Badge />

              <p>Qualité supérieur</p>
            </li>

            <li className="flex flex-col space-y-4 text-center items-center  max-sm text-sm">
              <Badge />

              <p>Sûre</p>
            </li>

            <li className="flex flex-col space-y-4 text-center items-center  max-sm text-sm">
              <Badge />

              <p>Garantie</p>
            </li>

            <li className="flex flex-col space-y-4 text-center items-center  max-sm text-sm">
              <Badge />

              <p>Economique</p>
            </li>
          </ul>

          <ScrollBar orientation="horizontal" className="py-0.5" />
        </ScrollArea>
      </div>

      <div className="flex flex-col space-y-12 bg-white">
        <div
          className="container mx-auto max-sm:px-4 grid grid-cols-2 max-sm:flex max-sm:flex-col space-y-12 py-12"
          id="details"
        >
          <div className="container mx-auto max-sm:px-4 flex flex-col space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 flex items-center gap-3">
                Toute une liste complète
              </h2>

              <div className="h-1 w-20 bg-secondary  rounded-full" />
              <p className="text-gray-600 max-w-2xl text-left text-lg">
                Découvrez les appareils compatibles avec nos kits solaires pour
                répondre à tous vos besoins quotidiens.
              </p>
            </div>
            <div className="container  ">
              <ComposantComponent item={data} />
            </div>
          </div>

          <div className="">
            <div className='flex flex-col space-y-4'>
              <h3 className="text-4xl font-extrabold tracking-tight text-gray-900 flex items-center gap-3 border-4 w-fit  p-2 border-green-500">
                kit Canal+ offert
              </h3>

              <div className=" w-[500px] max-sm:w-full max-sm:w-full h-96 relative">
                <Image
                  src={canal}
                  alt=""
                  fill
                  className="object-cover  z-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="relative">
          <ContactForm />
        </div>

        <div className="bg-green-400 min-h-64 text-white font-bold  p-8">
          <div className="container mx-auto">
            <img
              src="/upgrade-kit.png"
              alt="Mettez à niveau votre kit"
              className="w-32 h-32 object-contain rounded-lg shadow-lg bg-white p-2"
            />
            <div className="flex-1 flex flex-col items-start">
              <h3 className="text-2xl sm:text-3xl mb-2">
                Mettez à niveau votre kit solaire
              </h3>
              <p className="text-base sm:text-lg font-normal mb-4 text-white/90">
                Profitez de plus de puissance et de fonctionnalités en passant à
                un kit supérieur. Découvrez nos options de mise à niveau
                adaptées à vos besoins.
              </p>
              <Button
                variant="secondary"
                size={'lg'}
                className="rounded-full max-smw-full bg-white text-green-600 font-bold hover:bg-gray-100"
              >
                Mettre à niveau mon kit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Page;
