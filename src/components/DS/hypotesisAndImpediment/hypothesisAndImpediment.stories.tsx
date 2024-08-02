import React from 'react'
import {HypothesisAndImpediment}  from './index';

export default {
    title: 'DS/HypothesisAndImpediment',
    component: HypothesisAndImpediment
}

const Template = (args) => <HypothesisAndImpediment {...args} />

export const HipotesePriorizada = Template.bind({})

export const HipoteseLevantada = Template.bind({})

export const HipoteseSugerida = Template.bind({})

HipotesePriorizada.args ={
    type : 'prioritize',
    variant: 'hypothesis',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
    index: 1,
    authorGoalId: '1234',
    userLoggedId: '1234',
    description: 'Falta de processos para serem seguidos.',
    authorName: 'Christiane Eckersley',
    authorId: '1234',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`),
}

HipoteseLevantada.args ={
    type : 'raised',
    variant: 'hypothesis',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
    index: 2,
    authorGoalId: '1234',
    userLoggedId: '1234',
    description: 'Desenhar novos processos para área',
    authorName: 'Christiane Eckersley',
    authorId:'1234',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`)
}

HipoteseSugerida.args ={
    type : 'suggested',
    variant: 'hypothesis',
    title: 'HIPÓTESE 2',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    index: 3,
    authorGoalId: '1234',
    userLoggedId: '1235',
    description: 'Desenhar novos processos para área',
    authorName: 'Mikel Molero',
    authorId:'12345',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`)
}

export const ImpedimentPriorizada = Template.bind({})

export const ImpedimentLevantada = Template.bind({})

export const ImpedimentSugerida = Template.bind({})

ImpedimentPriorizada.args ={
    type : 'prioritize',
    variant: 'impediment',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
    index: 1,
    authorGoalId: '1234',
    userLoggedId: '1234',
    description: 'Desenhar novos processos para área',
    authorName: 'Christiane Eckersley',
    authorId: '1234',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`),
}

ImpedimentLevantada.args ={
    type : 'raised',
    variant: 'impediment',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
    index: 2,
    authorGoalId: '1234',
    userLoggedId: '1234',
    description: 'Desenhar novos processos para área',
    authorName: 'Christiane Eckersley',
    authorId:'1234',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`)
}

ImpedimentSugerida.args ={
    type : 'suggested',
    variant: 'impediment',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    index: 3,
    authorGoalId: '1234',
    userLoggedId: '1235',
    description: 'Desenhar novos processos para área',
    authorName: 'Mikel Molero',
    authorId:'12345',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`)
}



