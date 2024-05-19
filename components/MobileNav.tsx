import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { navLinks } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="sm:hidden flex items-center">
        <Sheet>
            <SheetTrigger className="hover:text-gray-400">
                <Menu />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-3xl">RG</SheetTitle>
                    <SheetDescription>
                        <ul className="flex flex-col gap-4 pt-14">
                        {navLinks.map((link) => (
                            <li key={link.href} className="cursor-pointer">
                                <Link href={link.href} legacyBehavior passHref>
                                    <p className="text-lg text-gray-600 hover:text-gray-800">
                                        {link.label}
                                    </p>
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

        {/* <DropdownMenu>
            <DropdownMenuTrigger>
                <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {navLinks.map((link) => (
                    <Link href={link.href} legacyBehavior passHref>
                        <DropdownMenuItem key={link.href}>{link.label}</DropdownMenuItem>
                    </Link>
                ))}
            </DropdownMenuContent>
        </DropdownMenu> */}

    </div>
  )
}

export default MobileNav