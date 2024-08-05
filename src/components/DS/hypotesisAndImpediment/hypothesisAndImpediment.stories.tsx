import React from 'react'
import { HypothesisAndImpediment } from './index';

export default {
    title: 'DS/HypothesisAndImpediment',
    component: HypothesisAndImpediment
}

const Template = (args) => <HypothesisAndImpediment {...args} />

export const HipotesePriorizada = Template.bind({})

export const HipoteseLevantada = Template.bind({})

export const HipoteseSugerida = Template.bind({})

HipotesePriorizada.args = {
    id: '1',
    type: 'prioritize',
    variant: 'hypothesis',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
    index: 1,
    authorGoalId: '1234',
    userLoggedId: '1234',
    description: 'Falta de processos para serem seguidos.',
    authorName: 'Christiane Eckersley',
    authorId: '1234',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`),
    hasVoting: true,
    voteText: 'Votar',
    onDeleteHipotesisOrImpediment: (id) => alert(`deletado a hipotese de id: ${id}`),
    onSaveEditHipotesisOrImpediment:  () => alert('editado')
}

HipoteseLevantada.args = {
    id: '2',
    type: 'raised',
    variant: 'hypothesis',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
    index: 2,
    authorGoalId: '1234',
    userLoggedId: '1234',
    description: 'Desenhar novos processos para área',
    authorName: 'Christiane Eckersley',
    authorId: '1234',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`),
    hasVoting: true,
    voteText: 'Votar',
    onDeleteHipotesisOrImpediment: (id) => alert(`deletado a hipotese de id: ${id}`),
    onSaveEditHipotesisOrImpediment:  () => alert('editado')
}

HipoteseSugerida.args = {
    id: '3',
    type: 'suggested',
    variant: 'hypothesis',
    title: 'HIPÓTESE 2',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    index: 3,
    authorGoalId: '1234',
    userLoggedId: '1235',
    description: 'Desenhar novos processos para área',
    authorName: 'Mikel Molero',
    authorId: '12345',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`),
    hasVoting: true,
    voteText: 'Votar',
    onDeleteHipotesisOrImpediment: (id) => alert(`deletado a hipotese de id: ${id}`),
    onSaveEditHipotesisOrImpediment:  () => alert('editado')
}

export const ImpedimentPriorizada = Template.bind({})

export const ImpedimentLevantada = Template.bind({})

export const ImpedimentSugerida = Template.bind({})

ImpedimentPriorizada.args = {
    id: '1',
    type: 'prioritize',
    variant: 'impediment',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
    index: 1,
    authorGoalId: '1234',
    userLoggedId: '1234',
    description: 'Desenhar novos processos para área',
    authorName: 'Christiane Eckersley',
    authorId: '1234',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`),
    hasVoting: false,
    onDeleteHipotesisOrImpediment: (id) => alert(`deletado o impedimento de id: ${id}`),
    onSaveEditHipotesisOrImpediment:  () => alert('editado')
}

ImpedimentLevantada.args = {
    id: '2',
    type: 'raised',
    variant: 'impediment',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
    index: 2,
    authorGoalId: '1234',
    userLoggedId: '1234',
    description: 'Desenhar novos processos para área',
    authorName: 'Christiane Eckersley',
    authorId: '1234',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`),
    hasVoting: false,
    onDeleteHipotesisOrImpediment: (id) => alert(`deletado o impedimento de id: ${id}`),
    onSaveEditHipotesisOrImpediment:  () => alert('editado')
}

ImpedimentSugerida.args = {
    id: '3',
    type: 'suggested',
    variant: 'impediment',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    index: 3,
    authorGoalId: '1234',
    userLoggedId: '1235',
    description: 'Desenhar novos processos para área',
    authorName: 'Mikel Molero',
    authorId: '12345',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`),
    hasVoting: false,
    onDeleteHipotesisOrImpediment: (id) => alert(`deletado o impedimento de id: ${id}`),
    onSaveEditHipotesisOrImpediment:  () => alert('editado')
}


export const Vote = Template.bind({})

Vote.args = {
    id: '1',
    type: 'prioritize',
    variant: 'hypothesis',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
    index: 1,
    authorGoalId: '1234',
    userLoggedId: '1234',
    description: 'Falta de processos para serem seguidos.',
    authorName: 'Christiane Eckersley',
    authorId: '1234',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`),
    onDeleteHipotesisOrImpediment: (id) => alert(`deletado o impedimento de id: ${id}`),
    onSaveEditHipotesisOrImpediment:  () => alert('editado'),
    hasVoting: true,
    voteText: 'Votar',
    votersList: [
        {
            id: '123',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'Name'
        },
        {
            id: '123',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'Name'
        },
        {
            id: '123',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'Name'
        },
        {
            id: '123',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'Name'
        }
    ]
}


