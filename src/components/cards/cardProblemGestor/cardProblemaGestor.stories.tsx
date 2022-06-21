import React from 'react'

import CardProblemGestor from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Cards/CardProblemGestor',
    component: CardProblemGestor,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <> 
    <CardProblemGestor {...args} /> 
    <CardProblemGestor {...args} />
</>


export const problemaDefinido = Template.bind({}) 
problemaDefinido.args = {
    
    problemID: "bla-blu-fla",
    userName: "Roberto Lima",
    
    userStatus: "problemaDefinido",
    
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
    ratingCurtidas: 24,
        
    
    lastUpdated: 'Atualizado a 2 dias'
}

export const hipoteseLevantada = Template.bind({})
hipoteseLevantada.args = {
    
    problemID: "bla-blu-fla",
    userName: "Roberto Lima",
    
    userStatus: "hipoteseLevantada",
    
    userCargo: "Tecnologia da informação (Estudante/Universitário(a))",
    cardTitle: "Aumentar o engajamento dos alunos na plataforma D2L",
    
    lastUpdated: 'Atualizado a 2 dias'
}

export const resultadosAprendizados = Template.bind({}) 
resultadosAprendizados.args = {
    
    problemID: "bla-blu-fla",
    userName: "Roberto Lima Ribeiro da Silva Santos",
    
    userStatus: "resultadosAprendizados",
    
    userCargo: "Tecnologia da informação (Estudante/Universitário(a))",
    cardTitle: "Aumentar o engajamento dos alunos na plataforma D2L",
    tags: ['Customer Success', 'Experiência do usuário', 'CSAT'],        
    
    lastUpdated: 'Atualizado a 2 dias'
}