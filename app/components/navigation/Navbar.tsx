"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileNav from "./MobileNav";
import ThemeSwitcher from "../ThemeSwitcher";

const Navbar: React.FC = () => {
    const pathname = usePathname();

    return (
        <>
            {/* Navigation Links */}
            <NavigationMenu className="container max-w-[700px] pt-8 md:pt-12 justify-between">
                {/* Avatar/Logo */}
                <Avatar>
                    <Link href="/">
                        <AvatarImage className="p-1 cursor-pointer hover:opacity-50" src="/images/RG.svg" />
                        <AvatarFallback>RG</AvatarFallback>
                    </Link>
                </Avatar>

                {/* Navmenu */}
                <NavigationMenuList className="flex max-sm:hidden">
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.route || pathname?.startsWith(`${link.route}/ `);
                        
                        return (
                            <NavigationMenuItem key={index}>
                                <Link href={link.route} legacyBehavior passHref>
                                    {/* To fix: text color theme-- */}
                                    <NavigationMenuLink 
                                        className={ 
                                            cn(`text-sm px-3 py-2 rounded border-none text-gray-800 hover:bg-gray-100 dark:text-white`, 
                                            isActive ? 'bg-gray-100' : '')}
                                    >
                                        {link.label}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        )
                    })}
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