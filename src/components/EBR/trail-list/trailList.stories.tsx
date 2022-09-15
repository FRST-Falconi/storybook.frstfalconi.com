import React from 'react'

import TrailList from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'EBR/Trail List',
    component: TrailList,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TrailList {...args} />

export const sixItems = Template.bind({})
sixItems.args = {
    title: 'Trilhas de desenvolvimento aplicadas',
    trails: [
        'Atingindo resultados excepcionais', 
        'Liderança que inspira', 
        'Inovação Customer Centric', 
        'Colaboração: método e prática',
        'ECHOS - Novos Olhares sobre comunicação e liderança', 
        'Vendas para resultados',
        'Visão sistêmica',
        'Digital Business Mindset',
    ]
}

export const fiveItems = Template.bind({})
fiveItems.args = {
    title: 'Trilhas de desenvolvimento aplicadas',
    trails: [
        'Atingindo resultados excepcionais', 
        'Liderança que inspira', 
        'Inovação Customer Centric', 
        'ECHOS - Novos Olhares sobre comunicação e liderança', 
        'Vendas para resultados',
    ]
}

export const threeItems = Template.bind({})
threeItems.args = {
    title: 'Trilhas de desenvolvimento aplicadas',
    trails: [
        'Atingindo resultados excepcionais', 
        'ECHOS - Novos Olhares sobre comunicação e liderança', 
        'Vendas para resultados',
    ]
}


export const twoItems = Template.bind({})
twoItems.args = {
    title: 'Trilhas de desenvolvimento aplicadas',
    trails: [
        'Atingindo resultados excepcionais', 
        'Liderança que inspira', 
    ]
}