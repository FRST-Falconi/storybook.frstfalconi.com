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
Loading.args = {
    loading: true,
    short: false,
    trails: [],
}

export const Empty = Template.bind({})
Empty.args = {
    loading: false,
    short: false,
    showFullPageAction: () => { alert('Redirecting to Fullpage') },
    trails: [],
}


export const ActiveSingle = Template.bind({})
ActiveSingle.args = {
    loading: false,
    short: true,
    showFullPageAction: () => { alert('Redirecting to Fullpage') },
    trails: [{
        id: 1,
        moduleID: 1,
        name: "Atingindo Resultados Excepcionais",
        nextEvent: { weekday: 5, hour: '17:00' },
        joinEventAction: () => { alert('Join event action') },
        events: [
            { id: 0, title: 'Evento 00', day: 1, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: 2, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: 3, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 3, title: 'Evento 03', day: 4, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 4, title: 'Evento 04', day: 5, month: 1, hour: '17:00', weekday: 1, present: false, completed: false, today: true },
            { id: 5, title: 'Evento 05', day: 6, month: 1, hour: '17:00', weekday: 1, present: false, completed: false, today: false },
            { id: 6, title: 'Evento 06', day: 7, month: 1, hour: '17:00', weekday: 1, present: false, completed: false, today: false },
        ],
    }],
}

export const ActiveMultiple = Template.bind({})
ActiveMultiple.args = {
    loading: false,
    short: true,
    showFullPageAction: () => { alert('Redirecting to Fullpage') },
    trails: [{
        id: 1,
        moduleID: 1,
        name: "Atingindo Resultados Excepcionais",
        events: [
            { id: 0, title: 'Evento 00', day: 1, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: 2, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: 3, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 3, title: 'Evento 03', day: 4, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 4, title: 'Evento 04', day: 5, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 5, title: 'Evento 05', day: 6, month: 1, hour: '17:00', weekday: 1, present: false, completed: false, today: true },
            { id: 6, title: 'Evento 06', day: 7, month: 1, hour: '17:00', weekday: 1, present: false, completed: false, today: false },
        ],
        nextEvent: { weekday: 5, hour: '17:00' },
        joinEventAction: () => { alert('Join event 5 action') },
    }, {
        id: 2,
        moduleID: 2,
        name: "O Líder Que Bate Metas",
        events: [
            { id: 0, title: 'Evento 00', day: 1, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: 2, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: 3, month: 2, hour: '17:00', weekday: 2, present: false, completed: false, today: true },
            { id: 3, title: 'Evento 03', day: 4, month: 2, hour: '17:00', weekday: 2, present: false, completed: false, today: false },
            { id: 4, title: 'Evento 04', day: 31, month: 2, hour: '17:00', weekday: 2, present: false, completed: false, today: false },
        ],
        nextEvent: { weekday: 3, hour: '17:00' },
        joinEventAction: () => { alert('Join event 2 action') },
    }],
}

export const NoEventsSingle = Template.bind({})
NoEventsSingle.args = {
    loading: false,
    short: true,
    showFullPageAction: () => { alert('Redirecting to Fullpage') },
    trails: [{
        id: 1,
        moduleID: 1,
        name: "Atingindo Resultados Excepcionais",
        nextEvent: null,
        joinEventAction: null,
        events: [
            { id: 0, title: 'Evento 00', day: 1, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: 2, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: 3, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 3, title: 'Evento 03', day: 4, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 4, title: 'Evento 04', day: 5, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 5, title: 'Evento 05', day: 6, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 6, title: 'Evento 06', day: 7, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 7, title: 'Evento 07', day: 7, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 8, title: 'Evento 08', day: 8, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 9, title: 'Evento 09', day: 9, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 10, title: 'Evento 10', day: 10, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 11, title: 'Evento 11', day: 11, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 12, title: 'Evento 12', day: 12, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
        ],
    }],
}

export const NoEventsMultiple = Template.bind({})
NoEventsMultiple.args = {
    loading: false,
    short: true,
    showFullPageAction: () => { alert('Redirecting to Fullpage') },
    trails: [{
        id: 1,
        moduleID: 1,
        name: "Atingindo Resultados Excepcionais",
        nextEvent: null,
        joinEventAction: null,
        events: [
            { id: 0, title: 'Evento 00', day: 1, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: 2, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: 3, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 3, title: 'Evento 03', day: 4, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 4, title: 'Evento 04', day: 5, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 5, title: 'Evento 05', day: 6, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
            { id: 6, title: 'Evento 06', day: 7, month: 1, hour: '17:00', weekday: 1, present: false, completed: true, today: false },
        ],
    }, {
        id: 2,
        moduleID: 2,
        name: "O Líder Que Bate Metas",
        nextEvent: null,
        joinEventAction: null,
        events: [
            { id: 0, title: 'Evento 00', day: 1, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 1, title: 'Evento 01', day: 2, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 2, title: 'Evento 02', day: 3, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 3, title: 'Evento 03', day: 4, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
            { id: 4, title: 'Evento 04', day: 31, month: 2, hour: '17:00', weekday: 2, present: false, completed: true, today: false },
        ],
    }],
}