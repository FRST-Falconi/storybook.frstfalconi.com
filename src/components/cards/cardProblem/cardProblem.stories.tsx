import React from 'react'

import CardProblem from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Cards/CardProblem',
    component: CardProblem,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardProblem {...args} />

export const hipoteseLevantada = Template.bind({})
hipoteseLevantada.args = {
    
    selected: false,
    
    problemID: "bla-blu-fla",
    userName: "Roberto Lima",
    
    problemStatus: "hipoteseLevantada",
    
    userCargo: "Tecnologia da informação (Estudante/Universitário(a))",
    cardTitle: "Aumentar o engajamento dos alunos na plataforma D2L",
    tags: ['Customer Success', 'Experiência do usuário', 'CSAT'],
    ratingImpacto:{
        nota: 4.6,
        qtdeAvaliacao: 19,
        description: 'Ótimo'
    },
    ratingRelevancia:{
        nota: 3.8,
        qtdeAvaliacao: 23,
        description: 'Bom'
    },
    statusProblema: 'aguardando',
    trilhaVinculada: 'Digital Business Mindset',
    lastUpdated: 'Atualizado 30 de Abr. 2022'
}

export const finalizado = Template.bind({})
finalizado.args = {
    
    selected: false,
    
    problemID: "bla-blu-fla",
    userName: "Roberto Lima",
    problemStatus: "finalizado",
    userCargo: "Tecnologia da informação (Estudante/Universitário(a))",

    cardTitle: "Aumentar o engajamento dos alunos na plataforma D2L",
    tags: ['Customer Success', 'Experiência do usuário', 'CSAT'],
    ratingImpacto:{
        nota: 4.6,
        qtdeAvaliacao: 19,
        description: 'Ótimo'
    },
    ratingRelevancia:{
        nota: 3.8,
        qtdeAvaliacao: 23,
        description: 'Bom'
    },
    statusProblema: 'aprovado',
    trilhaVinculada: 'Digital Business Mindset',
    lastUpdated: 'Atualizado 30 de Abr. 2022'
}

export const proxPassos = Template.bind({})
proxPassos.args = {
    
    selected: false,
    
    problemID: "bla-blu-fla",
    userName: "Roberto Lima",
    
    problemStatus: "proxPassos",
    
    userCargo: "Tecnologia da informação (Estudante/Universitário(a))",
    cardTitle: "Aumentar o engajamento dos alunos na plataforma D2L",
    tags: ['Customer Success', 'Experiência do usuário', 'CSAT'],
    ratingImpacto:{
        nota: 4.6,
        qtdeAvaliacao: 19,
        description: 'Ótimo'
    },
    ratingRelevancia:{
        nota: 3.8,
        qtdeAvaliacao: 23,
        description: 'Bom'
    },
    statusProblema: 'revisar',
    trilhaVinculada: 'Digital Business Mindset',
    lastUpdated: 'Atualizado 30 de Abr. 2022'
}

export const resultadosAprendizados = Template.bind({})
resultadosAprendizados.args = {
    
    selected: false,
    
    problemID: "bla-blu-fla",
    userName: "Roberto Lima",
    
    problemStatus: "resultadosAprendizados",
    
    userCargo: "Tecnologia da informação (Estudante/Universitário(a))",
    cardTitle: "Aumentar o engajamento dos alunos na plataforma D2L",
    tags: ['Customer Success', 'Experiência do usuário', 'CSAT'],
    ratingImpacto:{
        nota: 4.6,
        qtdeAvaliacao: 19,
        description: 'Ótimo'
    },
    ratingRelevancia:{
        nota: 3.8,
        qtdeAvaliacao: 23,
        description: 'Bom'
    },
    statusProblema: 'aprovado',
    
    lastUpdated: 'Atualizado 30 de Abr. 2022'
}

export const testesRealizados = Template.bind({})
testesRealizados.args = {
    
    selected: false,
    
    problemID: "bla-blu-fla",
    userName: "Roberto Lima",
    
    problemStatus: "testesRealizados",
    
    userCargo: "Tecnologia da informação (Estudante/Universitário(a))",
    cardTitle: "Aumentar o engajamento dos alunos na plataforma D2L",
    tags: ['Customer Success', 'Experiência do usuário', 'CSAT'],
    ratingImpacto:{
        nota: 4.6,
        qtdeAvaliacao: 19,
        description: 'Ótimo'
    },
    ratingRelevancia:{
        nota: 3.8,
        qtdeAvaliacao: 23,
        description: 'Bom'
    },
    
    trilhaVinculada: 'Digital Business Mindset',
    lastUpdated: 'Atualizado 30 de Abr. 2022'
}

export const problemaDefinido = Template.bind({})
problemaDefinido.args = {
    
    selected: false,
    
    problemID: "bla-blu-fla",
    userName: "Roberto Lima",
    
    problemStatus: "problemaDefinido",
    
    userCargo: "Tecnologia da informação (Estudante/Universitário(a))",
    cardTitle: "Aumentar o engajamento dos alunos na plataforma D2L",
    tags: ['Customer Success', 'Experiência do usuário', 'CSAT'],
    ratingImpacto:{
        nota: 4.6,
        qtdeAvaliacao: 19,
        description: 'Ótimo'
    },
    ratingRelevancia:{
        nota: 3.8,
        qtdeAvaliacao: 23,
        description: 'Bom'
    },
    statusProblema: 'aguardando',
    
    lastUpdated: 'Atualizado 30 de Abr. 2022'
}

export const naoIniciou = Template.bind({})
naoIniciou.args = {
    
    selected: false,
    
    problemID: "bla-blu-fla",
    userName: "Roberto Lima",
    
    problemStatus: "naoIniciou",
    
    userCargo: "Tecnologia da informação (Estudante/Universitário(a))",

}