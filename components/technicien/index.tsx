import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import techncienImage from "@/assets/technicien.jpg"
import whatsappIcon from "@/assets/whatsapp.png"
function ContactTechnicien() {
  return (
    <section className="flex-col">
      <div className="bg-yellow-300 py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto flex  justify-center h-full flex-col">
          <div className="flex max-sm:flex-col flex-row justify-between space-y-4 w-fit items-center">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Des techiciens(nnes) prêtent à vous servir
              </h2>

              <div className="h-1 w-20 bg-secondary rounded-full" />

              <p className="text-gray-600 max-w-3xl text-lg mt-4">
                besoin d'aide pour l'installation ou réparation de votre
                système? Nos techniciens sont là pour vous accompagner.
              </p>
            </div>

            {/*  <span className="flexjustify-end mt-6 mx-6">
              <Button
                size={'lg'}
                variant={'outline'}
                className="border-transparent rounded-full"
              >
                <Link href={'/about'}>Contacter </Link>
              </Button>
            </span>*/}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-0 max-md:flex flex-col">
        <div className="col-span-2">
          <Image
            src={techncienImage}
            alt=""
            width={1333}
            height={2000}
            placeholder="blur"
            style={{ objectFit: 'cover' }}
            quality={60}
            className="h-[80vh]"
          />
        </div>
        <div className="col-span-2 h-[80vh] flex flex-col space-y-8 items-center justify-center px-8 text-left">
       
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              Nous contacter
            </h3>
            <span className="flex items-center justify-center space-x-4 mx-auto">
              <Link
                href={'https://wa.me/1234567890'}
                target="_blank"
                className="flex flex-col items-center"
              >
                <Image
                  src={whatsappIcon}
                  alt="whatsapp icon"
                  className="w-12 h-12 mx-auto"
                />

                <p>Whatsapp</p>
              </Link>

              <Link
                href={'https://wa.me/1234567890'}
                target="_blank"
                className="flex flex-col items-center"
              >
                <Image
                  src={whatsappIcon}
                  alt="whatsapp icon"
                  className="w-12 h-12 mx-auto"
                />

                <p>Whatsapp</p>
              </Link>
              <Link
                href={'https://wa.me/1234567890'}
                target="_blank"
                className="flex flex-col items-center"
              >
                <Image
                  src={whatsappIcon}
                  alt="whatsapp icon"
                  className="w-12 h-12 mx-auto"
                />

                <p>Whatsapp</p>
              </Link>
            </span>
          
        </div>
      </div>
    </section>
  );
}
export default ContactTechnicien