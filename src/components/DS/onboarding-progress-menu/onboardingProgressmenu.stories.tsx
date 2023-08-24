import React from 'react'
import OnboardingProgressMenu from './index'

export default {
    title: 'DS/OnboardingProgressMenu',
    component: OnboardingProgressMenu
}

const Template = (args) => <OnboardingProgressMenu {...args} />

export const normal = Template.bind({})
normal.args = {
    level:{
        id:1,
        name: 'Iniciante',
        avatar: 'https://cdn-images.frstfalconi.cloud/iniciante.png'
    },
    countChallenge: 0,
    textChallenge: 'desafios finalizados',
    style:{width:'300px'},
    items: [
        {
            handleClick: () => alert('boas-vindas'),
            id: 1,
            title: 'Boas-vindas',
            description: 'Entenda a sua jornada contínua de aceleração de performance.',
            finished: true
        },  {
            handleClick: () => alert('Complete seu perfil'),
            id: 2,
            title: 'Complete seu perfil',
            description: 'Para aumentar sua visibilidade e facilitar novas conexões.',
            finished: false,
        },      
        {
            handleClick: () => alert('Identifique desafios'),
            id: 3,
            title:'Identifique desafios',
            description: 'Entenda como transformar desafios em resultados e aprendizados reais.',
            finished: true,
        },
        {
            handleClick: () => alert('Crie desafios'),
            id: 4,
            title:'Crie desafios',
            description: 'Teste ideias e encontre soluções para os seus desafios. ',
            finished: false,
        },
        {
            handleClick: () => alert('Convide para colaborar'),
            id: 5,
            title:'Convide para colaborar',
            description: 'Receba ajuda nos seus desafios e enxergue-os por outras perspectivas.',
            finished: false,
        },
        {
            handleClick: () => alert('Colaborar em um desafio'),
            id: 6,
            title:'Colabore em desafios',
            description: 'Compartilhe conhecimento e contribua no alcance de resultados impactantes.',
            finished: false,
        },
        {
            handleClick: () => alert('sessões de colaboração'),
            id: 7,
            title:'Inscreva-se em sessões de colaboração',
            description: 'Acelere sua performance com o apoio de especialistas.',
            finished: false
        },
        {
            handleClick: () => alert('Completar um desafio'),
            id: 8,
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: false
        },
        {
            handleClick: () => alert('Completar um desafio'),
            id: 9,
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: false
        },
        {
            handleClick: () => alert('Completar um desafio'),
            id: 10,
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: false
        },
        {
            handleClick: () => alert('Completar um desafio'),
            id: 11,
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: false
        },
        {
            handleClick: () => alert('Completar um desafio'),
            id: 12,
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: false
        },
        {
            handleClick: () => alert('Completar um desafio'),
            id: 13,
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: false
        }
    ]
}
