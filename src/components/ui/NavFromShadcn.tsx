"use client";

import * as React from "react";
import Link from "next/link";
import { menuItems } from "./menuItems";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavFromShadcn() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {menuItems.map((item, index) =>
          item.children ? (
            <NavigationMenuItem key={`dropdown-${index}-${item.title}`}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  {item.children.map((child, childIndex) => (
                    <li key={`child-${childIndex}-${child.href}`}>
                      <NavigationMenuLink asChild>
                        {getLink(
                          child.href,
                          child.text,
                          child.isNewTab ?? false
                        )}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={`link-${index}-${item.title}`}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                {getLink(item.href!, item.title, false)}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );

  function getLink(link: string, title: string, isNewTab: boolean) {
    return (
      <Link
        href={link}
        target={isNewTab ? "_blank" : "_self"}
        rel={isNewTab ? "noopener noreferrer" : undefined}
      >
        {title}
      </Link>
    );
  }
}
