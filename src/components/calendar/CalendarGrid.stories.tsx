import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalendarGrid } from './CalendarGrid';

export default {
  title: 'Components/CalendarGrid',
  component: CalendarGrid,
} as Meta;

const Template: Story = (args) => <CalendarGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  onDateSelect: (date) => console.log('Data selecionada:', date),
};

export const WithSelectedDate = Template.bind({});
WithSelectedDate.args = {
  selectedDate: new Date(2025, 4, 18), // 18 de Maio de 2025
  onDateSelect: (date) => console.log('Data selecionada:', date),
}; 