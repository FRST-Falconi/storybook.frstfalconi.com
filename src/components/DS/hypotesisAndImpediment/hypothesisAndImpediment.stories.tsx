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
    description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, ',
    authorName: 'Christiane Eckersley',
    authorId: '1234',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`),
    hasVoting: true,
    voteText: 'Votar',
    onDeleteHipotesisOrImpediment: (id) => alert(`deletado a hipotese de id: ${id}`),
    onSaveEditHipotesisOrImpediment:  () => alert('editado'),
    hasEditHipotesisOrImpediment: true,

}

HipoteseLevantada.args = {
    id: '2',
    type: 'owner',
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
    onSaveEditHipotesisOrImpediment:  () => alert('editado'),
    hasEditHipotesisOrImpediment: true
}

HipoteseSugerida.args = {
    id: '3',
    type: 'suggested',
    variant: 'hypothesis',
    title: 'HIPÓTESE 2',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    index: 3,
    authorGoalId: '1234',
    userLoggedId: '12345',
    description: 'Desenhar novos processos para área',
    authorName: 'Mikel Molero',
    authorId: '12345',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`),
    hasVoting: true,
    voteText: 'Votar',
    onDeleteHipotesisOrImpediment: (id) => alert(`deletado a hipotese de id: ${id}`),
    onSaveEditHipotesisOrImpediment:  () => alert('editado'),
    hasEditHipotesisOrImpediment: true
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
    onSaveEditHipotesisOrImpediment:  () => alert('editado'),
    hasEditHipotesisOrImpediment: true
}

ImpedimentLevantada.args = {
    id: '2',
    type: 'owner',
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
    onSaveEditHipotesisOrImpediment:  () => alert('editado'),
    hasEditHipotesisOrImpediment: true
}

ImpedimentSugerida.args = {
    id: '3',
    type: 'suggested',
    variant: 'impediment',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    index: 3,
    authorGoalId: '1234',
    userLoggedId: '12345',
    description: 'Desenhar novos processos para área',
    authorName: 'Mikel Molero',
    authorId: '12345',
    handleViewProfile: (authorId) => alert(`cliquei no user de id: ${authorId}`),
    hasVoting: false,
    onDeleteHipotesisOrImpediment: (id) => alert(`deletado o impedimento de id: ${id}`),
    onSaveEditHipotesisOrImpediment:  () => alert('editado'),
    hasEditHipotesisOrImpediment: true
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
    onDeleteVote: () => alert('voto deletado'),
    onVote: (id) => alert(`voto de hipotese com id: ${id}`),
    hasVoting: true,
    voteText: 'Votar',
    hasEditHipotesisOrImpediment: true,
    votersList: [
        {
            useId: '123',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'Alice Johnson'
        },
        {
            useId: '123',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'Frank Miller'
        },
        {
            useId: '123',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'David Wilson'
        },
        {
            useId: '123',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'Eva Davis'
        },
        {
            useId: '123',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'Frank Miller'
        },
        {
            useId: '123',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'David Wilson'
        },
        {
            useId: '123',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'Eva Davis'
        }
    ]
}


