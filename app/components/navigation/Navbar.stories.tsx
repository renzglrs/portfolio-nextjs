import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { ThemeProvider } from "@/app/components/theme-provider";
import { navLinks } from "@/constants";
import {
  NavigationMenu,
} from "@/app/components/ui/navigation-menu";


const meta: Meta<typeof Navbar> = {
    title: "Navigation/Navbar",
    component: Navbar,
    parameters: {
        // layout: "centered",
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    render: () => (
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
            <Navbar />
        </ThemeProvider>
    )
};

export const Grouped: Story = {
    render: () => ( 
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
            <Navbar />
            <Navbar />
            <Navbar />
        </ThemeProvider>
    )
}

