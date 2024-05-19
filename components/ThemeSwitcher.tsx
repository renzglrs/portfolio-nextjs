import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const ThemeSwitcher = () => {
  const { setTheme } = useTheme()

  return (
    // <DropdownMenu>
    //     <DropdownMenuTrigger>
    //         <Sun className="text-gray-600 text-sm cursor-pointer hover:text-gray-400" size={18} />
    //     </DropdownMenuTrigger>
    //     <DropdownMenuContent>
    //         {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //         <DropdownMenuSeparator /> */}
    //         <DropdownMenuItem>Light</DropdownMenuItem>
    //         <DropdownMenuItem>Dark</DropdownMenuItem>
    //         <DropdownMenuItem>Automatic</DropdownMenuItem>
    //     </DropdownMenuContent>
    // </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-none focus:ring-0 dark:focus:ring-offset-2">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default ThemeSwitcher