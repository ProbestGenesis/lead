import facebook from '@/assets/facebook.png';
import tiktok from '@/assets/tik.png';
import linkedin from '@/assets/linkedin.png';
import Image  from 'next/image';
import Link from 'next/link';

function Following() {
  return (
    <div className="flex flex-col space-y-4  items-center justify-center py-8">
      <h3>Nous suivres sur les différentes platforme</h3>

      <ul className="flex flex-row space-x-2.5">
        <li>
          <Link href="https://facebook.com" className="flex flex-col space-y-4">
            {' '}
            <Image className="mx-auto" src={facebook} alt="logo facebook" />
            Facebook
          </Link>
        </li>

        <li>
          <Link href="https://linkedIn.com" className="flex flex-col space-y-4">
            {' '}
            <Image className="mx-auto" src={linkedin} alt="logo linkedin" />
            linkedIn
          </Link>
        </li>

        <li>
          <Link
            href="https://tiktok.com"
          
            className="flex flex-col space-y-3.5 rounded-full w-12 h-12 "
          >
            {' '}
            <Image
              className="mx-auto rounded-[100%] w-12 h-12 "
              src={tiktok}
              alt="logo facebook"
            />
            Tiktok
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Following;
