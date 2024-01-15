"use client";

import React from "react";
import Image from "next/image";
import * as z from "zod";
import { useForm, Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/widgets/header";
import Footer from "@/components/widgets/footer";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Trop court" })
    .max(50, { message: "Trop long" })
    .refine((value) => /^[a-zA-Z]+$/.test(value), {
      message: "Votre nom ne peut pas contenir de chiffres.",
    }),
  email: z.string().email({ message: "Votre mail est invalide" }),
  message: z
    .string()
    .min(10, { message: "Votre message est trop court" })
    .max(3000, { message: "Votre message est trop long" }),
  phone: z
    .string()
    .length(10, {
      message: "Le numéro de téléphone doit avoir exactement 10 chiffres",
    })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Le numéro de téléphone ne doit contenir que des chiffres",
    }),
});

type FormFieldComponenentsProps = {
  control: Control<z.infer<typeof formSchema>>;
  name: keyof z.infer<typeof formSchema>;
  label: string;
  placeholder: string;
};

const FormFieldComponent: React.FC<FormFieldComponenentsProps> = ({
  control,
  name,
  label,
  placeholder,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="my-4">
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
      phone: "",
    },
  });
  const onSubmit = async () => {
    const values = form.getValues();

    try {
      const response = await fetch("/api/contactData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Error sending email");
      }

      form.reset({
        username: "",
        email: "",
        message: "",
        phone: "",
      });

      toast(
        "Votre mail a été envoyé avec succés, vous serez recontacté(e) rapidement. Merci !"
      );
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };
  return (
    <section className="backgroundLightGrey">
      <header>
        <Header />
      </header>
      <div className="flex flex-col items-center justify-center my-10">
        <h1 className="text-2xl mt-10 font-serif lg:text-4xl">
          Où me trouver ?
        </h1>
        <div className="w-full flex flex-col items-center justify-center my-20">
          <div className="w-full font-sans flex flex-col items-center md:flex-row md:justify-around">
            <div className="w-4/5 my-10 overflow-hidden rounded-2xl md:w-2/5 mb-20 shadowCustom">
              <Image
                src="/imgs/exterieur.JPG"
                alt="Photo exterieur du bâtiment où se trouve le cabinet"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
            <div className="w-4/5 flex flex-col items-start p-3 bg-[#EFEFEF] bg-opacity-60 rounded-xl md:w-2/5 lg:text-xl lg:p-6 shadowCustonReverse">
              <p>
                <strong>Adresse : </strong>
                Cabinet médical le Vento387 Avenue de Plan de Campagne13170 Les
                Pennes-Mirabeau
              </p>
              <p className="py-4">
                <strong>Téléphone : </strong>
                07 69 41 65 15
              </p>
              <p>
                <strong>Mail : </strong>
                delphine.ceccoli@laposte.net
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundPink">
        <ToastContainer />
        <h2 className="font-serif text-3xl pt-10 text-center lg:ml-20 xl:ml-40 xl:text-4xl">
          Contact
        </h2>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center lg:mx-10 2xl:mx-60">
          <div className="w-4/5 overflow-hidden rounded-2xl mt-16 md:w-3/5 lg:mt-0 lg:w-2/4 lg:mb-20 shadowCustom">
            <Image
              src="/imgs/contactDelphine.JPG"
              alt="Photo de la psychologue à son bureau faisant un jolie sourire."
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
          </div>
          <div className="w-4/5 font-sans my-16 md:w-3/5 lg:w-2/5 xl:text-lg">
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Form {...form}>
                <FormFieldComponent
                  control={form.control}
                  name="username"
                  label="Nom"
                  placeholder="Nom"
                />
                <FormFieldComponent
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="Email"
                />
                <FormFieldComponent
                  control={form.control}
                  name="phone"
                  label="Téléphone"
                  placeholder="Téléphone"
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Message" {...field} rows={10} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Form>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="my-10 font-sans w-2/5 h-10 bg-gray-100 text-black hover:bg-gray-300"
                >
                  Envoyer
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}

