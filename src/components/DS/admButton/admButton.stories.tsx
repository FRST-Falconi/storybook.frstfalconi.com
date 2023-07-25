import React from 'react'
import AdmButton from './index'

export default {
    title: 'DS/Adm Button',
    component: AdmButton
}

const Template = (args) => <AdmButton {...args}/>

export const add =  Template.bind({})
add.args = {
    variant: 'add',
    textTooltip: 'Adicionar'
}

export const count =  Template.bind({})
count.args = {
    variant: 'count',
    count: 9,
    textTooltip: 'Ver Todos'
}

export const noImage =  Template.bind({})
noImage.args = {
    variant: 'image',
    textTooltip: 'Adicionar'
}

export const image =  Template.bind({})
image.args = {
    image: 'https://picsum.photos/200',
    variant: 'image',
    textTooltip: 'Adicionar'
}