import React from 'react'
import { v4 } from 'uuid'
import AccordionTrackList from './accordionTrackList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/AccordionTrack',
    component: AccordionTrackList,    
    textMeusConteudos: "Meus Conteúdos",
    textTotalDe: "Total de",
    textRegistros: "registros",
    textMinhasTrihas: "Minhas Trilhas",
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AccordionTrackList {...args} />

const item = {
  id: v4(),
  name: 'Curso de Bitcoin',
  disabled: false,
}

const item2 = {
  id: v4(),
  name: 'Curso de Liderança',
  disabled: false,
}

const item3 = {
  id: v4(),
  name: 'Curso de Negociação',
  disabled: false,
}

const item4 = {
  id: v4(),
  name: 'Curso de Vendas',
  disabled: true,
}

const item5 = {
  id: v4(),
  name: 'Curso de Letras',
  disabled: true,
}
  
const item6 = {
  id: v4(),
  name: 'Curso de Teste',
  disabled: true,
}


const trails = [
  {  
    id: v4(),
    TrailName: 'Sem Trilhas',
    items: [ item4, item5, ],
    ativo: true,
    show: true,
  },
  {
    id: v4(),
    TrailName: 'O Lider que bate Metas',
    items: [item, item2, item3,],
    ativo: true,
    show: true,
  },
  {
    id: v4(),
    TrailName: 'Liderança que inspira',
    items: [],
    ativo: false,
    show: true,
  },  
  
]

  

export const Opened = Template.bind({})
Opened.args = {
    onNewTrail: (id) => {alert(`Indice para adiconar: ${id}`)},
    handleChange: (trails) => { console.log('Teve alteração: ', trails) },    
    trailsData: trails
}

