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

function Header() {
  return (
    <header className="flex flex-row justify-between items-center bg-[#F3DAD8] h-[100px] relative">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu color="black" size={60} className="m-2" />
          </SheetTrigger>
          <SheetContent className="absolute left-0 top-0 h-[200px] w-full">
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col items-start">
                  <Link className="text-lg text-black my-2" href="/">
                    A propos
                  </Link>
                  <Link className="text-lg text-black my-2" href="/">
                    Ma pratique
                  </Link>
                  <Link className="text-lg text-black my-2" href="/">
                    Blog
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:flex-row md:items-center justify-between md:w-2/4 md:m-10 md:text-xl xl:w-1/3 2xl:w-1/4 2xl:ml-20">
        <Link className="mx-5" href="/">
          A propos
        </Link>
        <Link className="mx-5" href="/">
          Ma pratique
        </Link>
        <Link className="mx-5" href="/">
          Blog
        </Link>
      </div>
      <section className="w-1/2 mr-3 md:w-1/5 2xl:w-[13%] 2xl:mr-20 md:mr-10">
        <div className="flex flex-row justify-between items-center">
          <Link href="/">
            <Image
              src="/icons/Doctolib.svg"
              alt="Doctolib"
              width={50}
              height={50}
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/Linkedin.svg"
              alt="Linkedin"
              width={50}
              height={50}
            />
          </Link>
          <Link href="/">
            <Image src="/icons/Mail.svg" alt="Mail" width={50} height={50} />
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;

