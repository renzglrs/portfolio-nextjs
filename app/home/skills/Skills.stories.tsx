import type { Meta, StoryObj } from '@storybook/react';
import SkillIcon from './SkillIcon';
import { IoLogoJavascript } from "react-icons/io5";

const meta: Meta<typeof SkillIcon> = {
    title: "Home/Section/Skills Section/SkillIcon",
    component: SkillIcon,
    parameters: {
        layout: "centered",
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'radio' },
            options: ['hover:opacity-50', 'hover:text-red-400', 'hover:text-blue-400']
        }
    }
};

export default meta;
type Story = StoryObj<typeof SkillIcon>;

export const Default: Story = {
  args: {
    color: "hover:opacity-50",
    icon: <IoLogoJavascript />,
  },
};

export const States: Story = {
    render: () => (
        <>
            <SkillIcon icon={<IoLogoJavascript />} />
            <SkillIcon color={"opacity-50"} icon={<IoLogoJavascript />} />
        </>
    )
};