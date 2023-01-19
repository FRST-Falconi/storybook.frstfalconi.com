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

/// Mesmo payload da API do LXP
const courses = [
{
   "id":63,
   "uuid":"1b7179d4-b264-44ea-ae09-8c8b38994a4d",
   "title":"Curso de HTML 5",
   "language":"pt-br",
   "desc":"Description content",
   "tags":{
      "custom":"#tag",
      "category":[
         "Gestão",
         "Liderança"
      ]
   },
   "settings":{
      "cover_full_url":"",
      "cover_thumb_url":"",
      "cover_video_url":""
   },
   "excluded":false,
   "private":false,
   "active":true,
   "active_individual":true,
   "channel":104
},
{
   "id":82,
   "uuid":"63552d66-468e-4c44-87f8-7dca992d9dd9",
   "title":"conteúdo de teste",
   "language":"pt-br",
   "desc":"descrição",
   "tags":{
      "custom":"#tags",
      "category":[
         "Gestão"
      ]
   },
   "settings":{
      "cover_full_url":"https://lxp-cdn.dev.frstfalconi.cloud/yin-yang-o-que-e-e-como-usa-lo-para-garantir-o-bem-estar-fisico-e-mental.png",
      "cover_thumb_url":"https://lxp-cdn.dev.frstfalconi.cloud/yin-yang-o-que-e-e-como-usa-lo-para-garantir-o-bem-estar-fisico-e-mental.png",
      "cover_video_url":""
   },
   "excluded":false,
   "private":false,
   "active":true,
   "active_individual":false,
   "channel":104
},
{
   "id":87,
   "uuid":"89f06dc7-82b7-475f-aae0-f3d6b02bc9dc",
   "title":"Conteúdo para deletar",
   "language":"pt-br",
   "desc":"teste",
   "tags":{
      "custom":"#a",
      "category":[
         "Gestão"
      ]
   },
   "settings":{
      "cover_full_url":"",
      "cover_thumb_url":"",
      "cover_video_url":""
   },
   "excluded":false,
   "private":false,
   "active":false,
   "active_individual":false,
   "channel":104
}
]

var trailCourse = [
  {
    "id": 174,
    "uuid": "10e6c506-9d66-4312-bda6-3552de5c4a56",
    "name": "O Líder que bate Metas",
    "excluded": false,
    "active": true,
    "channel": 110,
    "trail_course": [
      {
        "id":32,
        "trail_id":174,
        "course":{
            "id":44,
            "uuid":"ff58113f-9cf0-4b65-873c-68bd7624af48",
            "title":"Como resolver problemas",
            "language":"pt-br",
            "desc":"Test description",
            "tags":{
              "custom":"",
              "category":[
                
              ]
            },
            "settings":{
              "cover_full_url": 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
              "cover_thumb_url": 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
              "cover_video_url": 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
            },
            "excluded":true,
            "private":true,
            "active":true,
            "active_individual":false,
            "channel":104
        },
        "course_id":75,
        "order":0
      },
      {
        "id":33,
        "trail_id":174,
        "course":{
            "id":32,
            "uuid":"ff58113f-9cf0-4b65-873c-68bd7624af48",
            "title":"Planejamento Estratégico",
            "language":"pt-br",
            "desc":"Test description",
            "tags":{
              "custom":"",
              "category":[
                
              ]
            },
            "settings":{
              "cover_full_url": 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
              "cover_thumb_url": 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
              "cover_video_url": 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
            },
            "excluded":true,
            "private":true,
            "active":true,
            "active_individual":false,
            "channel":104
        },
        "course_id":75,
        "order":0
      },
    ]
  },
  {
    "id": 179,
    "uuid": "10e6c506-9d66-4312-bda6-3552de5c4a56",
    "name": "Liderança que inspira",
    "excluded": false,
    "active": true,
    "channel": 110,
    "trail_course": [
      {
        "id":36,
        "trail_id":179,
        "course":{
            "id":65,
            "uuid":"ff58113f-9cf0-4b65-873c-68bd7624af48",
            "title":"Educação Financeira",
            "language":"pt-br",
            "desc":"Test description",
            "tags":{
              "custom":"",
              "category":[
                
              ]
            },
            "settings":{
              "cover_full_url": 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
              "cover_thumb_url": 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
              "cover_video_url": 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
            },
            "excluded":true,
            "private":true,
            "active":true,
            "active_individual":false,
            "channel":104
        },
        "course_id":75,
        "order":0
      },
      {
        "id":35,
        "trail_id":179,
        "course":{
            "id":75,
            "uuid":"ff58113f-9cf0-4b65-873c-68bd7624af48",
            "title":"Curso de Bitcoin",
            "language":"pt-br",
            "desc":"Test description",
            "tags":{
              "custom":"",
              "category":[
                
              ]
            },
            "settings":{
              "cover_full_url": 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
              "cover_thumb_url": 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
              "cover_video_url": 'https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png',
            },
            "excluded":true,
            "private":true,
            "active":true,
            "active_individual":false,
            "channel":104
        },
        "course_id":75,
        "order":0
      },
    ]
  }  
]

