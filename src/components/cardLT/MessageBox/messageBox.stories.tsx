import React from 'react'

import MessageBox from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card LT/MessageBox',
    component: MessageBox,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MessageBox {...args} />

export const WarningMessage = Template.bind({})
WarningMessage.args = {
    texto: 'Aguardando aprovação',
    tipoVisualizacao: 2,
    
}

export const SuccessMessage = Template.bind({})
SuccessMessage.args = {
    texto: 'Problema aprovado - 30 de abr. 2022',
    tipoVisualizacao: 1,
    
}

export const ErrorMessage = Template.bind({})
ErrorMessage.args = {
    texto: 'Revisar problema proposto',
    tipoVisualizacao: 3,
    
}