'use client';
import logo1 from '@/assets/LeadLogo1.svg';
import About from '@/components/about';
import BestProducts from '@/components/bestProduct';
import Following from '@/components/follow';
import ProductsCategories from '@/components/inviteShopping/productsCategories';
import LandingPage from '@/components/landing';
import Newly from '@/components/newly';
import NewsLetters from '@/components/newsletter';
import Services from '@/components/service';
import ContactTechnicien from '@/components/technicien';
import Image from 'next/image';
import { useEffect, useState } from 'react';
export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);
  if (!isReady) {
    return (
      <div className="flex w-full h-screen items-center justify-center bg-white">
        <Image
          alt="logo"
          src={logo1}
          className="w-92 max-sm:w-54 aspect-square"
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full">
      <LandingPage />

      <About />

      <Services />

      <ProductsCategories />
      <BestProducts />

      <ContactTechnicien />
      <Newly />

      <NewsLetters />

      <Following />
    </div>
  );
}
