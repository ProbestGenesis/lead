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
import { motion } from 'motion/react';
import Link from 'next/link';
function BestProducts() {
  const bestProductCategory = "solar"
  return (
    <section className="relative py-24">
      <div className="absolute inset-0  bg-linear-to-t from-blue-400/60 to-blue-400/10" />
      <div className="container 2xl:px-12 mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 border-4 border-yellow-300 w-fit p-2"
            >
              Demain est solaire
            </motion.h3>
            <div className="h-1 w-20 bg-secondary rounded-full" />
          </div>

          <p className="text-gray-600 max-w-2xl text-lg">
            Decouvrez et maitriser la solution pour faire des économies
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 py-12 mx-auto">
          <div className="flex flex-row gap-4 flex-wrap  w-full items-center md:grid md:grid-cols-2   lg:grid-cols-1  xl:flex">
            {bestProducts.map((item, idx) => (
              <motion.div
                className="shadow-lg max-sm:w-full md:w-full md:h-[500px] md:col-span-1 lg:w-2xs p-0 sm:pb-8 rounded-none hover:shadow-2xl hover:scale-110 hover:z-10 transition-all  border-transparent hover:bg-green-500"
                key={idx}
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="w-full h-full p-0 rounded-none max-sm:pb-4">
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
                      <Button className="text-white px-4 py-2 rounded-full hover:bg-secondary/90 transition z-10">
                        {' '}
                        <Link
                          href={`/store/category/${bestProductCategory}/kit/${item?.id}`}
                        >
                          En savoir plus{' '}
                        </Link>
                      </Button>
                    </CardFooter>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}

            <div className="max-lg:hidden col-span-2 h-full">
              <div className="flex items-center justify-center">
                <div className="flex flex-row max-sm:flex-col-reverse shadow-lg max-w-6xl xl:hidden  max-xl:h-[500px] min-h-[60vh]   hover:shadow-2xl transition-all p-0 border-transparent container relative ">
                  <div className="flex w-[60%] lg:flex-col space-y-8 lg:ps-8 mx-auto  max-sm:h-auto max-md:h-[80vh] max-sm:flex-col max-sm:w-full flex-row items-center justify-center bg-white  max-sm:pb-4">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.1, ease: 'easeIn' },
                      }}
                      className="absolute max-sm:hidden   bg-green-300 bottom-0 lg:-left-10 w-82 h-22 rounded-full  hover:scale-120 transition-all "
                    />
                    <div className="sm:w-96 flex flex-col max-sm:space-y-2 space-y-4 sm:mx-12 mx-4 max-sm:mt-4 items-center justify-center">
                      <h2 className="text-4xl max-sm:text-2xl text-wrap">
                        Vous ne savez pas quel kit choisir ?
                      </h2>

                      <p className="text-md sm:mt-4 max-sm:mb-4 text-accent max-sm:text-sm">
                        Comparer nos solutions pour choisir celle adaptée à vos
                        besoins énergétiques.
                      </p>
                    </div>

                    <div>
                      <Button
                        size={'lg'}
                        className="text-white mx-auto py-2 rounded-full hover:bg-accent/90 transition"
                      >
                        <Link href={`/store/category/solar/kit/compare`}>
                          {' '}
                          Comparer{' '}
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="relative w-[40%] lg:w-[50%]  max-sm:w-full">
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

          <div className="flex items-center justify-center  mt-8 lg:hidden xl:flex">
            <div className="flex flex-row max-sm:flex-col-reverse shadow-lg max-w-6xl min-h-[60vh]   hover:shadow-2xl transition-all p-0 border-transparent container relative ">
              <div className="flex w-[60%]  max-sm:h-auto max-md:h-[80vh] max-sm:flex-col max-sm:w-full flex-row items-center justify-center bg-white max-sm:pb-4">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.1, ease: 'easeIn' },
                  }}
                  className="absolute max-md:hidden  bg-green-300 bottom-5 lg:-left-30 w-82 h-22 rounded-full  hover:scale-120 transition-all "
                />
                <div className="sm:w-96 flex flex-col max-sm:space-y-2 space-y-4 sm:mx-12 mx-4 max-sm:mt-4 items-center justify-center">
                  <h2 className="text-4xl max-sm:text-2xl text-wrap">
                    Vous ne savez pas quel kit choisir ?
                  </h2>

                  <p className="text-md sm:mt-4 max-sm:mb-4 text-accent max-sm:text-sm">
                    Comparer nos solutions pour choisir celle adaptée à vos
                    besoins énergétiques.
                  </p>
                </div>

                <div>
                  <Button
                    size={'lg'}
                    className="text-white px-4 py-2 rounded-full hover:bg-accent/90 transition"
                  >
                    <Link href={`/store/category/solar/kit/compare`}>
                      {' '}
                      Comparer{' '}
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative w-[40%] max-sm:w-full">
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
    id: 1,
    title: 'kit solaire Mini',
    description:
      'Obtenez une indépendance énergétique avec notre mini kit solaire tout-en-un, compact et efficace.',
    imageUrl: kitsolar,
  },

  {
    id: 2,
    title: 'Kit Solaire Pro',
    description:
      'Découvrez nos solutions complètes pour une gestion énergétique industrielle fiable et performante.',
    imageUrl: kitsolar,
  },

  {
    id: 3,
    title: 'Kit solaire Pro max',
    description:
      'Maximisez votre autonomie énergétique grâce à notre kit solaire ultime, puissant et polyvalent.',
    imageUrl: kitsolar,
  },

  {
    id: 4,
    title: 'Kit solaire Ultra ',
    description:
      "Profitez d'une autonomie énergétique optimale avec notre kit solaire ultra performant et durable.",
    imageUrl: kitsolar,
  },
];
export default BestProducts;
