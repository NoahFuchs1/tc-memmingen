// components/Header.tsx
import { NavFromShadcn } from "../ui/NavFromShadcn";
import { MobileMenu } from "../ui/MobileMenu";
import Image from "next/image";
import { SocialIcons } from "../ui/SocialIcons";

export function Header() {
  return (
    <header className="w-full py-3 border-b bg-white sticky top-0 z-50">
      <div className="container px-4 flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="font-bold text-xl">
          <Image
            src="/images/Logo.webp"
            alt="Logo TCM"
            width={40}
            height={40}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavFromShadcn />
        </div>

        <div className="hidden lg:block">
          <SocialIcons />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
