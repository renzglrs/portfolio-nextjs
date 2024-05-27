"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/src/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { navLinks } from "@/constants";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";




const Navbar = () => {
    return (
        <>
            {/* Navigation Links */}
            <NavigationMenu className="container max-w-[700px] pt-8 md:pt-12 justify-between">
                {/* Avatar/Logo */}
                <Avatar>
                    <Link href="/">
                        <AvatarImage className="p-1 cursor-pointer fill-green-200" src="/images/RG.svg" />
                        <AvatarFallback>RG</AvatarFallback>
                    </Link>
                </Avatar>

                <NavigationMenuList className="flex gap-5 max-sm:hidden">
                    {navLinks.map((link) => (
                        <NavigationMenuItem key={link.href}>
                            <Link href={link.href} legacyBehavior passHref>
                                {/* To fix: text color theme-- */}
                                <NavigationMenuLink className="text-sm text-gray-600 hover:text-gray-800 dark:text-white">
                                    {link.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>

                <div className="flex gap-4 items-center justify-center">
                    {/* Theme Switcher */}
                    <ThemeSwitcher />

                    {/* Mobile Navigation */}
                    <MobileNav />
                </div>

            </NavigationMenu>
        </>
    )
}

export default Navbar;