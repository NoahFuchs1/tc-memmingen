import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Facebook, Instagram } from "lucide-react"; // Icons Beispiel
import { menuItems } from "./menuItems"; // Pfad anpassen

export function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col max-h-screen max-w-xs p-6 bg-white"
        >
          {/* Scrollbarer Bereich für Menüitems */}
          <div className="flex-grow overflow-y-auto space-y-6">
            {menuItems.map((item) => (
              <div key={item.title}>
                {/* Item mit direktem Link */}
                {item.href && !item.children && (
                  <Link
                    href={item.href}
                    className="block font-semibold text-lg mb-2 text-gray-900 hover:underline"
                  >
                    {item.title}
                  </Link>
                )}

                {/* Item mit Dropdown/Children */}
                {item.children && (
                  <>
                    <div className="font-semibold mb-1">{item.title}</div>
                    <ul className="pl-4 space-y-1">
                      {item.children.map((child, index) => (
                        <li key={`${child.href}-${index}`}>
                          <Link
                            href={child.href}
                            className="text-sm text-gray-700 hover:underline block"
                          >
                            {child.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Social Icons unten fixiert mit Abstand */}
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <Button variant="ghost" size="icon" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
