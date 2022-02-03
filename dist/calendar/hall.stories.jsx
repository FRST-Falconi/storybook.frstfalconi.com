import React from 'react';
import Calendar from './calendar';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Hall/Calendar',
    component: Calendar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Calendar {...args}/>;
export const Loading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
    loading: true,
    short: false,
    trails: [],
    calendarEvents: [],
    activeEvent: null
};
export const Empty = Template.bind({});
Empty.args = {
    loading: false,
    short: false,
    trails: [],
    calendarEvents: [],
    activeEvent: null
};
export const ActiveSingleTrail = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ActiveSingleTrail.args = {
    loading: false,
    short: false,
    trails: [{
            id: 1,
            module_id: 1,
            name: "Atingindo Resultados Excepcionais",
            code: "MODC_P_VS"
        }],
    calendarEvents: {
        1: [
            { id: 1, title: 'Evento 00', day: '00', month: '00', hour: '17:00', weekday: '', present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: '01', month: '00', hour: '17:00', weekday: '', present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: '02', month: '00', hour: '17:00', weekday: '', present: false, completed: false, today: true },
            { id: 3, title: 'Evento 03', day: '03', month: '00', hour: '17:00', weekday: '', present: false, completed: false, today: false },
        ]
    },
    activeEvent: "https://google.com.br"
};
export const ActiveMultipleTrail = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ActiveMultipleTrail.args = {
    loading: false,
    short: true,
    trails: [{
            id: 1,
            module_id: 1,
            name: "Atingindo Resultados Excepcionais",
            code: "MODC_P_VS"
        }, {
            id: 2,
            module_id: 2,
            name: "O Líder Que Bate Metas",
            code: "MODC_P_LQBM"
        }],
    calendarEvents: {
        1: [
            { id: 1, title: 'Evento 00', day: '00', month: '00', hour: '17:00', weekday: '', present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: '01', month: '00', hour: '17:00', weekday: '', present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: '02', month: '00', hour: '17:00', weekday: '', present: false, completed: false, today: true },
            { id: 3, title: 'Evento 03', day: '03', month: '00', hour: '17:00', weekday: '', present: false, completed: false, today: false },
            { id: 3, title: 'Evento 04', day: '04', month: '00', hour: '17:00', weekday: '', present: false, completed: false, today: false },
            { id: 3, title: 'Evento 05', day: '05', month: '00', hour: '17:00', weekday: '', present: false, completed: false, today: false },
            { id: 3, title: 'Evento 06', day: '06', month: '00', hour: '17:00', weekday: '', present: false, completed: false, today: false },
        ],
        2: [
            { id: 1, title: 'Evento 00', day: '00', month: '00', hour: '17:00', weekday: '', present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: '01', month: '00', hour: '17:00', weekday: '', present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: '02', month: '00', hour: '17:00', weekday: '', present: false, completed: false, today: true },
            { id: 3, title: 'Evento 03', day: '03', month: '00', hour: '17:00', weekday: '', present: false, completed: false, today: false },
            { id: 3, title: 'Evento 04', day: '04', month: '00', hour: '17:00', weekday: '', present: false, completed: false, today: false },
        ]
    },
    activeEvent: "https://google.com.br"
};
