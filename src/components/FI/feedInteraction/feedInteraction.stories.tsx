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
    ratingImpacto: 3,
    textImpacto: 'Impacto',
    ratingRelevancia: 4,
    textRelevancia: 'Relevância',

    userCommentPlaceholder: 'Escreva seu comentário aqui...',
    textLatestComment: 'Comentário mais recente:',
    latestComment: {
        avatar: 'https://i.gyazo.com/59d6b73b26541b748ca6a5d167645746.png',
        name: 'Roberto Lima',
        date: '1 minuto atrás',
        position: 'Estudante/Universitário(a) de Tecnologia da Informação',
        value: `Oi, Rayana!
Muito bom o seu projeto! No momento estou lidando com um problema bem parecido e estava com dúvidas na etapa de testes. Os seus foram bem definidos e me deram ideias de como posso me organizar por aqui.`,
        onChange: () => alert('mudança!'),
        actionLike: () => alert('Liked'),
        className: 'latestComment',
        textLike: 'Curtir',
        textDeslike: 'Descurtir',
        isLiked: true,
        totalLikes: 3,
        isAuthor: true,
        isMe: true,
        hasDropdown: true,
        detectLinks: true,
        actionEditComment: () => alert('Edit'),
        textEditComment: 'Editar Comentário',
        actionMakePrivate: () => alert('Privado'),
        textMakePrivate: 'Tornar Privado',
        textMakePublic: 'Tornar Público',
        textEdited: 'editado',
        actionDeleteComment: () => alert('Delete'),
        textDeleteComment: 'Excluir Comentário',
        actionUpdateValue: (e) => alert('update: ' + e),
        textSaveButton: 'Save changes',
        textSaveButtonMobile: 'Save',
        textCancelButton: 'Cancel',
    },
    textSaveCommentBtn: 'Salvar',

    handleSaveCommentBtn: () => alert('Salvado'),
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
            actionLike: () => alert('Liked'),
            textLike: 'Curtir',
            textDeslike: 'Descurtir',
            isLiked: false,
            totalLikes: 3,
            isAuthor: true,
            isMe: true,
            hasDropdown: true,
            detectLinks: true,
            actionEditComment: () => alert('Edit'),
            textEditComment: 'Editar Comentário',
            actionMakePrivate: () => alert('Privado'),
            textMakePrivate: 'Tornar Privado',
            textMakePublic: 'Tornar Público',
            textEdited: 'editado',
            actionDeleteComment: () => alert('Delete'),
            textDeleteComment: 'Excluir Comentário',
            actionUpdateValue: (e) => alert('update: ' + e),
            textSaveButton: 'Save changes',
            textSaveButtonMobile: 'Save',
            textCancelButton: 'Cancel',
        },
        {
            name: 'Marlon Pereira',
            date: '1 minuto atrás',
            position: 'Estudante/Universitário(a) de Tecnologia da Informação',
            value: `Oi, Rayana!
Muito bom o seu projeto! No momento estou lidando com um problema bem parecido e estava com dúvidas na etapa de testes. Os seus foram bem definidos e me deram ideias de como posso me organizar por aqui.`,
            onChange: () => alert('mudança!'),
            actionLike: () => alert('Liked'),
            textLike: 'Curtir',
            textDeslike: 'Descurtir',
            isLiked: true,
            totalLikes: 3,
            isAuthor: true,
            isMe: true,
            hasDropdown: true,
            detectLinks: true,
            actionEditComment: () => alert('Edit'),
            textEditComment: 'Editar Comentário',
            actionMakePrivate: () => alert('Privado'),
            textMakePrivate: 'Tornar Privado',
            textMakePublic: 'Tornar Público',
            textEdited: 'editado',
            actionDeleteComment: () => alert('Delete'),
            textDeleteComment: 'Excluir Comentário',
            actionUpdateValue: (e) => alert('update: ' + e),
            textSaveButton: 'Save changes',
            textSaveButtonMobile: 'Save',
            textCancelButton: 'Cancel',
        },
    ],
    textLoadMoreComments: 'Carregar mais comentários',
    textSaveCommentBtn: 'Salvar',

    handleSaveCommentBtn: () => alert('Salvado'),
    handlePostReviewChange: (e) => alert(e),
    handleLikeClick: () => alert('Click'),
    onCommentChange: (e) => console.log(e.target.value)
}