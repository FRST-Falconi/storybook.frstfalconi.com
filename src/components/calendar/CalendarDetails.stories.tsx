import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalendarDetails } from './CalendarDetails';

export default {
  title: 'Components/CalendarDetails',
  component: CalendarDetails,
} as Meta;

const Template: Story = (args) => <CalendarDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedDate: new Date(2025, 4, 18), // 18 de Maio de 2025
  periods: {
    morning: [
      {
        id: '1',
        time: '11:00',
        title: 'Webinar do Cerrado',
        canAccess: true,
      },
    ],
    afternoon: [
      {
        id: '2',
        time: '13:00',
        title: 'Gravação de podcast ao vivo com Randy Calzoni',
        canAccess: true,
      },
      {
        id: '3',
        time: '13:30',
        title: 'Oficina de desafios',
        canAccess: false,
      },
      {
        id: '4',
        time: '16:00',
        title: 'Mentoria com Lívia Curtis',
        canAccess: true,
      },
      {
        id: '5',
        time: '17:00',
        title: 'Simulação de Pitch',
        canAccess: true,
      },
    ],
    night: [
      {
        id: '6',
        time: '19:00',
        title: 'Aula de Softskills com Maria Herwitz',
        canAccess: true,
      },
      {
        id: '7',
        time: '17:00',
        title: 'Simulação de Pitch',
        canAccess: false,
      },
    ],
  },
  onEventAccess: (event) => console.log('Acessar evento:', event),
  onEventDelete: (event) => console.log('Deletar evento:', event),
}; 