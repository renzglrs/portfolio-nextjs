// import { Secondary } from './../../node_modules/@storybook/react/template/cli/ts-3-8/Button.stories';
import { ReactNode } from '../../../node_modules/@mdx-js/react/lib';
import { IconType } from 'react-icons/lib';
import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '@/app/lib/utils';
import { BsGithub } from "react-icons/bs";
import CardTemplate from './CardTemplate';



//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CardTemplate> = {
    title: 'Home/Component/CardTemplate',
    component: CardTemplate,
    parameters: {
        layout: "centered",
        background: "dark",
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardTemplate>;

export const Primary: Story = {
    args: {
        className: "row-span-1 col-span-2",
        backgroundColor: "bg-[#1d1d1d]"
    }
};

