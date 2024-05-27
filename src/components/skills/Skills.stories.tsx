import type { Meta, StoryObj } from '@storybook/react';
import SkillIcon from './SkillIcon';
import { IoLogoJavascript } from "react-icons/io5";


const meta: Meta<typeof SkillIcon> = {
    title: "Skills/SkillIcon",
    component: SkillIcon,
    parameters: {
        layout: "centered",
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkillIcon>;

export const Primary: Story = {
  args: {
    color: "hover:opacity-50",
    icon: <IoLogoJavascript />,
  },
};