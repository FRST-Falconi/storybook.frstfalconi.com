import React from 'react'

import GroupStatistics from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'EBR/GroupStatistics',
    component: GroupStatistics,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <GroupStatistics {...args} />


export const eightItems = Template.bind({})
eightItems.args = {    
    objectStatistics: [
        { featuredNumber: '400', description: 'Trilhas concluídas' },
        { featuredNumber: '96%', description: 'Engajamento com o consumo de conteúdo' },
        { featuredNumber: '85%', description: 'Satisfação com o conteúdo apresentado' },
        { featuredNumber: '84%', description: 'Indicariam o programa' },
        { featuredNumber: '400', description: 'Trilhas concluídas' },
        { featuredNumber: '96%', description: 'Engajamento com o consumo de conteúdo' },
        { featuredNumber: '85%', description: 'Satisfação com o conteúdo apresentado' },
        { featuredNumber: '84%', description: 'Indicariam o programa' },
    ], 
    loading: false, 
    hasShadow: true,
    styles: {width: '1280px'}
}


export const sevenItems = Template.bind({})
sevenItems.args = {    
    objectStatistics: [
        { featuredNumber: '400', description: 'Trilhas concluídas' },
        { featuredNumber: '96%', description: 'Engajamento com o consumo de conteúdo' },
        { featuredNumber: '85%', description: 'Satisfação com o conteúdo apresentado' },
        { featuredNumber: '84%', description: 'Indicariam o programa' },
        { featuredNumber: '400', description: 'Trilhas concluídas' },
        { featuredNumber: '96%', description: 'Engajamento com o consumo de conteúdo' },
        { featuredNumber: '85%', description: 'Satisfação com o conteúdo apresentado' },
    ], 
    loading: false, 
    hasShadow: true,
    styles: {width: '1280px'}
}

export const sixItems = Template.bind({})
sixItems.args = {    
    objectStatistics: [
        { featuredNumber: '400', description: 'Trilhas concluídas' },
        { featuredNumber: '96%', description: 'Engajamento com o consumo de conteúdo' },
        { featuredNumber: '85%', description: 'Satisfação com o conteúdo apresentado' },
        { featuredNumber: '84%', description: 'Indicariam o programa' },
        { featuredNumber: '96%', description: 'Engajamento com o consumo de conteúdo' },
        { featuredNumber: '85%', description: 'Satisfação com o conteúdo apresentado' },
    ], 
    loading: false, 
    hasShadow: true,
    styles: {width: '1280px'}
}

export const fiveItems = Template.bind({})
fiveItems.args = {    
    objectStatistics: [
        { featuredNumber: '400', description: 'Trilhas concluídas' },
        { featuredNumber: '328', description: 'Participantes' },
        { featuredNumber: '96%', description: 'Engajamento com o consumo de conteúdo' },
        { featuredNumber: '85%', description: 'Satisfação com o conteúdo apresentado' },
        { featuredNumber: '84%', description: 'Indicariam o programa' },
    ], 
    loading: false, 
    hasShadow: true,
    styles: {width: '1280px'}
}

export const fourItems = Template.bind({})
fourItems.args = {    
    objectStatistics: [
        { featuredNumber: '400', description: 'Trilhas concluídas' },
        { featuredNumber: '96%', description: 'Engajamento com o consumo de conteúdo' },
        { featuredNumber: '85%', description: 'Satisfação com o conteúdo apresentado' },
        { featuredNumber: '84%', description: 'Indicariam o programa' },
    ], 
    loading: false, 
    hasShadow: true,
    styles: {width: '1280px'}
}