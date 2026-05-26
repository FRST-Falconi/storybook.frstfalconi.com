import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CalendarFrst from './index';

const meta: Meta<typeof CalendarFrst> = {
  title: 'Components/CalendarFrst',
  component: CalendarFrst,
  argTypes: {
    darkMode: {
      control: 'boolean',
      description: 'Ativa o modo escuro se true, claro se false',
      defaultValue: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof CalendarFrst>;

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
