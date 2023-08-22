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
            handleClick: () => alert('Complete seu perfil'),
            title: 'Complete seu perfil',
            description: 'Para aumentar sua visibilidade e facilitar novas conexões.',
            finished: false,
        },      
        {
            handleClick: () => alert('Identifique desafios'),
            title:'Identifique desafios',
            description: 'Entenda como transformar desafios em resultados e aprendizados reais.',
            finished: false,
        },
        {
            handleClick: () => alert('Crie desafios'),
            title:'Crie desafios',
            description: 'Teste ideias e encontre soluções para os seus desafios. ',
            finished: false,
        },
        {
            handleClick: () => alert('Convide para colaborar'),
            title:'Convide para colaborar',
            description: 'Receba ajuda nos seus desafios e enxergue-os por outras perspectivas.',
            finished: false,
        },
        {
            handleClick: () => alert('Colaborar em um desafio'),
            title:'Colabore em desafios',
            description: 'Compartilhe conhecimento e contribua no alcance de resultados impactantes.',
            finished: false,
        },
        {
            handleClick: () => alert('sessões de colaboração'),
            title:'Inscreva-se em sessões de colaboração',
            description: 'Acelere sua performance com o apoio de especialistas.',
            finished: false
        },
        {
            handleClick: () => alert('Completar um desafio'),
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: false
        },
        {
            handleClick: () => alert('Completar um desafio'),
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: false
        },
        {
            handleClick: () => alert('Completar um desafio'),
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: false
        },
        {
            handleClick: () => alert('Completar um desafio'),
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: false
        },
        {
            handleClick: () => alert('Completar um desafio'),
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: false
        },
        {
            handleClick: () => alert('Completar um desafio'),
            title:'Completar um desafio',
            description: 'Complete um desafio e veja o resultado real.  ',
            finished: false
        }
    ]
}
