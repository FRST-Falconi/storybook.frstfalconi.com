import React from 'react'
import BannerProblem from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card LT/BannerProblem',
    component: BannerProblem,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BannerProblem {...args} />

export const ShowData = Template.bind({

})
ShowData.args = {
    onClickMessage: () => { alert('Opa!')},
    onClickSave: () => { alert('Salvado!')},
    problema: "Aumentar o engajamento dos alunos na plataforma",
    nome: "Avatar",
    avatar: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg",
    cargo: "Estudante/Universitário",
    area: "Tecnologia da Informação",
    email: "robertolima@empresa.com.br",
    trilha: "Ainda não está vinculado a uma trilha",
    tags: [
        "Customer Success",
        "Experiência do usuário",
        "CSAT"
    ],
    typeMessagem: 1,
    message: "Problema aprovado - 30 de Abr. 2022",
    dataCriacao: "Criado em 20 de abr. 2022 - Atualizado em 04 de mai. 2022",
    qtdeAvaliacao: 19,
    notaAvaliacao: 4.6,
    qtdeRelevancia: 21,
    notaRelevancia: 4.8,
    curtidas: 19,
    stepProblem: 5,
    stepActive: 1,
    isEditable: true,
    trilhaData: [
        {label: 'trilha1', value: '1'},
        {label: 'trilha2', value: '2'},
        {label: 'trilha3', value: '3'},
    ],
    tagData: [
        {label: 'Customer Success', value: 'Customer Success'},
        {label: 'Experiência do usuário', value: 'Experiência do usuário'},
        {label: 'CSAT', value: 'CSAT'},
        {label: 'Visão Sistêmica', value: 'Visão Sistêmica'},
    ],    
    children: 
        <>
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

        </>
}