"use client"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import techncienImage from '@/assets/technicien.jpg';
import whatsappIcon from '@/assets/whatsapp.png';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Votre nom doit contenir au moins deux caractères' }),
  number: z.string().nonempty({
    message: 'Vueillez saisir votre numéro de téléphone',
  }),
});
function UserData() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            number: ""
        },
    });
    
    const onSubmit = async (data: z.infer<typeof formSchema>) => {

    }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-row space-x-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre nom </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre numéro</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
            <p className="text-muted"> *Votre localisation approximative nous sera envoyé, vueillez autoriser la localisation </p>
          <span className="flex justify-end w-full">
            <Button type="submit" className="rounded-full">
              Submit
            </Button>
          </span>
        </form>
      </Form>
    </div>
  );
}
export default UserData