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
                {/* <Avatar>
                    <Link href="/">
                        <AvatarImage className="p-1 cursor-pointer text-gray-300 hover:opacity-50" src="/images/RG.svg" />
                        <AvatarFallback>RG</AvatarFallback>
                    </Link>
                </Avatar> */}

                <Link href="/" className=" text-sm fill-primary hover:opacity-50 dark:fill-white">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    zoomAndPan="magnify" 
                    viewBox="0 0 375 375" 
                    preserveAspectRatio="xMidYMid meet" 
                    width="35" 
                    height="35" 
                    version="1.0"
                    >
                        <defs>
                            <g/>
                        </defs>
                        <g  fill-opacity="1">
                            <g transform="translate(0.00650467, 272.1115)">
                                <g>
                                    <path d="M 111.375 0 L 72.65625 -70.28125 L 61.78125 -70.28125 L 61.78125 0 L 16.4375 0 L 16.4375 -186.15625 L 92.546875 -186.15625 C 107.222656 -186.15625 119.734375 -183.59375 130.078125 -178.46875 C 140.421875 -173.34375 148.15625 -166.316406 153.28125 -157.390625 C 158.40625 -148.460938 160.96875 -138.519531 160.96875 -127.5625 C 160.96875 -115.175781 157.472656 -104.125 150.484375 -94.40625 C 143.503906 -84.6875 133.207031 -77.789062 119.59375 -73.71875 L 162.5625 0 Z M 61.78125 -102.359375 L 89.90625 -102.359375 C 98.207031 -102.359375 104.4375 -104.390625 108.59375 -108.453125 C 112.75 -112.523438 114.828125 -118.273438 114.828125 -125.703125 C 114.828125 -132.773438 112.75 -138.34375 108.59375 -142.40625 C 104.4375 -146.46875 98.207031 -148.5 89.90625 -148.5 L 61.78125 -148.5 Z M 61.78125 -102.359375 "/>
                                </g>
                            </g>
                        </g>
                        <g  fill-opacity="1">
                            <g transform="translate(172.911741, 272.1115)">
                                <g>
                                    <path d="M 140.015625 -127.296875 C 136.660156 -133.484375 131.84375 -138.210938 125.5625 -141.484375 C 119.289062 -144.753906 111.910156 -146.390625 103.421875 -146.390625 C 88.742188 -146.390625 76.984375 -141.570312 68.140625 -131.9375 C 59.304688 -122.300781 54.890625 -109.4375 54.890625 -93.34375 C 54.890625 -76.195312 59.53125 -62.804688 68.8125 -53.171875 C 78.09375 -43.535156 90.867188 -38.71875 107.140625 -38.71875 C 118.273438 -38.71875 127.6875 -41.546875 135.375 -47.203125 C 143.0625 -52.859375 148.675781 -60.988281 152.21875 -71.59375 L 94.671875 -71.59375 L 94.671875 -105.015625 L 193.328125 -105.015625 L 193.328125 -62.84375 C 189.960938 -51.53125 184.257812 -41.007812 176.21875 -31.28125 C 168.175781 -21.5625 157.96875 -13.695312 145.59375 -7.6875 C 133.21875 -1.675781 119.25 1.328125 103.6875 1.328125 C 85.300781 1.328125 68.90625 -2.691406 54.5 -10.734375 C 40.09375 -18.785156 28.863281 -29.96875 20.8125 -44.28125 C 12.769531 -58.601562 8.75 -74.957031 8.75 -93.34375 C 8.75 -111.726562 12.769531 -128.125 20.8125 -142.53125 C 28.863281 -156.945312 40.046875 -168.175781 54.359375 -176.21875 C 68.679688 -184.257812 85.035156 -188.28125 103.421875 -188.28125 C 125.703125 -188.28125 144.488281 -182.890625 159.78125 -172.109375 C 175.070312 -161.328125 185.191406 -146.390625 190.140625 -127.296875 Z M 140.015625 -127.296875 "/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </Link>

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
                                            cn(`text-sm px-3 py-2 rounded border-none text-primary hover:bg-secondary`, 
                                            isActive ? 'bg-secondary' : '')}
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