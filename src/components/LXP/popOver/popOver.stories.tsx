import React, { useState } from 'react'

import PopOver from './index'
import Button from '../../buttons'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/PopOver',
    component: PopOver,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args


const Template = (args) => {
    const [AnchorEl, setAnchorEl] = useState(null);
    return (
        <>
            <Button
                handleClick={(event: any) => {
                    setAnchorEl(event.currentTarget)
                }}
                label={"Exemplo Popover"}
                variant={"primary"}

            />
            <PopOver 
                {...args} 
                element={AnchorEl} 
                onClosePopover={() => {
                    setAnchorEl(null)
                }}
            />
        </>
    )
}


export const upLeft = Template.bind({})
upLeft.args = {
    variant: 'upLeft',
    children: <>
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

    </>,
}

export const upRight = Template.bind({})
upRight.args = {
    variant: 'upRight',    
    children: <>
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

</>,
}

export const lowRight = Template.bind({})
lowRight.args = {
    variant: 'lowRight',
    children: <>Teste de children</>,    
}

export const lowLeft = Template.bind({})
lowLeft.args = {
    variant: 'lowLeft',
    children: <> <span>Teste de children </span> </>,    
}

export const sideLeft = Template.bind({})
sideLeft.args = {
    variant: 'sideLeft',
    children: <>
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

</>,    
}

export const sideRight = Template.bind({})
sideRight.args = {
    variant: 'sideRight',
    children: <> <span>Teste de children </span> </>,    
}
