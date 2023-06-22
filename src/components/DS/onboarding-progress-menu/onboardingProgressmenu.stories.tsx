import React from 'react'
import OnboardingProgressMenu from './index'

export default {
    title: 'DS/OnboardingProgressMenu',
    component: OnboardingProgressMenu
}

const Template = (args) => <OnboardingProgressMenu {...args} />

export const normal = Template.bind({})
normal.args = {
    heading: 'Seu progresso',
    level: 'Iniciante',
    challenge: '0 desafios',
    items: [
        {
            titleUrl: '',
            title: 'Boas-vindas',
            description: 'Entenda a sua jornada contínua de aceleração de performance.',
            finished: true,
            isCurrent: false
        },  {
            titleUrl: '',
            title: 'Criar um desafio',
            description: 'Teste ideias e encontre soluções para os seus desafios. ',
            finished: false,
            isCurrent: true
        },
        {
            titleUrl: 'http://localhost',
            title:'Fazer mapa do Autoconhecimento',
            description: 'Conheça seus pontos fortes  e entenda quais habilidades você pode evoluir.',
            finished: false,
            isCurrent: false
        }
    ]
}
