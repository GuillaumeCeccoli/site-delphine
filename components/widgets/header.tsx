"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLinks } from "./useLinks";

export default function Header() {
  const { links, socialLinks } = useLinks();
  return (
    <header className="flex flex-row justify-between items-center backgroundPink h-[100px] relative border-b border-gray-400">
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu color="black" size={50} className="m-2" />
          </SheetTrigger>
          <SheetContent className="absolute right-0 top-0 h-screen w-3/5 backgroundPink">
            <SheetHeader>
              <SheetDescription className="flex flex-col items-start">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-lg text-black my-2 font-sans"
                  >
                    {link.name}
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-around lg:text-base xl:text-xl lg:w-1/2 xl:w-2/5 2xl:w-2/6 2xl:ml-20">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="font-sans underline-from-center scale-on-hover"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <section className="w-2/5 mr-3 md:w-1/5 2xl:w-[13%] 2xl:mr-20 md:mr-10">
        <div className="flex flex-row justify-between items-center">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href} className="scale-on-hover">
              {link.src ? (
                <Image src={link.src} alt={link.alt} width={40} height={40} />
              ) : null}
            </Link>
          ))}
        </div>
      </section>
    </header>
  );
}

