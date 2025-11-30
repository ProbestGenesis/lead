"use client"

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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

function Page() {
  const [product, setProduct] = useState<{name: string, idx: number, description:string, price: number, category: string, type: string}>({})
  return (
    <section className="min-h-screen">
      <div className="container mx-auto h-full">
        <div className="flex flex-wrap flex-row lg:gap-8 md:gap-8">
            {storeData.map((item, idx) => {
              return (
                <Card
                  key={idx.toString()}
                  className="w-sm md:w-xs  border hover:scale-105 hover:shadow-sm transition-all"
                >
                  <CardHeader>
                    <div className="min-h-36"></div>
                    <CardTitle>{item.name}</CardTitle>

                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>

                  {item.type === 'kit' ? (
                    <CardFooter className="flex w-full justify-end">
                      <Button className="rounded-full">
                        Ajouter au panier
                      </Button>
                    </CardFooter>
                  ) : (
                    <CardFooter className="flex w-full justify-end">
                      <Drawer direction="right">
                        <DrawerTrigger className="">
                          <Button
                            className="rounded-full"
                            onClick={() => {
                              setProduct(item);
                            }}
                          >
                            Ajouter au panier
                          </Button>
                        </DrawerTrigger>

                        <DrawerContent>
                            <span className='justify-end flex'>
                            <DrawerClose> <X /> </DrawerClose>
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


      <BestProducts />
    </section>
  );
}

const storeData = [
  {
    id: 3,
    name: 'LED Light Bulb 12W',
    description: 'Energy-efficient LED light bulb with 12W power consumption.',
    price: 5.99,
    category: 'Lighting',
    image: '/images/led-light-bulb.jpg',
    type: 'nomarl',
  },

  {
    id: 4,
    name: 'Electric Heater 1500W',
    description: 'High-performance electric heater with adjustable thermostat.',
    price: 49.99,
    category: 'Heating',
    image: '/images/electric-heater.jpg',
    type: 'nomarl',
  },
  {
    id: 1,
    name: 'Solar Panel Kit 100W',
    description:
      'Complete solar panel kit with 100W panel, charge controller, and cables.',
    price: 199.99,
    category: 'Solar Kits',
    image: '/images/solar-panel-kit.jpg',
    type: 'kit',
  },
  {
    id: 2,
    name: 'Portable Power Station 500Wh',
    description:
      'Compact and portable power station for outdoor and emergency use.',
    price: 299.99,
    category: 'Power Stations',
    image: '/images/power-station.jpg',
    type: 'kit',
  },

  {
    id: 5,
    name: 'Rechargeable Fan',
    description: 'Portable rechargeable fan with multiple speed settings.',
    price: 29.99,
    category: 'Cooling',
    image: '/images/rechargeable-fan.jpg',
    type: 'nomarl',
  },
];
export default Page;
