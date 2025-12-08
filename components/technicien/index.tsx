"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import techncienImage from "@/assets/technicien.jpg";
import whatsappIcon from "@/assets/whatsapp.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  lastname: z
    .string()
    .min(2, { message: "Votre nom doit contenir au moins deux caractères" }),
  firstname: z.string().min(2, {
    message: "Votre prénom doit contenir au moins deux caractères",
  }),
  email: z.string().nonempty({
    message: "Username must be at least 2 characters.",
  }),
  message: z.string().min(60, {
    message: "Le message doit contenir au moins 60 caractères",
  }),
});
function ContactTechnicien() {
  return (
    <section className="flex-col min-h-screen" id="contact">
      <div
        id="technicien"
        className="bg-yellow-300 py-8 max-sm:px-4 md:px-6 lg:px-8"
      >
        <div className="container 2xl:px-12 mx-auto flex  justify-center h-full flex-col">
          <div className="flex max-sm:flex-col flex-row justify-between space-y-4 w-fit items-center">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Des techiciens(nnes) prêtent à vous servir
              </h2>

              <div className="h-1 w-20 bg-secondary rounded-full" />

              <p className="text-gray-600 max-w-3xl text-lg ">
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

      <ContactComponent />
    </section>
  );
}

export const ContactComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      lastname: "",
      firstname: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="grid grid-cols-4 gap-0 max-md:flex flex-col max-lg:min-h-screen">
      <div className="col-span-2">
        <Image
          src={techncienImage}
          alt=""
          width={1333}
          height={2000}
          placeholder="blur"
          style={{ objectFit: "cover" }}
          quality={60}
          className="h-[80vh] lg:h-screen"
        />
      </div>
      <div className="col-span-2  flex flex-col space-y-8 items-center justify-center px-8 text-left bg-white">
        <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
          Nous contacter
        </h3>
        <span className="flex items-center justify-center space-x-4 mx-auto">
          <Link
            href={"https://wa.me/1234567890"}
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
            href={"https://wa.me/1234567890"}
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

        <div className="my-4 flex items-center justify-center space-x-3.5 ">
          <span className="flex-1 bg-gray-700 h-1.5  w-32 rounded-full" />
          <p className="font-bold text-gray-400">OU</p>
          <span className="flex-1 bg-gray-700 h-1.5  w-32 rounded-full" />
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3.5">
              <div className="flex flex-row space-x-2">
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Votre nom </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage className="max-w-[100px] text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Votre prénom</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage className="max-w-[100px] text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="...@gmail.col"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage className="max-w-3xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre email</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Entrez votre message ici..."
                        {...field}
                        className="w-full max-h-32"
                      />
                    </FormControl>
                    <FormMessage className="max-w-3xs" />
                  </FormItem>
                )}
              />
              <span className="flex justify-end w-full">
                <Button type="submit" className="rounded-full">
                  Submit
                </Button>
              </span>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ContactTechnicien;
