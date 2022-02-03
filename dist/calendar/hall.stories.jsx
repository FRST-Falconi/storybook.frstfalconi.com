"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveMultipleTrail = exports.ActiveSingleTrail = exports.Empty = exports.Loading = void 0;
const react_1 = require("react");
const calendar_1 = require("./calendar");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Hall/Calendar',
    component: calendar_1.default,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <calendar_1.default {...args}/>;
exports.Loading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Loading.args = {
    loading: true,
    short: false,
    trails: [],
    calendarEvents: [],
    activeEvent: null
};
exports.Empty = Template.bind({});
exports.Empty.args = {
    loading: false,
    short: false,
    trails: [],
    calendarEvents: [],
    activeEvent: null
};
exports.ActiveSingleTrail = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.ActiveSingleTrail.args = {
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
exports.ActiveMultipleTrail = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.ActiveMultipleTrail.args = {
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
