import { Abc } from '@mui/icons-material'
import React from 'react'

import CardResultConquista from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Cards/cardResultConquista',
    component: CardResultConquista,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardResultConquista {...args} />

export const Conquista = Template.bind({})
Conquista.args = {
    statusCard: 1,
    userName: 'Érica Heim',
    userArea: 'Customer Experience',
    problemId: 'Abc',
    description: 'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil, mandando um texto para testar o tamanho do acccaradasdasd',
    onClick: (problemID) => { alert(problemID)}
}

export const Aprendizado = Template.bind({})
Aprendizado.args = {
    statusCard: 2,
    userName: 'Érica Heim',
    userArea: 'Customer Experience',
    problemId: 'Abc',
    description: 'Descobri fatores que estão contribuindo negativamente para que os alunos não engajem na plataforma',
    onClick: (problemID) => { alert(problemID)}
}