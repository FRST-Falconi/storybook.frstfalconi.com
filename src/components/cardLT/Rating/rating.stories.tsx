import React from 'react'

import Rating from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card LT/Rating',
    component: Rating,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Rating {...args} />

export const ImpactoRating = Template.bind({})
ImpactoRating.args = {
    titulo: 'Impacto',
    nota: 4.6,
    descricaoAvaliacao: 'Ótimo',
    qtdeAvaliacao: 19,
    tipoVisualizacao: 1,
    style: {background: '#E5E5E5'}
}

export const RelevanciaRating = Template.bind({})
RelevanciaRating.args = {
    titulo: 'Relevância',
    nota: 3.8,
    descricaoAvaliacao: 'Bom',
    qtdeAvaliacao: 23,
    tipoVisualizacao: 1,
    style: {background: '#E5E5E5'}
}