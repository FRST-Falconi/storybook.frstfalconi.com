import React from 'react'

import FeedInteraction from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Feed Interaction',
    component: FeedInteraction,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FeedInteraction {...args} />

export const Challenge = Template.bind({})
Challenge.args = {
    id: 'abc',
    qtdLikes: '23 pessoas',
    qtdComments: '1 comentário',
    textLikes: 'Curtir',
    textDeslike: 'Descurtir',
    textComments: 'Comentar',
    textAvaluation: 'Avaliar',
    isLiked: true,
    textAvaluationTitle: 'Como você avalia esse desafio?',
    isChallengeReview: true,
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
    onCommentChange: (e) => console.log(e.target.value)
}

export const Post = Template.bind({})
Post.args = {
    id: 'abc',
    qtdLikes: '23 pessoas',
    qtdComments: '2 comentários',
    textLikes: 'Curtir',
    textDeslike: 'Descurtir',
    textComments: 'Comentar',
    textAvaluation: 'Avaliar',
    isLiked: false,
    textAvaluationTitle: 'Este conteúdo foi útil para você?',
    isPostReview: true,
    ratingPostReview: 0,

    userCommentPlaceholder: 'Escreva seu comentário aqui...',
    textLatestComment: 'Comentário mais recente:',
    commentList: [
        {
            name: 'Roberto Lima',
            date: '1 minuto atrás',
            position: 'Estudante/Universitário(a) de Tecnologia da Informação',
            value: `Oi, Rayana!
Muito bom o seu projeto! No momento estou lidando com um problema bem parecido e estava com dúvidas na etapa de testes. Os seus foram bem definidos e me deram ideias de como posso me organizar por aqui.`,
            onChange: () => alert('mudança!'),
            handleLike: () => alert('Liked'),
            textLike: 'Curtir',
            textDeslike: 'Descurtir',
            isLiked: false
        },
        {
            name: 'Marlon Pereira',
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
    ],
    textLoadMoreComments: 'Carregar mais comentários',

    handlePostReviewChange: (e) => alert(e),
    handleLikeClick: () => alert('Click'),
    onCommentChange: (e) => console.log(e.target.value)
}