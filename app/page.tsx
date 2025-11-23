import About from '@/components/about';
import LandingPage from '@/components/landing';
import Services from '@/components/service';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col space-y-12 w-full">
      <LandingPage />
      
      <Services />
      <About />
    </div>
  );
}
