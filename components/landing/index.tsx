'use client';

import Image from 'next/image';
import { useState } from 'react';
import m_illu1 from '@/assets/m_illu1.png';
import { Button } from '../ui/button';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Pause } from 'lucide-react';
import landingIllu from "@/assets/illu.jpg"

export default function LandingPage() {
  const [landingIdx, setLandingIdx] = useState(1);
  const landingData = [
    {
      title: 'Énergie solaire pour tous',
      description:
        'Découvrez nos panneaux solaires performants et durables, conçus pour réduire vos factures d’électricité et protéger l’environnement.',
      image: '/images/solar-panels-home.jpg',
    },

    {
      title: 'Installation clé en main',
      description:
        'Nous vous accompagnons de l’étude de votre projet à la mise en service, avec un suivi personnalisé et une garantie premium.',
      image: '/images/solar-installation-team.jpg',
    },

    {
      title: 'Rentabilité assurée',
      description:
        'Investissez dans une solution énergétique fiable et profitez d’un retour sur investissement rapide grâce aux économies réalisées.',
      image: '/images/solar-roi-graph.jpg',
    },
  ];
  return (
    <>
      {/**Landing */}
      <div className="flex flex-col-reverse sm:items-center sm:justify-center relative max-h-[90vh]">
        <Image
          src={landingIllu}
          alt=""
          width={4256}
          height={2832}
          className="absolute inset-0 max-sm:hidden  max-h-[90vh]"
        />
        <div className="absolute inset-0 bg-black/60  max-h-[90vh]" />
        <div className="flex h-[90vh] flex-col sm:justify-center container max-x-7xl">
          <div className="w-full h-[30%] relative sm:hidden">
            <Image
              src={m_illu1}
              alt="mobile first illustration for landing"
              fill
              objectFit="cover"
            />
          </div>

          <div className="max-sm:h-[70%] flex flex-col w-full sm:w-2xl max-sm:py-24 py-8 p-4 justify-between sm:space-y-4 relative max-sm:bg-black ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.7 } }}
              className="absolute inset-0 z-0 sm:hidden"
              style={{
                backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
        `,
              }}
            />

            {/**Title and description */}
            <div className="flex flex-col space-y-4.5">
              <h2 className="text-white  font-bold -tracking-wider leading-12 sm:leading-16 antialiased text-4xl sm:text-7xl">
                Énergie{' '}
                <strong className="border relative p-2 me-1 border-transparent   transition-all hover:scale-105 cursor-pointer text-wrap">
                  <span className="inset-0 absolute bg-linear-to-tr to-blue-950 sm:from-black/25 sm:hidden" />
                  Solaire{' '}
                </strong>
                pour tous
              </h2>

              <p className="text-gray-600 sm:text-white max-w-2xl mx-auto text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores doloribus delectus, magni suscipit dolore placeat quia
                molestias.
              </p>
            </div>

            {/*CTA and landing control*/}
            <div className="flex flex-col justify-between space-y-4  mt-8">
              {/**CTA */}
              <div className="flex flex-row items-center space-x-4 justify-center  ">
                <Button
                  variant={'secondary'}
                  size={'lg'}
                  className="rounded-full font-bold"
                >
                  Acheter
                </Button>
                <Button
                  size={'lg'}
                  className="text-white font-bold rounded-full"
                >
                  Decouvrir
                </Button>
              </div>

              {/**Landing control */}
              <div className="flex flew-row space-x-1 items-center justify-center">
                <div className="flex items-center space-x-0.5">
                  <Button
                    className="rounded-full"
                    variant={'ghost'}
                    size={'icon'}
                  >
                    <ArrowLeft color="red" />
                  </Button>

                  <Button
                    className="rounded-full"
                    variant={'ghost'}
                    size={'icon'}
                  >
                    <Pause color="red" />
                  </Button>
                </div>
                <div className="flex flex-row space-x-0.5  sm:mt-4">
                  <span
                    className={clsx(
                      'border-transparent h-2 rounded-full bg-white sm:bg-black/50 w-5',
                      {
                        'min-w-[110px]': landingIdx === 1,
                      }
                    )}
                  ></span>

                  <span
                    className={clsx(
                      'border-transparent h-2 rounded-full bg-white sm:bg-black/50 w-5',
                      {
                        'min-w-[110px]': landingIdx === 2,
                      }
                    )}
                  ></span>

                  <span
                    className={clsx(
                      'border-transparent h-2 rounded-full bg-white sm:bg-black/50 w-5',
                      {
                        'min-w-[110px]': landingIdx === 3,
                      }
                    )}
                  ></span>
                </div>

                <div>
                  <Button
                    className="rounded-full"
                    variant={'ghost'}
                    size={'icon'}
                  >
                    <ArrowRight color="red" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
