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
    userLoggedId: '1234'
}

HipoteseLevantada.args ={
    type : 'raised',
    variant: 'hypothesis',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
    index: 2,
    authorGoalId: '1234',
    userLoggedId: '1234'
}

HipoteseSugerida.args ={
    type : 'suggested',
    variant: 'hypothesis',
    title: 'HIPÓTESE 2',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    index: 3,
    authorGoalId: '1234',
    userLoggedId: '1235'
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
    userLoggedId: '1234'
}

ImpedimentLevantada.args ={
    type : 'raised',
    variant: 'impediment',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
    index: 2,
    authorGoalId: '1234',
    userLoggedId: '1234'
}

ImpedimentSugerida.args ={
    type : 'suggested',
    variant: 'impediment',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    index: 3,
    authorGoalId: '1234',
    userLoggedId: '1235'
}



