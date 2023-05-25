import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import AccordionTrackList from './accordionTrackList'
import { count } from 'console'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/AccordionTrack',
    component: AccordionTrackList,        
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const [Course, setCourse] = useState([
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
      "title":"Entendendo funções recursivas",
      "language":"pt-br",
      "desc":"descrição",
      "tags":{
          "custom":"#tags",
          "category":[
            "Gestão"
          ]
      },
      "settings":{
          "cover_full_url":"https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png",
          "cover_thumb_url":"https://cdn.discordapp.com/attachments/1001105882358226955/1058104301844693122/image.png",
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
  ])

  const [Trail, setTrail] = useState([
  {
    "id": 174,
    "uuid": "10e6c506-9d66-4312-bda6-3552de5c4a56",
    "name": "O Líder que bate Metas",
    "publish_status": "pending",
    "excluded": false,
    "active": true,
    "private": true,
    "channel": 110,
    "trail_course": [
      {
        "id":32,
        "trail_id":174,        
        "course":{
            "id":44,
            "uuid":"ff58113f-9cf0-4b65-873c-68bd7624af48",
            "title":"Curso de Programação Inicial",
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
            "title":"Finanças Básicas",
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
    "private": true,
    // "publish_status": "processing",
    "publish_status": "pending",
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
    ]}  
  ])

  const [Count, setCount] = useState([
    0,
    0
  ]);

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  return <>
    <AccordionTrackList  
      // handleChange={(trailsChange) => { 
      //   console.log('\n-----------------\ntrailsChange', trailsChange)
      //   setTrail(trailsChange)
      // }}
      trailsData={Trail}
      courseData={Course}
      handlePublicarCheck={async (idTrilha) => {   
        await sleep(5 * 1000);     
        let idx = idTrilha == '174' ? 0 : 1
        let value = Count

        if (value[idx] === 6) {
          return 'complete'
        }
        else {
          console.log(idTrilha, 'Checando novamente...', Count, idx)
          value[idx] = value[idx] + 1
          setCount(value)
          return 'processing'
        }
      }} 
      {...args} 
    />
  </>
}

/// Mesmo payload da API do LXP
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Opened = Template.bind({})
Opened.args = {
    onNewTrail: () => {alert(`Adicionando novo Conteúdo`)},  
    handleEditCourse: (id) => {alert(`Selected id: ${id}`)},  
    handlePopOverMove: (id) => {alert(`Move id: ${id}`)},
    handlePopOverEdit: (id) => {alert(`Content Edit id: ${id}`)},
    handlePopOverDelete: (id) => {alert(`Content Deleted id: ${id}`)},
    handleMessageError: (error) => {alert(error)},
    handlePopOverTrailEdit: (id) => {alert(`Trail Edit id: ${id}`)},
    handlePopOverTrailDelete: (id) => {alert(`Trail Deleted id: ${id}`)},
    handleSwitchAtivar: (idCourse, checked) => {
      alert(`Alterando conteúudo ${idCourse}: ${checked}`)
    },   
    handlePublicarTrilha: (idTrilha) => {
      alert(`Publicando trilha ${idTrilha}`)
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
    handleSwitchPrivateTrail: (idTrail, active) => {
      alert(`Mudando status de privado da trilha ID: ${idTrail} para ${active}`)
    },    
    onSetNameTrail: (idTrail, name) => { alert(`TrailName: ${idTrail} ${name}`) },
    handleUpdateTrail: (deletedItem, insertItem, trailCoursesList) => {
      console.log(`deletedItem`, deletedItem)
      console.log(`insertItem`, insertItem)
      console.log(`trailCoursesList`, trailCoursesList)
    },    
    changeCourses: (course) => {
      console.log(`course`, course)
    },   
    handleClickPopOverEditActivity: (id) => {
      alert(`handleClickPopOverEditActivity ${id}`)
    }, 
    handlePopOverDuplicate: (id) => {alert(`Selected id: ${id}`)},
    textMeusConteudos: "Meus Conteúdos",
    textTotalDe: "Total de",
    textRegistros: "registros",
    textMinhasTrihas: "Minhas Trilhas",
    txtAtivarCurso: "Ativar",
    txtAtivarTrilha: "Ativar trilha",
    txtCriarNovoCurso: "Criar novo Conteúdo",
    txtPopOverEditContent: "Editar Conteúdo",
    txtPopOverMoveToTrails: "Move to Trails",
    txtPopOverDeleteContent:"Deletar Conteúdo",
    txtTrailsPopOverEdit: "Editar nome da trilha",
    txtTrailsPopOverDuplicar: "Duplicar trilha",
    txtTrailsPopOverDelete: "Excluir trilha",
    txtPlacerolderInputNameTrail: 'Enter track name',
    txtPopOverEditContentActivity: 'Editar da Trilha'
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true,
    trailsData: [],
    courseData: [],
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
