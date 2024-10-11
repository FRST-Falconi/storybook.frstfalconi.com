import React from 'react'
import CardJourney from './index'

export default {
    title: 'DS/CardJourney',
    component: CardJourney
}

const Template = (args) => <CardJourney {...args} />

export const normal =  Template.bind({})
normal.args = {
    style:{width:'290px'},
    userInfo: {
        id: 'd914dacb-d633-4744-9b0a-2b19c2e3f231',
        name: 'Bernardo Silva',
        avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
        description: "Aumentar de 10% para 40% a digitalização de documentos por...",
        colaboracao: "Colabore com Camila Amaral avaliando o seu desafio",
        ButtonText: "Avaliar desafio",
    },
    onClickProfile: () => alert("ir para o perfil?"),
    onClickButton: () => alert("ir para o Desafio"),
    onClickRemove: () => alert("Remover card"),
}

