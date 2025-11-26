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
import kitsolar from "@/assets/kitSolar.png"
import electricAmor from "@/assets/electricAmor.jpeg"
import bati from "@/assets/cable.png"
function BestProducts() {
  return (
    <section className="relative py-12">
      <div className="absolute inset-0  bg-linear-to-t from-pink-300/60 to-pink-300/10" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              Avec nous
            </h3>
            <div className="h-1 w-20 bg-secondary rounded-full" />
          </div>

          <p className="text-gray-600 max-w-2xl text-lg">
            Decouvrez et maitriser la solution pour faire des économies
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 py-12 mx-autp">
          <div className="flex flex-row gap-4 lg:gap-6 flex-wrap w-full items-center justify-center ">
            {bestProducts.map((item, idx) => (
              <Card
                className="shadow-lg w-full lg:w-sm p-0 pb-8 rounded-[25px] hover:shadow-2xl transition-all  border-transparent"
                key={idx}
              >
                <CardHeader className="flex flex-col p-0">
                  <div className="relative flex-1 h-56 w-full">
                    <Image src={item.imageUrl} alt="" objectFit='cover' className='max-h-[250px] rounded-t-lg' />
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
                      Acheter{' '}
                    </Button>
                  </CardFooter>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center max-lg:hidden mt-8">
            <Card className="flex flex-row shadow-lg max-w-6xl min-h-[60vh] rounded-[25px] hover:shadow-2xl transition-all p-0 border-transparent container relative">
              <div className="absolute bg-green-300 bottom-10 lg:-right-30 w-92 h-32 rounded-full  hover:scale-120 transition-all " />
              <CardHeader className="w-96 flex flex-col space-y-4 mx-12 items-center justify-center">
                <CardTitle className="text-3xl">
                  Vous chercherz un kit sur mesure?
                </CardTitle>

                <CardDescription className="text-md mt-4">
                  Comparer nos solutions pour choisir celle adaptée à vos
                  besoins énergétiques.
                </CardDescription>
              </CardHeader>
            </Card>
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
    title: 'Amoire industrielle',
    description:
      'Solutions complètes pour la gestion énergétique industrielle.',
    imageUrl: electricAmor,
  },

  {
    title: 'Tuyaux et cable',
    description:
      'Tuyaux, câbles et accessoires pour installations électriques sécurisées de vos batiments.',
    imageUrl: bati,
  },
];
export default BestProducts;
