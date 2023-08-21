import React from 'react'
import OnboardingProgressMenu from './index'

export default {
    title: 'DS/OnboardingProgressMenu',
    component: OnboardingProgressMenu
}

const Template = (args) => <OnboardingProgressMenu {...args} />

export const normal = Template.bind({})
normal.args = {
    image: 'https://cdn-images.frstfalconi.cloud/iniciante.png',
    level: 'Iniciante',
    countChallenge: 0,
    textChallenge: 'desafios finalizados',
    style:{width:'300px'},
    items: [
        {
            handleClick: () => alert('boas-vindas'),
            title: 'Boas-vindas',
            description: 'Entenda a sua jornada contínua de aceleração de performance.',
            finished: true
        },  {
            handleClick: () => alert('Criar um desafio'),
            title: 'Criar um desafio',
            description: 'Teste ideias e encontre soluções para os seus desafios. ',
            finished: true,
        },
        {
            handleClick: () => alert('Fazer mapa do Autoconhecimento'),
            title:'Fazer mapa do Autoconhecimento',
            description: 'Convide pessoas para colaborar no seu desafio.',
            finished: false,
        },
        {
            handleClick: () => alert('Convidar para colaborar'),
            title:'Convidar para colaborar',
            description: 'Conheça seus pontos fortes  e entenda quais habilidades você pode evoluir.',
            finished: false,
        },
        {
            handleClick: () => alert('Fazer uma sessão de Mentoria'),
            title:'Fazer uma sessão de Mentoria',
            description: 'Conheça seus pontos fortes  e entenda quais habilidades você pode evoluir.',
            finished: false,
        },
        {
            handleClick: () => alert('Colaborar em um desafio'),
            title:'Colaborar em um desafio',
            description: 'Conecte-se a novas pessoas, colabore em desafios reais,e compartilhe conhecimento.  ',
            finished: false,
        },
        {
            handleClick: () => alert('Completar um desafio'),
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: true
        }
    ]
}