export const Opened = Template.bind({})
Opened.args = {
    onNewTrail: () => {alert(`Adicionando novo Conteúdo`)},
    handleChange: (trailsChange) => { 
      console.log('\n-----------------\ntrailsChange', trailsChange)
      trailCourse = trailsChange
    },    
    handleEditCourse: (id) => {alert(`Selected id: ${id}`)},  
    handlePopOverMove: (id) => {alert(`Move id: ${id}`)},
    handlePopOverEdit: (id) => {alert(`Content Edit id: ${id}`)},
    handlePopOverDelete: (id) => {alert(`Content Deleted id: ${id}`)},

    handlePopOverTrailEdit: (id) => {alert(`Trail Edit id: ${id}`)},
    handlePopOverTrailDelete: (id) => {alert(`Trail Deleted id: ${id}`)},
    handleSwitchAtivarIndividual: (idCourse, checked) => {
      alert(`Alterando curso ${idCourse} Individual: ${checked}`)
    },
    handleDeleteCourse: (idCourse) => {
      alert(`Deletando o Curso: ${idCourse}`)
    },
    handleDeleteCourseTrail: (idTrailCourse) => {
      alert(`Deletando Relacionamento da trilha x curso de ID: ${idTrailCourse}`)
    },    
    handleSwitchActiveTrail: (idTrail, active) => {
      alert(`Mudando status de Ativo da trilha ID: ${idTrail} para ${active}`)
    },
    onSetNameTrail: (idTrail, name) => { alert(`TrailName: ${idTrail} ${name}`) },
    handleUpdateTrail: (deletedItem, insertItem, trailCoursesList) => {
      console.log(`deletedItem`, deletedItem)
      console.log(`insertItem`, insertItem)
      console.log(`trailCoursesList`, trailCoursesList)
    },
    handlePopOverDuplicate: (id) => {alert(`Selected id: ${id}`)},
    handleMessageError: (errorCode) => {alert(errorCode)},
    trailsData: trailCourse,
    courseData: courses,
    textMeusConteudos: "My Contents",
    textTotalDe: "Total of",
    textRegistros: "records",
    textMinhasTrihas: "My tracks",
    txtAtivarCurso: "Ativar Indiv.",
    txtAtivarTrilha: "Ativar trilha",
    txtCriarNovoCurso: "Criar novo Conteúdo",
    txtPopOverEditContent: "Edit content",
    txtPopOverMoveToTrails: "Move to Trails",
    txtPopOverDeleteContent:"Delete content",
    txtTrailsPopOverEdit: "Editar nome da trilha",
    txtTrailsPopOverDuplicar: "Duplicar trilha",
    txtTrailsPopOverDelete: "Excluir trilha",
    txtPlacerolderInputNameTrail: 'Enter track name'
}


