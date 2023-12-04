"use client";

import React from "react";
import Image from "next/image";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Control } from "react-hook-form";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Trop court" })
    .max(50, { message: "Trop long" }),
  email: z.string().email({ message: "Email invalide" }),
  message: z
    .string()
    .min(10, { message: "Trop court" })
    .max(500, { message: "Trop long" }),
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
  const onSubmit = () => {
    console.log(form.getValues());
  };
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="backgroundPink">
      <h2 className="underline font-serif text-3xl pt-10 text-center lg:ml-20 xl:ml-40 xl:text-4xl">
        Contact
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center md:mx-10 lg:mx-20 2xl:mx-60">
        <Image
          src="/imgs/photo-contact.png"
          alt="Un bureau avec une chaise"
          width={isMobile ? 246 : 400}
          height={isMobile ? 370 : 600}
          className="mt-16 md:mb-40"
        />
        <div className="w-11/12 font-sans my-16 sm:w-4/6 md:w-3/5 md:my-10 lg:w-2/4 xl:text-lg">
          <Form {...form} /* onSubmit={form.handleSubmit(onSubmit)} */>
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
              className="my-10 font-sans w-2/5 h-10 bg-gray-100 text-black hover:bg-gray-300" /* onClick={form.handleSubmit(onSubmit)} */
            >
              Envoyer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

