"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type MenuItem = {
  title: string;
  href?: string;
  description?: string;
  items?: { title: string; href: string; description?: string }[];
};

const menu: MenuItem[] = [
  {
    title: "Produkte",
    items: [
      {
        title: "Vitamin D3",
        href: "/produkte/vitamin-d3",
        description: "Für dein Immunsystem",
      },
      {
        title: "Omega 3",
        href: "/produkte/omega-3",
        description: "Für dein Herz-Kreislauf-System",
      },
    ],
  },
  {
    title: "Produkte",
    items: [
      {
        title: "Vitamin D3",
        href: "/produkte/vitamin-d3",
        description: "Für dein Immunsystem",
      },
      {
        title: "Omega 3",
        href: "/produkte/omega-3",
        description: "Für dein Herz-Kreislauf-System",
      },
    ],
  },
  {
    title: "Produkte",
    items: [
      {
        title: "Vitamin D3",
        href: "/produkte/vitamin-d3",
        description: "Für dein Immunsystem",
      },
      {
        title: "Omega 3",
        href: "/produkte/omega-3",
        description: "Für dein Herz-Kreislauf-System",
      },
    ],
  },
  {
    title: "Produkte",
    items: [
      {
        title: "Vitamin D3",
        href: "/produkte/vitamin-d3",
        description: "Für dein Immunsystem",
      },
      {
        title: "Omega 3",
        href: "/produkte/omega-3",
        description: "Für dein Herz-Kreislauf-System",
      },
    ],
  },
  {
    title: "Über uns",
    items: [
      {
        title: "Unsere Vision",
        href: "/ueber-uns/vision",
        description: "Warum wir tun, was wir tun",
      },
      {
        title: "Team",
        href: "/ueber-uns/team",
        description: "Lerne uns kennen",
      },
    ],
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
];

export function DynamicNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu.map((m) => (
          <NavigationMenuItem key={m.title}>
            {m.items ? (
              <>
                <NavigationMenuTrigger>{m.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-[400px] md:w-[500px] lg:grid-cols-2">
                    {m.items.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={m.href!}
                  className="px-4 py-2 text-sm font-medium hover:underline"
                >
                  {m.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
}: {
  title: string;
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none rounded-md p-3 leading-none no-underline transition-colors hover:bg-gray-100"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="text-muted-foreground mt-1 text-sm leading-snug">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
