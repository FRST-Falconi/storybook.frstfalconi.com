import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Calendar from './index';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    darkMode: {
      control: 'boolean',
      description: 'Ativa o modo escuro se true, claro se false',
      defaultValue: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const DarkMode: Story = {
  args: {
    darkMode: true,
  },
};

export const LightMode: Story = {
  args: {
    darkMode: false,
  },
};
