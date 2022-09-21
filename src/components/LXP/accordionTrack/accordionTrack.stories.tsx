import React from 'react'

import AccordionTrack from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/AccordionTrack',
    component: AccordionTrack,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AccordionTrack {...args} />

export const ClosedDefault = Template.bind({})
ClosedDefault.args = {
    variant: 'closedDefault',
    TrailName: 'Nome da trilha',
    handleClickSelect: () => { alert('Up ? Up : Down') },
    handleClickContent: () => { alert('Click conteúdo') },
    handleChangeCheck: (checkedValue) => { console.log(`curso ativado=${checkedValue}`)}    
}

export const Opened = Template.bind({})
Opened.args = {
    variant: 'opened',
    TrailName: 'Nome da trilha',
    handleClickSelect: () => { alert('Up ? Up : Down') },
    handleClickContent: () => { alert('Click conteúdo') },
    handleChangeCheck: (checkedValue) => { console.log(`curso ativado=${checkedValue}`)},
    ObjectsCard: [
        {                       
            title: 'Curso Btcoins',
            variant: 'default'            
        },
        {            
            title: 'Curso Btcoins',
            variant: 'default'
        },
        {            
            title: 'Curso Btcoins',
            variant: 'default'
        },
        {            
            title: 'Curso Btcoins',
            variant: 'default'
        },
        {            
            title: 'Curso Btcoins',
            variant: 'default'
        },
        {
            title: 'Curso Btcoins',
            variant: 'default'
        },
        {            
            title: 'Curso Btcoins',
            variant: 'default'
        },
        {            
            title: 'Curso Btcoins',
            variant: 'default'
        },
        {            
            title: 'Curso Btcoins',
            variant: 'default'
        },
        {
            title: 'Curso Btcoins',
            variant: 'default'
        },
    ]
}

