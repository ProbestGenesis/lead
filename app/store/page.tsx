'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import UserData from '@/components/store/contact';
import BestProducts from '@/components/bestProduct';
import electricAmor from '@/assets/electricAmor.jpeg';
import Image from 'next/image';

function Page() {
  const [product, setProduct] = useState<{
    name: string;
    id: number;
    description: string;
    price: number;
    category: string;
    type: string;
  }>({
    name: '',
    id: 0,
    description: '',
    price: 0,
    category: '',
    type: '',
  });
  return (
    <section className="min-h-screen flex flex-col bg-white py-12">
      <div className="container 2xl:px-12 flex flex-col space-y-4 mx-auto h-full max-sm:px-4">
        <h3 className="font-bold text-gray-900  tracking-tighter text-3xl">
          Tout nos produits
        </h3>
        <div className=" max-sm:grid grid-cols-2 flex flex-wrap max-md:justify-center lg:mx-auto gap-2 flex-row lg:gap-8 md:gap-8">
          {storeData.map((item, idx) => {
            if (idx !== 0 && idx === 4) {
              return (
                <Card
                  key={idx.toString()}
                  className="w-sm md:w-xs lg:w-[600px] rounded-none relative max-sm:w-full px-2  border hover:scale-105 hover:shadow-sm transition-all max-sm:px-0.5  max-sm:py-2"
                >
                  {' '}
                  <div className="h-42">
                    <Image
                      src={electricAmor}
                      alt={`${item.name} photo`}
                      fill
                      quality={75}
                      className="object-cover w-full max-h-42"
                    />
                  </div>
                  <CardHeader className="max-sm:px-0.5 ">
                    <CardTitle>{item.name}</CardTitle>

                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  {item.type === 'kit' ? (
                    <CardFooter className="flex w-full justify-end max-sm:px-0.5 max-sm:py-0">
                      <Button className="rounded-full " size={'sm'}>
                        Voir
                      </Button>
                    </CardFooter>
                  ) : (
                    <CardFooter className="flex w-full justify-end max-sm:px-0.5 max-sm:py-0">
                      <Drawer direction="right">
                        <DrawerTrigger className="" asChild>
                          <Button
                            size={'sm'}
                            className="rounded-full "
                            onClick={() => {
                              setProduct(item);
                            }}
                          >
                            Voir
                          </Button>
                        </DrawerTrigger>

                        <DrawerContent>
                          <span className="justify-end flex">
                            <DrawerClose>
                              {' '}
                              <X />{' '}
                            </DrawerClose>
                          </span>
                          <DrawerHeader>
                            <div className="min-h-[40vh]"></div>
                            <DrawerTitle>{product.name}</DrawerTitle>

                            <DrawerDescription>
                              {product.description}
                            </DrawerDescription>
                          </DrawerHeader>

                          <AnimatePresence>
                            <motion.div className="px-4">
                              <UserData />
                            </motion.div>
                          </AnimatePresence>
                        </DrawerContent>
                      </Drawer>
                    </CardFooter>
                  )}
                </Card>
              );
            }
            return (
              <Card
                key={idx.toString()}
                className="w-sm md:w-xs lg:w-2xs rounded-none relative max-sm:w-full px-2  border hover:scale-105 hover:shadow-sm transition-all max-sm:px-0.5  max-sm:py-2"
              >
                {' '}
                <div className="h-42">
                  <Image
                    src={electricAmor}
                    alt={`${item.name} photo`}
                    fill
                    quality={75}
                    className="object-cover w-full max-h-42"
                  />
                </div>
                <CardHeader className="max-sm:px-0.5 ">
                  <CardTitle>{item.name}</CardTitle>

                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                {item.type === 'kit' ? (
                  <CardFooter className="flex w-full justify-end max-sm:px-0.5 max-sm:py-0">
                    <Button className="rounded-full " size={'sm'}>
                      Voir
                    </Button>
                  </CardFooter>
                ) : (
                  <CardFooter className="flex w-full justify-end max-sm:px-0.5 max-sm:py-0">
                    <Drawer direction="right">
                      <DrawerTrigger className="">
                        <Button
                          size={'sm'}
                          className="rounded-full "
                          onClick={() => {
                            setProduct(item);
                          }}
                        >
                          Voir
                        </Button>
                      </DrawerTrigger>

                      <DrawerContent>
                        <span className="justify-end flex">
                          <DrawerClose>
                            {' '}
                            <X />{' '}
                          </DrawerClose>
                        </span>
                        <DrawerHeader>
                          <div className="min-h-[40vh]"></div>
                          <DrawerTitle>{product.name}</DrawerTitle>

                          <DrawerDescription>
                            {product.description}
                          </DrawerDescription>
                        </DrawerHeader>

                        <AnimatePresence>
                          <motion.div className="px-4">
                            <UserData />
                          </motion.div>
                        </AnimatePresence>
                      </DrawerContent>
                    </Drawer>
                  </CardFooter>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const storeData = [
  {
    id: 3,
    name: 'Ampoule LED 12W',
    description: 'Ampoule LED basse consommation de 12W.',
    price: 5.99,
    category: 'Éclairage',
    image: '/images/led-light-bulb.jpg',
    type: 'normal',
  },
  {
    id: 4,
    name: 'Chauffage électrique 1500W',
    description: 'Chauffage électrique performant avec thermostat réglable.',
    price: 49.99,
    category: 'Chauffage',
    image: '/images/electric-heater.jpg',
    type: 'normal',
  },
  {
    id: 1,
    name: 'Kit panneau solaire 100W',
    description:
      'Kit complet avec panneau solaire 100W, régulateur de charge et câbles.',
    price: 199.99,
    category: 'Énergie solaire',
    image: '/images/solar-panel-kit.jpg',
    type: 'kit',
  },
  {
    id: 2,
    name: 'Station d\'énergie portable 500Wh',
    description:
      'Station d\'énergie compacte et portable pour extérieur et urgence.',
    price: 299.99,
    category: 'Stations d\'énergie',
    image: '/images/power-station.jpg',
    type: 'kit',
  },
  {
    id: 5,
    name: 'Ventilateur rechargeable',
    description: 'Ventilateur portable rechargeable avec plusieurs vitesses.',
    price: 29.99,
    category: 'Ventilation',
    image: '/images/rechargeable-fan.jpg',
    type: 'normal',
  },
  {
    id: 6,
    name: 'Ventilateur rechargeable',
    description: 'Ventilateur portable rechargeable avec plusieurs vitesses.',
    price: 29.99,
    category: 'Ventilation',
    image: '/images/rechargeable-fan.jpg',
    type: 'normal',
  },
  {
    id: 7,
    name: 'Ventilateur rechargeable',
    description: 'Ventilateur portable rechargeable avec plusieurs vitesses.',
    price: 29.99,
    category: 'Ventilation',
    image: '/images/rechargeable-fan.jpg',
    type: 'normal',
  },
];
export default Page;
