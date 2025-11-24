import About from '@/components/about';
import LandingPage from '@/components/landing';
import Services from '@/components/service';
import Image from 'next/image';
import Newly from '@/components/newly';
import Following from '@/components/follow';
import BestProducts from '@/components/bestProduct';

export default function Home() {
  return (
    <div className="flex flex-col space-y-12 w-full">
      <LandingPage />
      

      <About />
      
      <Services />

      <BestProducts />

      <Newly />

      <Following />
    </div>
  );
}
