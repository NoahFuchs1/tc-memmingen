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

const menu = [
  {
    title: "Produkte",
    items: ["Supplemente", "Pakete", "Bestseller"],
  },
  {
    title: "Über uns",
    items: ["Philosophie", "Team", "Kundenmeinungen"],
  },
  {
    title: "Wissen",
    items: ["Blog", "FAQ", "Glossar"],
  },
  {
    title: "Kontakt",
    items: ["Support", "Live-Chat", "Telefon"],
  },
  {
    title: "Login",
    items: ["Konto", "Registrieren", "Passwort"],
  },
];

export function Header() {
  return (
    <header className="w-full px-4 py-3 border-b flex justify-between items-center bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="font-bold text-xl">MeinLogo</div>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {menu.map((m) => (
            <NavigationMenuItem className="relative" key={m.title}>
              <NavigationMenuTrigger>{m.title}</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute top-full left-0 mt-1 bg-white p-4 rounded-md shadow-lg z-50">
                <ul className="grid gap-1 p-1">
                  {m.items.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="block px-2 py-1 hover:bg-gray-100 rounded"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

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
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="mt-4 space-y-4">
              {menu.map((m) => (
                <div key={m.title}>
                  <div className="font-semibold mb-1">{m.title}</div>
                  <ul className="pl-2 space-y-1">
                    {m.items.map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="text-sm text-gray-700 hover:underline"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex gap-4 pt-4">
                <Button variant="ghost" size="icon">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
