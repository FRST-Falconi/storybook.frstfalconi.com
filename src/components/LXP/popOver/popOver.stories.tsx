import React from 'react'

import PopOver from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/PopOver',
    component: PopOver,

    argTypes: {
        position: {
            control: 'select',
            options: ['left', 'right', 'top','bottom']
        },
        align: {
            control: 'select',
            options: ['start', 'end']
        },
    }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PopOver {...args} />

export const normal = Template.bind({})
normal.args = {
    position: 'bottom',
    align: 'start',
    clickOutside: () => alert('Click outside'),
    isOpen: false,
    padding: 15,
    children: <div style={{cursor: 'pointer', width: 'fit-content'}}>Set true IsOpen!</div>,
    contentPopOver: <p>Loren ipsum dolor sit amet</p>
}

export const large = Template.bind({})
large.args = {
    position: 'bottom',
    align: 'start',
    isOpen: false,
    clickOutside: () => alert('Click outside'),
    padding: 15,
    children: <div style={{cursor: 'pointer'}}>Set true IsOpen!</div>,
    contentPopOver: 
    <div style={{width: '450px'}}>
        <h2 style={{fontSize: 24}}>Missão 1: Marte - Definição do Problema</h2>

        <h2>Indicador:</h2>
        <h3>Tempo de uso da plataforma</h3>
        
        <h2>Situação atual do indicador:</h2>
        <h3>No último quarter (Q1 - 2022) os alunos usaram a plataforma em média 8 horas.</h3>
        
        <h2>Qual é a sua meta e o prazo final para alcançá-la?</h2>
        <h3>No próximo quarter (Q2 - 2022) os alunos usarão a plataforma em média 12 horas.</h3>
        
        <h2>CERTEZAS: O que eu já sei sobre esse problema?</h2>
        <h3>A presença, comprometimento e engajamento dos alunos na plataforma é algo fundamental para que os mesmos tenham um bom aproveitamento da trilha e assim, incrementando suas skills.</h3>
        
        <h2>DÚVIDAS: O que eu preciso descobrir sobre esse problema?</h2>
        <h3>O tempo ideal de engajamento é de 12 horas. É necessário investigar quais fatores influenciaram negativamente essa questão e como podemos reverter e alcançar um melhor resultado.</h3>
    </div>
}
