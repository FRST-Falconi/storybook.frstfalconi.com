import React from 'react'
import {ProgressGoalBar} from './index'

export default {
    title: 'DS/ProgressGoalBar',
    component: ProgressGoalBar
}

const Template = (args) => <ProgressGoalBar {...args} />

//atingiu a meta
export const reachedGoalIncrease  = Template.bind({})
reachedGoalIncrease.args = {
    start: 10,
    current: 80,
    goal: 80
}

export const reachedGoalDecreased = Template.bind({})
reachedGoalDecreased.args = {
    start: 40,
    current: 5,
    goal: 5
}

//superou a meta
export const exceededTargetIncrease   = Template.bind({})
exceededTargetIncrease.args = {
    start: 10,
    current: 90,
    goal: 80
}

export const exceededTargetDecreased = Template.bind({})
exceededTargetDecreased.args = {
    start: 10,
    current: 2,
    goal: 5
}

//resultado evoluiu mas não alcancou a meta
export const GrowingWithoutReachingGoal = Template.bind({})
GrowingWithoutReachingGoal.args = {
    start: 10,
    current: 60,
    goal: 80
}

export const DecreasingWithoutGoal = Template.bind({})
DecreasingWithoutGoal.args = {
    start: 40,
    current: 15, // 
    goal: 5
}

//Este desafio não obteve resultados e não atingiu a meta definida
export const noResultsIncrease = Template.bind({})
noResultsIncrease.args = {
    start: 10,
    current: 10,
    goal: 80
}

export const noResultsDecreased = Template.bind({})
noResultsDecreased.args = {
    start: 40,
    current: 40,    //diminuir de 40 para 5
    goal: 5
}

export const noGoalIncrease = Template.bind({})
noGoalIncrease.args = {
    start: 60,
    current: 50,   //Este resultado não atingiu a meta definida e regrediu em relação ao valor inicial.
    goal: 80
}

export const noGoalDecreased = Template.bind({})
noGoalDecreased.args = {
    start: 20,
    current: 30,   //Este resultado não atingiu a meta definida e regrediu em relação ao valor inicial.
    goal: 5
}
