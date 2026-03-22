"use client";

import { ModeToggle } from "@repo/design-system/components/mode-toggle";
import { Button } from "@repo/design-system/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@repo/design-system/components/ui/navigation-menu";
import type { Dictionary } from "@repo/internationalization";
import { Menu, MoveRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "./language-switcher";

type HeaderProps = {
  appUrl: string;
  dictionary: Dictionary;
};

export const Header = ({ appUrl, dictionary }: HeaderProps) => {
  const navigationItems = [
    {
      title: dictionary.web.header.home,
      href: "/",
    },
    {
      title: dictionary.web.header.shop,
      href: "/pricing",
    },
    {
      title: dictionary.web.header.aboutUs,
      href: "/contact",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 z-40 w-full border-b bg-background">
      <div className="container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-3">
        <div className="hidden flex-row items-center justify-start gap-6 lg:flex">
          <Link className="flex items-center gap-2" href="/">
            <svg
              className="-translate-y-[0.5px] h-[18px] w-[18px] fill-current"
              fill="none"
              height="22"
              viewBox="0 0 235 203"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Vercel</title>
              <path
                d="M117.082 0L234.164 202.794H0L117.082 0Z"
                fill="currentColor"
              />
            </svg>
            <p className="whitespace-nowrap font-semibold">next-forge</p>
          </Link>
          <NavigationMenu className="flex items-start justify-start">
            <NavigationMenuList className="flex flex-row justify-start gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Button asChild variant="ghost">
                      <Link href={item.href}>{item.title}</Link>
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 lg:hidden">
          <div className="flex items-center gap-2">
            <svg
              className="-translate-y-[0.5px] h-[18px] w-[18px] fill-current"
              fill="none"
              height="22"
              viewBox="0 0 235 203"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Vercel</title>
              <path
                d="M117.082 0L234.164 202.794H0L117.082 0Z"
                fill="currentColor"
              />
            </svg>
            <p className="whitespace-nowrap font-semibold">next-forge</p>
          </div>
        </div>
        <div className="flex w-full justify-end gap-4 lg:col-start-3 lg:w-auto">
          <div className="hidden md:inline">
            <LanguageSwitcher />
          </div>
          <div className="hidden md:inline">
            <ModeToggle />
          </div>
          <Button asChild className="hidden md:inline" variant="outline">
            <Link href={`${appUrl}/sign-in`}>
              {dictionary.web.header.signIn}
            </Link>
          </Button>
          <Button asChild>
            <Link href="#">{dictionary.web.header.cart}</Link>
          </Button>
        </div>
        <div className="flex w-12 shrink items-end justify-end lg:hidden">
          <Button onClick={() => setOpen(!isOpen)} variant="ghost">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          {isOpen && (
            <div className="container absolute top-20 right-0 flex w-full flex-col gap-8 border-t bg-background py-4 shadow-lg">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    <Link className="flex items-center justify-between" href={item.href}>
                      <span className="text-lg">{item.title}</span>
                      <MoveRight className="h-4 w-4 stroke-1 text-muted-foreground" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
