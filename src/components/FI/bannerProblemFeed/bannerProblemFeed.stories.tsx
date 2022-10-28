import React from 'react'

import BannerProblemFeed from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Banner Problem Feed',
    component: BannerProblemFeed,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BannerProblemFeed {...args} />

export const Normal = Template.bind({})
Normal.args = {
    id: 'abc',
    userAvatar: 'https://i.gyazo.com/59d6b73b26541b748ca6a5d167645746.png',
    userName: 'Rayana Gama',
    userPosition: 'Tecnologia da Informação',
    problemTitle: 'Aumentar a venda de produto adicional na loja física',
    problemTags: ['Customer Success', 'Experiência do usuário', 'CSAT'],
    lastUpdated: 'Atualizado hoje',
    lastUpdatedStep: 'Missão 3: Saturno - Testes realizados',
    stepProblem: 5,
    stepActive: 1,
    textButton: 'Mais detalhes',

    language: 'pt-BR',

    step1Title: 'Missão 1: Marte - Definição do Problema',
    textIndicator: 'Indicador',
    indicatorValue: '% de venda de produto adicional',
    textIndicatorSituation: 'Situação atual do indicador',
    indicatorSituationValue: '% (porcentagem)',
    textIndicatorObjective: 'Objetivo com o uso do indicador',
    indicatorObjectiveValue: 'Aumentar',
    textResultsFuture: 'Resultado que gostaria de alcançar no futuro',
    resultsFutureValue: '200% em relação ao produto principal ao fim do ciclo ágil (a cada 1 produto principal vendido, devemos vender 2 itens adicionais)',

    step2Title: 'Missão 2: Júpiter - Hipóteses levantadas',
    textHypotheses: 'Hipótese (priorizada)',
    hypothesesValue: 'Eu acredito que o oferecimento do item adicional pelo vendedor ao cliente pode aumentar a venda dessa variável. Além disso, a experimentação, contato ou aquisição de cohecimento do produto adicional por parte do cliente, pode aumentar a quantidade de itens vendidos.',
    textResponsableAction: 'Responsável pela ação',
    ResponsableActionValue: 'Rayana Ribeiro ',
    textDate: 'Data limite',
    dateValue: '30/06/2022',
    textWhatToDo: 'O que será feito',
    whatToDoValue: 'Acompanhar a oferta de item adicional no ato da venda e durante a experimentação do produto por parte do cliente.',
    textSuccessAction: 'Essa ação terá sido um sucesso, caso eu consiga',
    successActionValue: 'Se percebemos que o cliente vê valor nos produtos oferecidos e adicioná-los à compra.',

    step3Title: 'Missão 3: Saturno - Testes realizados',
    textTestMade: 'Teste feito para essa ação',
    testMadeValue: 'O teste, seguido do acompanhamento do vendedor apresentando as características e benefícios do produto, foi fator positivo na conversão de venda, além de proporcionar ao cliente uma diferenciação no atendimento.',
    textSuccessTest: 'Sucesso desse teste ou ação',
    successTestValue: 4,

    step4Title: 'Missão 4: Urano - Resultados e aprendizados',
    textMainAchievement: 'Principal conquista',
    mainAchievementValue: 'Aumentei a % de venda de produto adicional de 5% para 35% ao final do ciclo ágil.',

    step5Title: 'Missão 5: Netuno - Próximos passos',
    textNextSteps: 'Próximo(s) passo(s)',
    nextStepsValue: 'Elencar mais produtos que possam repassar de modo prático e sem custos adicionais uma melhor experiência ao cliente.',

    qtdLikes: '23 pessoas',
    qtdComments: '1 comentário',
    textLikes: 'Curtir',
    textDeslike: 'Descurtir',
    textComments: 'Comentar',
    textAvaluation: 'Avaliar',
    isLiked: true,
    textAvaluationTitle: 'Como você avalia esse desafio?',
    ratingImpacto: 0,
    textImpacto: 'Impacto',
    ratingRelevancia: 0,
    textRelevancia: 'Relevância',

    userCommentPlaceholder: 'Escreva seu comentário aqui...',
    textLatestComment: 'Comentário mais recente:',
    latestComment: {
        name: 'Roberto Lima',
        date: '1 minuto atrás',
        position: 'Estudante/Universitário(a) de Tecnologia da Informação',
        value: `Oi, Rayana!
Muito bom o seu projeto! No momento estou lidando com um problema bem parecido e estava com dúvidas na etapa de testes. Os seus foram bem definidos e me deram ideias de como posso me organizar por aqui.`,
        onChange: () => alert('mudança!'),
        handleLike: () => alert('Liked'),
        textLike: 'Curtir',
        textDeslike: 'Descurtir',
        isLiked: true
    },

    handleImpactoChange: (e) => alert(e),
    handleRelevanciaChange: (e) => alert(e),
    handleLikeClick: () => alert('Click'),
    onCommentChange: (e) => console.log(e.target.value),

    onSelectedStep: (n) => alert(n),
    onClickButton: () => alert('Ver detalhe')
}