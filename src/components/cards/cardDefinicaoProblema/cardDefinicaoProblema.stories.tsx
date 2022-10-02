import React from 'react'

import CardDefinicaoProblema from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Cards/CardDefinicaoProblema',
    component: CardDefinicaoProblema,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardDefinicaoProblema {...args} />



export const NovoProblema = Template.bind({})
NovoProblema.args = {

    problemStatus: "naoIniciou",

    cardTitle: "Space Race Game",
    cardDescription: "Nossa ferramenta guia de resolução de problemas em ciclos ágeis de aprendizado, colaboração e experimentação.",
    typeButton: 1,
    problemId: '123',
    handleClick: (problemId) => { alert(problemId)}
}

export const NovoProblemaTranslate = Template.bind({})
NovoProblemaTranslate.args = {

    statusTextNaoIniciou: 'Not started',
    textStatusFinalizado: 'Finished',
    textStatusProximosPassos: 'Next steps',
    textStatusResultadosAprendizados: 'Tests performed',
    textStatusTestesRealizados: 'Tests Performed',
    textStatusHipotesesLevantadas: 'Hypotheses raised',
    textsStatusProblemaDefinido: 'Problem Defined',
    textStatusProblemaCriado: 'Problem created',
    textButtomDefinirProblema: 'Define Problem',
    textButtomHipotesesLevantadas: 'Hypotheses raised',
    textButtonVisualizar: 'To view',
    textButtonContinue:'Continue',

    problemStatus: "naoIniciou",

    cardTitle: "Space Race Game",
    cardDescription: "Nossa ferramenta guia de resolução de problemas em ciclos ágeis de aprendizado, colaboração e experimentação.",
    typeButton: 1,
    problemId: '123',
    handleClick: (problemId) => { alert(problemId)}
}


export const EditarProblema = Template.bind({})
EditarProblema.args = {

    problemStatus: "problemaDefinido",

    cardTitle: "Problema",
    cardDescription: "Aumentar o engajamento dos alunos na plataforma",
    typeButton: 2,
    problemId: '123',
    handleClick: (problemId) => { alert(problemId)},
    handleToView: () => { alert('View')}

}

export const EditarProblemaTranslate = Template.bind({})
EditarProblemaTranslate.args = {

    statusTextNaoIniciou: 'Not started',
    textStatusFinalizado: 'Finished',
    textStatusProximosPassos: 'Next steps',
    textStatusResultadosAprendizados: 'Tests performed',
    textStatusTestesRealizados: 'Tests Performed',
    textStatusHipotesesLevantadas: 'Hypotheses raised',
    textsStatusProblemaDefinido: 'Problem Defined',
    textStatusProblemaCriado: 'Problem created',
    textButtomDefinirProblema: 'Define Problem',
    textButtomHipotesesLevantadas: 'Hypotheses raised',
    textButtonVisualizar: 'To view',
    textButtonContinue:'Continue',

    problemStatus: "problemaDefinido",

    cardTitle: "Problema",
    cardDescription: "Aumentar o engajamento dos alunos na plataforma",
    typeButton: 2,
    problemId: '123',
    handleClick: (problemId) => { alert(problemId)},
    handleToView: () => { alert('View')}

    

}
