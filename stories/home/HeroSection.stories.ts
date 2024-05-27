import type { Meta, StoryObj } from '@storybook/react';
import HeroSectionComponent from './HeroSection';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof HeroSectionComponent> = {
    title: 'Home/HeroSection',
    component: HeroSectionComponent,
    parameters: {
      layout: "centered",
      backgrounds: {
        // default: "dark",
      },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeroSectionComponent>;

export const HeroSection: Story = {
  // render: () => <HeroSectionComponent />,
}

