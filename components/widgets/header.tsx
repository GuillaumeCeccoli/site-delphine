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
    <header className="flex flex-row justify-between items-center bg-[#F3DAD8]">
      <Sheet>
        <SheetTrigger>
          <Menu color="black" size={60} className="m-2" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="flex flex-col items-center justify-center">
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
      <section className="w-1/2">
        <div className="flex flex-row justify-between items-center">
          <Image
            src="/icons/Doctolib.svg"
            alt="Doctolib"
            width={50}
            height={50}
          />
          <Image
            src="/icons/Linkedin.svg"
            alt="Linkedin"
            width={50}
            height={50}
          />
          <Image src="/icons/Mail.svg" alt="Mail" width={50} height={50} />
        </div>
      </section>
    </header>
  );
}

export default Header;

