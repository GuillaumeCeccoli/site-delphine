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
    <header className="flex flex-row justify-between items-center backgroundPink h-[100px] relative">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu color="black" size={50} className="m-2" />
          </SheetTrigger>
          <SheetContent className="absolute left-0 top-0 h-[200px] w-full backgroundPink">
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
      <div className="hidden md:flex md:flex-row md:items-center justify-between md:w-2/4 md:m-10 md:text-xl xl:w-2/5 2xl:w-1/4 2xl:ml-20">
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
                <Image src={link.src} alt={link.name} width={40} height={40} />
              ) : null}
            </Link>
          ))}
        </div>
      </section>
    </header>
  );
}

