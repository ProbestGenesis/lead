'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../ui/logo';
import { ShoppingCart, Tally4 } from 'lucide-react';
import { usePathname, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerClose,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { Button } from '../ui/button';
import clsx from 'clsx';
import logo1 from "@/assets/LeadLogo1.svg"


const link = ['Accueil', 'A propos', 'Contact', 'Carrière', 'Boutique'];

function NavBar() {
  const pathname = usePathname();
  const { category } = useParams();
  console.log('category', category);

  if (pathname?.includes('store')) {
    return (
      <nav className="sticky top-0 z-50 flex  w-full items-center justify-center  py-4 px-2 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/40 ">
        <div className="flex w-full justify-between items-center  max-w-6xl container">
          <div className="flex items-center justify-start space-x-6.5 max-sm:space-x-2">
            <Image alt="logo"  src={logo1} className='w-18 aspect-square' />

            <div className="flex items-center space-x-4.5 max-sm:space-x-1.5">
              <Link href="/store" className="px-2 border-r-2 ">
                <p className="font-medium mx-4 uppercase ">boutique</p>
              </Link>

              <ul className="flex items-center space-x-2 cursor-pointer">
                <Link href="">{category?.slice(0, 15).toLocaleString()}</Link>
              </ul>
            </div>
          </div>

          <LeftLinks />

          <div className="sm:hidden">
            <Drawer direction="top">
              <DrawerTrigger>
                <Tally4
                  strokeWidth={2.5}
                  color="black"
                  size={32}
                  className="sm:hidden"
                />
              </DrawerTrigger>

              <DrawerContent></DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
    );
  }

  const href = link.map((item) => {
    switch (item) {
      case 'Accueil':
        return '/';
        break;
      case 'A propos':
        return '/about';
        break;
      case 'Contact':
        return '/contact';
        break;
      case 'Carrière':
        return '/career';
        break;
      case 'Boutique':
        return '/store';
        break;
      default:
        return '/';
        break;
    }
  });
  return (
    <nav className=" sticky top-0 z-50 flex  w-full items-center justify-center  py-4 px-2 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/40 ">
      <div className="flex w-full justify-between items-center  max-w-6xl container">
        <div className="flex items-center justify-start space-x-6.5 max-sm:space-x-2">
          <Image alt="logo" src={logo1} className="w-18 aspect-square" />

          <ul className="max-sm:hidden flex items-center space-x-3 max-sm:space-x-1.5">
            {link.map((item, idx) => {
              if (idx <= 2) {
                return (
                  <Link href={href[idx]} key={idx.toString()}>
                    {' '}
                    <li
                      className={clsx(
                        'transition-all decoration-2 hover:underline hover:font-bold hover:underline-offset-4 decoration-blue-700 cursor-pointer',
                        {
                          'underline underline-offset-8':
                            pathname === href[idx],
                        }
                      )}
                    >
                      {item}
                    </li>
                  </Link>
                );
              }
            })}
          </ul>
        </div>

        <LeftLinks />

        <div className="sm:hidden">
          <Drawer direction="top">
            <DrawerTrigger>
              <Tally4
                strokeWidth={2.5}
                color="black"
                size={32}
                className="sm:hidden"
              />
            </DrawerTrigger>

            <DrawerContent className="rounded-none">
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
              </DrawerHeader>

              <div>
                <ul className="flex flex-col space-y-4 p-2">
                  {link.map((item, idx) => (
                    <Link href={href[idx]} key={idx.toString()}>
                      <DrawerClose>{item}</DrawerClose>
                    </Link>
                  ))}{' '}
                </ul>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}

const LeftLinks = () => {
  const href = link.map((item) => {
    switch (item) {
      case 'carrière':
        return '/career';
        break;
      case 'boutique':
        return '/store';
        break;
      default:
        return '/';
        break;
    }
  });
  return (
    <div>
      <ul className="max-sm:hidden flex items-center space-x-3">
        <li className="mx-4 transition-all decoration-2 hover:underline hover:font-bold hover:underline-offset-4 decoration-blue-700 cursor-pointer">
          <Link href="career">Carrière</Link>
        </li>

        <li className="mx-4 transition-all decoration-2 hover:underline hover:font-bold hover:underline-offset-4 decoration-blue-700 cursor-pointer">
          <Link href="store">Boutique</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
