import React from 'react'

import Calendar from './calendar/index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Hall/Calendar',
    component: Calendar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Calendar {...args} />

export const Loading = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
    loading: true,
    short: false,
    trails: [],
    calendarEvents: [],
    activeEvent: null
}

export const Empty = Template.bind({})
Empty.args = {
    loading: false,
    short: false,
    trails: [],
    calendarEvents: [],
    activeEvent: null
}


export const ActiveSingleTrail = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ActiveSingleTrail.args = {
    loading: false,
    short: true,
    trails: [{
        id: 1,
        module_id: 1,
        name: "Atingindo Resultados Excepcionais",
        code: "MODC_P_VS"
    }],
    calendarEvents: {
        1: [
            { id: 1, title: 'Evento 00', day: 1, month: 0, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: 2, month: 1, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: 3, month: 2, hour: '17:00', weekday: 3, present: false, completed: false, today: true },
            { id: 3, title: 'Evento 03', day: 4, month: 3, hour: '17:00', weekday: 4, present: false, completed: false, today: false },
        ]
    },
    activeEvent: "https://google.com.br"
}

export const ActiveMultipleTrail = Template.bind({})
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
            { id: 1, title: 'Evento 00', day: 1, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: 2, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: 3, month: 1, hour: '17:00', weekday: 1, present: false, completed: false, today: true },
            { id: 3, title: 'Evento 03', day: 4, month: 1, hour: '17:00', weekday: 1, present: false, completed: false, today: false },
            { id: 3, title: 'Evento 04', day: 5, month: 1, hour: '17:00', weekday: 1, present: false, completed: false, today: false },
            { id: 3, title: 'Evento 05', day: 6, month: 1, hour: '17:00', weekday: 1, present: false, completed: false, today: false },
            { id: 3, title: 'Evento 06', day: 7, month: 1, hour: '17:00', weekday: 1, present: false, completed: false, today: false },
        ],
        2: [
            { id: 1, title: 'Evento 00', day: 1, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: 2, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: 3, month: 2, hour: '17:00', weekday: 2, present: false, completed: false, today: true },
            { id: 3, title: 'Evento 03', day: 4, month: 2, hour: '17:00', weekday: 2, present: false, completed: false, today: false },
            { id: 3, title: 'Evento 04', day: 31, month: 2, hour: '17:00', weekday: 2, present: false, completed: false, today: false },
        ]
    },
    activeEvent: "https://google.com.br"
}

export const NoMoreEvents = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoMoreEvents.args = {
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
            { id: 1, title: 'Evento 00', day: 1, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: 2, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: 3, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 3, title: 'Evento 03', day: 4, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 3, title: 'Evento 04', day: 5, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 3, title: 'Evento 05', day: 6, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 3, title: 'Evento 06', day: 7, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
        ],
        2: [
            { id: 1, title: 'Evento 00', day: 1, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: 2, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: 3, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 3, title: 'Evento 03', day: 4, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 3, title: 'Evento 04', day: 31, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
        ]
    },
    activeEvent: "https://google.com.br"
}