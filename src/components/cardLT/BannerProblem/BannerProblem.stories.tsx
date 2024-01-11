import React from 'react'
import { placeholderCSS } from 'react-select/dist/declarations/src/components/Placeholder'
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
    onSelectedStep: () => { alert('onSelectedStep!')},
    onClickViewsBtn: () => { alert('Views Btn!')},

    hasContinueButton: true,
    onClickSave: (nome) => {alert(nome)},
    isVerified: true,
    verifiedTooltipContent: 'Este desafio consta como verificado pois o objetivo dele está alinhado às metas da empresa a qual ele pertence',
    problema: "Aumentar o engajamento dos alunos na plataforma",
    company: "FRST  FALCONI ROAD OF SKILLS AND TALENTS TREINAMENTO E DESENVOLVIMENTO DE PESSOAS LTDA.",
    topHeaderTagText: 'Convite recebido para aprovação',
    onClickUserInfo: () => alert('visitar perfil'),
    textVisitProfile: 'Visit profile',
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
    showButtonInvite: true,
    textGoalInviteBtn: "Ver convites enviados",

    showButtonViews: true,
    textGoalViewsBtn: "Visualizações",

    message: "Problema aprovado - 30 de Abr. 2022",
    dataCriacao: "Criado em 20 de abr. 2022 - Atualizado em 04 de mai. 2022",
    qtdeAvaliacao: 19,
    notaAvaliacao: 4.6,
    descriptionImpacto: 'Ótimo',
    qtdeRelevancia: 21,
    notaRelevancia: 3.8,
    descriptionRelevancia: 'Bom',
    curtidas: 19,
    stepProblem: 5,
    stepActive: 1,
    isEditable: true,
    isVisibleEditTrail: true,
    isVisibleEditTags: true,
    trilhaData: [
        {label: 'trilha1', value: '1'},
        {label: 'trilha2', value: '2'},
        {label: 'trilha3', value: '3'},
    ],
    tagData: [
        {label: 'Financeiro', value: 'Financeiro'},
        {label: 'Otimização de processos', value: 'Otimização de processos'},
        {label: 'Automação de processos', value: 'Automação de processos'},
        {label: 'Vendas', value: 'Vendas'},
        {label: 'Marketing', value: 'Marketing'},
        {label: 'Cultura', value: 'Cultura'},
        {label: 'Liderança', value: 'Liderança'},
        {label: 'Recrutamento', value: 'Recrutamento'},
        {label: 'Produto digital', value: 'Produto digital'},
        {label: 'Comunicação', value: 'Comunicação'},
        {label: 'Cliente', value: 'Cliente'},
        {label: 'Customer Success', value: 'Customer Success'},
        {label: 'Experiência do usuário', value: 'Experiência do usuário'},
        {label: 'CSAT', value: 'CSAT'},
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

export const ShowDataTranslate = Template.bind({

})
ShowDataTranslate.args = {
    onClickMessage: () => { alert('Opa!')},
    onClickSave: (nome) => {alert(nome)},
    problema: "Increase student engagement on the platform",
    nome: "Avatar",
    avatar: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg",
    cargo: "University/student",
    area: "Infromation Technology",
    email: "robertolima@empresa.com.br",
    trilha: "Not yet linked to a track",
    tags: [
        "Customer Success",
        "User experience",
        "CSAT"
    ],
    typeMessagem: 1,
    message: "Issue approved - 30 de Apr. 2022",
    dataCriacao: "Created 20 apr. 2022 - Updated 04 de may. 2022",
    qtdeAvaliacao: 19,
    notaAvaliacao: 4.6,
    descriptionImpacto: 'Excellent',
    qtdeRelevancia: 21,
    notaRelevancia: 3.8,
    descriptionRelevancia: 'Good',
    curtidas: 19,
    stepProblem: 5,
    stepActive: 1,
    isEditable: true,
    isVisibleEditTrail: true,
    isVisibleEditTags: true,
    trilhaData: [
        {label: 'trilha1', value: '1'},
        {label: 'trilha2', value: '2'},
        {label: 'trilha3', value: '3'},
    ],
    tagData: [
        {label: 'Financeiro', value: 'Financeiro'},
        {label: 'Otimização de processos', value: 'Otimização de processos'},
        {label: 'Automação de processos', value: 'Automação de processos'},
        {label: 'Vendas', value: 'Vendas'},
        {label: 'Marketing', value: 'Marketing'},
        {label: 'Cultura', value: 'Cultura'},
        {label: 'Liderança', value: 'Liderança'},
        {label: 'Recrutamento', value: 'Recrutamento'},
        {label: 'Produto digital', value: 'Produto digital'},
        {label: 'Comunicação', value: 'Comunicação'},
        {label: 'Cliente', value: 'Cliente'},
        {label: 'Customer Success', value: 'Customer Success'},
        {label: 'Experiência do usuário', value: 'Experiência do usuário'},
        {label: 'CSAT', value: 'CSAT'},
      ],    
    children: 
        <>
            <h2 style={{fontSize: 24}}>Mission 1: Mars - Problem definition</h2>

            <h2>Indicator:</h2>
            <h3>Platform usage time</h3>

            <h2>Current status of the indicator:</h2>
            <h3>In the last quarter (Q1 - 2022) students used the platform an average of 8 hours.</h3>

            <h2>What is your goal and the deadline for achieving it?</h2>
            <h3>In the next quarter (Q2 - 2022) students will use the platform an average of 12 hours.</h3>

            <h2>ASSURANCE: What I Already Know About This Problem?</h2>
            <h3>The presence, commitment and engagement of students on the platform is fundamental for them to have a good use of the trail and thus, increasing their skills.</h3>

            <h2>QUESTIONS: What do I need to find out about this problem?</h2>
            <h3>The ideal engagement time is 12 hours. It is necessary to investigate which factors negatively influenced this issue and how we can reverse and achieve a better result.</h3>

        </>,

    textTitleProblem: 'Problem',
    textButtonLinkEdit: 'To edit',
    textButtonLinkEditSave: 'Save editions',
    placeholderSelectTrail: 'Select a trail',
    textIconDescription: 'Not yet linked to a track',
    textContentInput: 'Search and select up to three keywords',
    placeholderSelectTag: 'Select a Tag',
    missionIdioma: 'en-US',
    ratingTitleImpact: 'Impact',
    ratingTitleRelevance: 'Relevance',
    ratingTitleLikes: 'Likes',
    ratingLikesEvaluation: 'evaluation',
    ratingLikesDescription: 'people',
    ratingNavegationAnt: 'Previos'
}
