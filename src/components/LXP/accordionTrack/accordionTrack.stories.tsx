import React from 'react'
import { v4 } from 'uuid'
import AccordionTrackList from './accordionTrackList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/AccordionTrack',
    component: AccordionTrackList,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AccordionTrackList {...args} />

export const ClosedDefault = Template.bind({})
ClosedDefault.args = {
    variant: 'closedDefault',
    TrailName: 'Nome da trilha',
    handleClickSelect: () => { alert('Up ? Up : Down') },
    handleClickContent: () => { alert('Click conteúdo') },
    handleChangeCheck: (checkedValue) => { console.log(`curso ativado=${checkedValue}`)}    
}

const item = {
  id: `0`,
  title: 'Curso de Bitcoin',
}

const item2 = {
  id: `1`,
  title: 'Curso de Liderança',
}

const item3 = {
  id: `2`,
  title: 'Curso de Negociação',
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
          id: v4(),
          title: 'Trilha 1',
          items: [item, item2, item3],
          ativo: true
        },        
    ]
}

