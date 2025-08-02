// components/Header.tsx
import Link from "next/link";
import { Menu, ChevronDown, Facebook, Instagram } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { DynamicNavigationMenu } from "./DynamicNavigationMenu";
import { NavFromShadcn } from "./NavFromShadcn";
import { MobileMenu } from "./MobileMenu";

type MenuItem = {
  title: string;
  href?: string; // Wenn vorhanden, dann kein Dropdown
  children?: { text: string; href: string }[]; // Wenn vorhanden, Dropdown
};

const menuItems: MenuItem[] = [
  { title: "Docs", href: "/docs" },
  {
    title: "Simple",
    children: [
      { text: "Components", href: "#" },
      { text: "Documentation", href: "#" },
      { text: "Blocks", href: "#" },
    ],
  },
  { title: "About", href: "/about" }, // Beispiel für weiteren Link ohne Dropdown
  {
    title: "Simple",
    children: [
      { text: "Components", href: "#" },
      { text: "Documentation", href: "#" },
      { text: "Blocks", href: "#" },
    ],
  },
];

export function Header() {
  return (
    <header className="w-full px-4 py-3 border-b flex justify-between items-center bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="font-bold text-xl">MeinLogo</div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <NavFromShadcn />
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex gap-3">
        <Button variant="ghost" size="icon">
          <Facebook className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Instagram className="w-5 h-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
}
