import { ReactNode } from './../../node_modules/@mdx-js/react/lib/index.d';
import { IconType } from 'react-icons/lib';
import type { Meta, StoryObj } from '@storybook/react';
import CardTemplateComponent from './CardTemplate';
import { cn } from '@/lib/utils';
import { BsGithub } from "react-icons/bs";



//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CardTemplateComponent> = {
    title: 'Home/CardTemplate',
    component: CardTemplateComponent,
    parameters: {
        layout: "centered",
        background: "dark",
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardTemplateComponent>;

export const Primary: Story = {
    args: {
        className: "row-span-1 col-span-2",
        backgroundColor: "bg-[#1d1d1d]"
    }
};

