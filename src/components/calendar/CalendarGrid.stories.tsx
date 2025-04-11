import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalendarGrid } from './CalendarGrid';

export default {
  title: 'Components/CalendarGrid',
  component: CalendarGrid,
} as Meta;

const Template: Story = (args) => <CalendarGrid {...args} />;

// Criar alguns eventos de exemplo
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);

const sampleEvents = [
  {
    id: '1',
    date: today,
    time: '11:00',
    title: 'Webinar do Cerrado',
    canAccess: true,
  },
  {
    id: '2',
    date: tomorrow,
    time: '13:00',
    title: 'Gravação de podcast',
    canAccess: true,
  },
  {
    id: '3',
    date: nextWeek,
    time: '15:00',
    title: 'Mentoria',
    canAccess: true,
  },
];

export const Default = Template.bind({});
Default.args = {
  onDateSelect: (date) => console.log('Data selecionada:', date),
};

export const WithEvents = Template.bind({});
WithEvents.args = {
  events: sampleEvents,
  onDateSelect: (date) => console.log('Data selecionada:', date),
};

export const WithSelectedDate = Template.bind({});
WithSelectedDate.args = {
  selectedDate: new Date(2025, 4, 18),
  events: sampleEvents,
  onDateSelect: (date) => console.log('Data selecionada:', date),
}; 