import React from 'react'
import OnboardingProgressMenu from './index'

export default {
    title: 'DS/OnboardingProgressMenu',
    component: OnboardingProgressMenu
}

const Template = (args) => <OnboardingProgressMenu {...args} />

export const normal = Template.bind({})
normal.args = {
    image: 'https://i.gyazo.com/fa91ceb67f13f94a3ca725fe6363c44c.png',
    level: 'Iniciante',
    countChallenge: 0,
    textChallenge: 'desafios',
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
            finished: true,
            isCurrent: false
        },
        {
            titleUrl: 'http://localhost',
            title:'Fazer mapa do Autoconhecimento',
            description: 'Convide pessoas para colaborar no seu desafio.',
            finished: false,
            isCurrent: true
        },
        {
            titleUrl: 'http://localhost',
            title:'Convidar para colaborar',
            description: 'Conheça seus pontos fortes  e entenda quais habilidades você pode evoluir.',
            finished: false,
            isCurrent: false
        },
        {
            titleUrl: 'http://localhost',
            title:'Fazer uma sessão de Mentoria',
            description: 'Conheça seus pontos fortes  e entenda quais habilidades você pode evoluir.',
            finished: false,
            isCurrent: false
        },
        {
            titleUrl: 'http://localhost',
            title:'Colaborar em um desafio',
            description: 'Conecte-se a novas pessoas, colabore em desafios reais,e compartilhe conhecimento.  ',
            finished: false,
            isCurrent: false
        },
        {
            titleUrl: 'http://localhost',
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: true,
            isCurrent: false
        }
    ]
}
