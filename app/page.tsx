import About from '@/components/about';
import LandingPage from '@/components/landing';
import Services from '@/components/service';
import Image from 'next/image';
import Newly from '@/components/newly';
import Following from '@/components/follow';
import BestProducts from '@/components/bestProduct';
import InviteShopping from '@/components/inviteShopping';
import NewsLetters from '@/components/newsletter';
import ProductsCategories from '@/components/inviteShopping/productsCategories';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <LandingPage />

      <About />

      <Services />

      <InviteShopping />

      <ProductsCategories />
      <BestProducts />

      <Newly />
      <NewsLetters />
  

      <Following />
    </div>
  );
}
