'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { title } from 'process';
import { Button } from '../ui/button';
import kitsolar from '@/assets/kitSolar.png';
import electricAmor from '@/assets/electricAmor.jpeg';
import bati from '@/assets/cable.png';
import chooseKitPicture from '@/assets/choose.jpg';
function BestProducts() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0  bg-linear-to-t from-blue-400/60 to-blue-400/10" />
      <div className="container 2xl:px-12 mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 border-4 border-yellow-300 w-fit p-2">
              Demain est solaire
            </h3>
            <div className="h-1 w-20 bg-secondary rounded-full" />
          </div>

          <p className="text-gray-600 max-w-2xl text-lg">
            Decouvrez et maitriser la solution pour faire des économies
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 py-12 mx-autp">
          <div className="flex flex-row gap-4 md:gap-6 flex-wrap  w-full items-center  ">
            {bestProducts.map((item, idx) => (
              <Card
                className="shadow-lg max-sm:w-full lg:w-sm md:w-xs  p-0 pb-8 rounded-none hover:shadow-2xl transition-all  border-transparent"
                key={idx}
              >
                <CardHeader className="flex flex-col p-0 rounded-none">
                  <div className="relative flex-1 h-56 w-full">
                    <Image
                      src={item.imageUrl}
                      alt=""
                      objectFit="cover"
                      className="h-[250px] "
                    />
                  </div>
                  <div className="flex flex-col p-4 space-y-4">
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <CardDescription className="text-md">
                      {item.description}
                    </CardDescription>
                  </div>

                  <CardFooter className="flex flex-row w-full justify-end">
                    <Button className="text-white px-4 py-2 rounded-full hover:bg-secondary/90 transition">
                      {' '}
                      En savoir plus{' '}
                    </Button>
                  </CardFooter>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center max-lg:hidden mt-8">
            <div className="flex flex-row  shadow-lg max-w-6xl h-[60vh] hover:shadow-2xl transition-all p-0 border-transparent container relative">
              <div className="flex w-[60%] flex-row items-center justify-center bg-white">
                <div className="absolute   bg-green-300 bottom-5 lg:-left-30 w-82 h-22 rounded-full  hover:scale-120 transition-all " />
                <div className="w-96 flex flex-col space-y-4 mx-12 items-center justify-center">
                  <h2 className="text-4xl">
                    Vous ne savez pas quel kit choisir ?
                  </h2>

                  <p className="text-md mt-4 text-accent">
                    Comparer nos solutions pour choisir celle adaptée à vos
                    besoins énergétiques.
                  </p>
                </div>

                <div>
                  <Button
                    size={'lg'}
                    className="text-white px-4 py-2 rounded-full hover:bg-accent/90 transition"
                  >
                    {' '}
                    Comparer{' '}
                  </Button>
                </div>
              </div>

              <div className="relative w-[40%]">
                <Image
                  src={chooseKitPicture}
                  alt=""
                  width={1000}
                  height={665}
                  quality={75}
                  className="h-full w-full  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const bestProducts = [
  {
    title: 'Mini kit solaire',
    description:
      "Plus d'indépendance énergétique avec notre mini kit solaire tout-en-un.",
    imageUrl: kitsolar,
  },

  {
    title: 'Kit Solaire moyen',
    description:
      'Solutions complètes pour la gestion énergétique industrielle.',
    imageUrl: electricAmor,
  },

  {
    title: 'Ultime Kit solaire',
    description:
      'Maximisez votre autonomie énergétique avec notre kit solaire ultime.',
    imageUrl: bati,
  },
];
export default BestProducts;
