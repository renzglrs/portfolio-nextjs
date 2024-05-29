import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './HeroSection';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof HeroSection> = {
    title: 'Home/Section/HeroSection',
    component: HeroSection,
    parameters: {
      layout: "centered",
      backgrounds: {
        // default: "dark",
      },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  // render: () => <HeroSectionComponent />,
}

