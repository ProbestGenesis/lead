'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import m_illu1 from '@/assets/m_illu1.png';
import { Button } from '../ui/button';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import landingIllu from '@/assets/illu.jpg';
import landingIllu2 from "@/assets/landing2.jpg"
import landingIllu3 from '@/assets/landing3.jpg';
export default function LandingPage() {
  const [landingIdx, setLandingIdx] = useState(1);
  const [pause, setPause] = useState(false);
  const landingData = [
    {
      title: 'Énergie solaire pour tous',
      description:
        "Le solaire est l'avenir, profitez-en dès aujourd'hui avec nos solutions adaptées à vos besoins.",
      image: landingIllu,
    },

    {
      title: 'Electricité batiment',
      description:
        'Installation professionnelle et respectant les normes de sécurité',
      image: landingIllu2,
    },

    {
      title: 'Controller et Innover avec nous',
      description:
        'Investissez dans une solution énergétique fiable et profitez d’un retour sur investissement rapide grâce aux économies réalisées.',
      image: landingIllu3,
    },
  ];

  useEffect(() => {
    if (!pause) {
      const interval = setInterval(() => {
        setLandingIdx((prv) => {
          return prv < 3 ? prv + 1 : 1;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [landingIdx, pause]);
  return (
    <>
      {/**Landing */}
      <div className="flex flex-col-reverse sm:items-center sm:justify-center relative max-h-[90vh]">
        <Image
          src={landingData[landingIdx-1].image}
          alt=""
          width={4256}
          height={2832}
          quality={60}
          className="absolute inset-0 max-sm:hidden  h-[90vh]"
        />
        <div className="absolute inset-0 bg-black/60  max-h-[90vh]" />
        <div className="flex h-[90vh] flex-col sm:justify-center container max-x-7xl">
          <div className="w-full h-[30%] relative sm:hidden">
            <Image
              src={m_illu1}
              alt="mobile first illustration for landing"
              fill
              objectFit="cover"
              quality={60}
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
            <AnimatePresence key={landingIdx}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.1,
                  },
                }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className="flex flex-col space-y-6"
              >
                {/*  <h2 className="text-white  font-bold -tracking-wider leading-12 sm:leading-16 antialiased text-4xl sm:text-7xl">
                Énergie{' '}
                <strong className="border relative p-2 me-1 border-transparent font-extrabold  transition-all hover:scale-105 cursor-pointer text-wrap z-10">
                  <span className="inset-0 z-0 absolute bg-linear-to-tr to-blue-950 sm:from-black/25 sm:hidden" />
                  Solaire{' '}
                </strong>
                pour tous
              </h2>
*/}{' '}
                <motion.h2 className="text-white  font-bold -tracking-wider leading-12 sm:leading-16 antialiased text-4xl sm:text-7xl">
                  {landingData[landingIdx - 1].title}
                </motion.h2>
                <motion.p className="text-gray-600 text-left sm:text-white max-w-2xl text-lg">
                  {landingData[landingIdx - 1].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/*CTA and landing control*/}
            <div className="flex flex-col justify-between space-y-4  mt-8">
              {/**CTA */}
              <div className="flex flex-row items-center space-x-4 justify-center z-10">
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
              <div className="flex flew-row space-x-1 items-center justify-center z-10">
                <div className="flex items-center space-x-0.5">
                  <Button
                    className="rounded-full"
                    variant={'ghost'}
                    size={'icon'}
                    onClick={() =>
                      setLandingIdx((prv) => {
                        return prv > 1 ? prv - 1 : 1;
                      })
                    }
                  >
                    <ArrowLeft color="red" />
                  </Button>

                  {pause ? (
                    <Button
                      className="rounded-full"
                      variant={'ghost'}
                      size={'icon'}
                      onClick={() => {
                        setPause(false);
                      }}
                    >
                      <Play color="red" />
                    </Button>
                  ) : (
                    <Button
                      className="rounded-full"
                      variant={'ghost'}
                      size={'icon'}
                      onClick={() => {
                        setPause(true);
                      }}
                    >
                      <Pause color="red" />
                    </Button>
                  )}
                </div>
                <div className="flex flex-row space-x-0.5  sm:mt-4">
                  <motion.span
                    className={clsx(
                      'border-transparent h-2 rounded-full   w-5 bg-black/50',
                      {
                        'min-w-[110px] bg-white': landingIdx === 1,
                      }
                    )}
                  ></motion.span>

                  <span
                    className={clsx(
                      'border-transparent h-2 rounded-full  bg-black/50 w-5',
                      {
                        'min-w-[110px] bg-white': landingIdx === 2,
                      }
                    )}
                  ></span>

                  <span
                    className={clsx(
                      'border-transparent h-2 rounded-full bg-black/50 w-2.5',
                      {
                        'min-w-[110px] bg-white': landingIdx === 3,
                      }
                    )}
                  ></span>
                </div>

                <div>
                  <Button
                    className="rounded-full"
                    variant={'ghost'}
                    size={'icon'}
                    onClick={() =>
                      setLandingIdx((prv) => {
                        return prv < 3 ? prv + 1 : 3;
                      })
                    }
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
