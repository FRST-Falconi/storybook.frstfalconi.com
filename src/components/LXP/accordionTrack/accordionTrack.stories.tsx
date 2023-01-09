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

const item = {
  id: v4(),
  name: 'Curso de Bitcoin',
  disabled: false,
  src: 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
}

const item2 = {
  id: v4(),
  name: 'Curso de Liderança',
  disabled: false,
  src: 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
}

const item3 = {
  id: v4(),
  name: 'Curso de Negociação',
  disabled: false,
  src: 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
}

const item4 = {
  id: v4(),
  name: 'Curso de Vendas Curso de Vendas ',
  disabled: true,
  src: 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
}

const item5 = {
  id: v4(),
  name: 'Curso de Letras',
  disabled: true,
  src: 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
}
  
const item6 = {
  id: v4(),
  name: 'Curso de Teste',
  disabled: true,
  src: 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
}

var trails = [
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
    TrailName: 'Liderança que inspira ',
    items: [],
    ativo: false,
    show: true,
  },  
  
] 

console.log(trails)

export const Opened = Template.bind({})
Opened.args = {
    onNewTrail: (id) => {alert(`Indice para adiconar: ${id}`)},
    handleChange: (trailsChange) => { 
      trails = trailsChange
    },    
    handleEditCourse: (id) => {alert(`Selected id: ${id}`)},  
    handlePopOverMove: (id) => {alert(`Move id: ${id}`)},
    handlePopOverEdit: (id) => {alert(`Content Edit id: ${id}`)},
    handlePopOverDelete: (id) => {alert(`Content Deleted id: ${id}`)},

    handlePopOverTrailEdit: (id) => {alert(`Trail Edit id: ${id}`)},
    handlePopOverTrailDelete: (id) => {alert(`Trail Deleted id: ${id}`)},

    onSetNameTrail: (name, id) => { alert(`TrailName: ${id} ${name}`) },
    handlePopOverDuplicate: (id) => {alert(`Selected id: ${id}`)},
     
    trailsData: trails,
    textMeusConteudos: "My Contents",
    textTotalDe: "Total of",
    textRegistros: "records",
    textMinhasTrihas: "My tracks",
    txtAtivarCurso: "Activate trail",
    txtCriarNovoCurso: "Create new",
    txtCriarNovoCurso2: "content",
    txtPopOverEditContent: "Edit content",
    txtPopOverMoveToTrails: "Move to Trails",
    txtPopOverDeleteContent:"Delete content",
    txtTrailsPopOverEdit: "Editar nome da trilha",
    txtTrailsPopOverDuplicar: "Duplicar trilha",
    txtTrailsPopOverDelete: "Excluir trilha",
    txtPlacerolderInputNameTrail: 'Enter track name'
}


