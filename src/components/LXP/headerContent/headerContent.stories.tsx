import React from 'react'

import HeaderContent from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/HeaderContent',
    component: HeaderContent,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HeaderContent {...args} />

export const InProgress = Template.bind({})
InProgress.args = {
  title: 'Blockchain e criptomoedas',
  description: 'Bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. Chicken tri-tip alcatra, pastrami buffalo pork chop shoulder drumstick ham hock landjaeger.',
  typeOfHeader: 'inProgress',
  progresso: 63,
  bgImg: '/bg1.png',
  onClick: () => {alert('Clicado!')},
  channel: 'XP Investimentos'
}

export const Recomendation = Template.bind({})
Recomendation.args = {
    typeOfHeader: 'recomendation',
    onClick: () => {alert('Clicado!')},
    listaRecomendacao: [
        {
            title: 'Como criar sua cripto',
            description: 'Bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. Chicken tri-tip alcatra, pastrami buffalo pork chop shoulder drumstick ham hock landjaeger.',
            bg: '/bg2.png'
        },
        {
            title: 'Criar um teste qualquer',
            description: 'Loren ipsum qualquer luro luuok',
            bg: '/bg1.png'
        },
        {
            title: 'Teste com um titulo muito grande para ver o comportamento',
            description: 'ata tata tat ast astsa tas tas f asf asfasd asdasda  dasdsa das',
            bg: '/bg2.png'
        },
        {
            title: 'Loren ipsum',
            description: 'opadkapodk asop daksp doksapodk aspod kasp odkasp odksap dokas doaksd asduahdiuasdh iuashd iaushdaihdas',
            bg: '/bg1.png'
        },
        {
            title: 'tutucaman liigusudksds',
            description: 'Dauduadhausdh au hdaso oi aspo dkaspo asokd aks dksamd alsnf ljas sjldha slfnaks mfa skfmas lkfams lkm salkm mkasm askd malsk dmask dsak mdaosidasi jda dkasj dkj dlas dklsada osdpoas dosa kaopd osa kaso dksa idjsa idjasdias kas ask maskl mask daslk dsal kdmaslkd asud hsufsao usao fsjf sijfosid jasdpok aspokas sai dasoi jsaoif jas flkas jfla',
            bg: '/bg2.png'
        }
    ]
}