import type { Meta, StoryObj } from '@storybook/react';

import SkillsSection from '@/src/components/skills/SkillsSection';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SkillsSection> = {
    title: 'Home/SkillsSection',
    component: SkillsSection,
    parameters: {
        layout: "centered",
        background: "dark",
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkillsSection>;

export const Primary: Story = {};