import React from 'react'

import FeedInteractionV2 from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/InteractionV2',
    component: FeedInteractionV2
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FeedInteractionV2 {...args} style={{ marginTop: '100px' }} />

export const Challenge = Template.bind({})
Challenge.args = {
    id: 'abc',
    qtdLikes: '27',
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
    userAvatar: 'https://i.gyazo.com/59d6b73b26541b748ca6a5d167645746.png',
    tooltipLikesText: 'Juliana Scarpa, Jefferson Santos, Thaís Plewka e outras 5 pessoas curtiram esse desafio.',

    // userCommentPlaceholder: 'Escreva seu comentário aqui...',
    // textLatestComment: 'Comentário mais recente:',
    //     latestComment: {
    //         avatar: 'https://i.gyazo.com/59d6b73b26541b748ca6a5d167645746.png',
    //         name: 'Roberto Lima',
    //         date: '1 minuto atrás',
    //         position: 'Estudante/Universitário(a) de Tecnologia da Informação',
    //         value: `Oi, Rayana!
    // Muito bom o seu projeto! No momento estou lidando com um problema bem parecido e estava com dúvidas na etapa de testes. Os seus foram bem definidos e me deram ideias de como posso me organizar por aqui.`,
    //         onChange: () => alert('mudança!'),
    //         actionLike: () => alert('Liked'),
    //         className: 'latestComment',
    //         textLike: 'Curtir',
    //         textDeslike: 'Descurtir',
    //         isLiked: true,
    //         totalLikes: 3,
    //         isAuthor: true,
    //         isMe: true,
    //         hasDropdown: true,
    //         detectLinks: true,
    //         actionEditComment: () => alert('Edit'),
    //         textEditComment: 'Editar Comentário',
    //         actionMakePrivate: () => alert('Privado'),
    //         textMakePrivate: 'Tornar Privado',
    //         textMakePublic: 'Tornar Público',
    //         textEdited: 'editado',
    //         actionDeleteComment: () => alert('Delete'),
    //         textDeleteComment: 'Excluir Comentário',
    //         actionUpdateValue: (e) => alert('update: ' + e),
    //         textSaveButton: 'Save changes',
    //         textSaveButtonMobile: 'Save',
    //         textCancelButton: 'Cancel',
    //     },
    // textSaveCommentBtn: 'Publicar',

    // handleSaveCommentBtn: (comment) => alert(comment),
    handleImpactoChange: (e) => alert(e),
    handleRelevanciaChange: (e) => alert(e),
    handleLikeClick: () => alert('Click'),
    // onCommentChange: (e) => console.log(e.target.value),
    isCommentV2: true,
    childrenCommentV2: (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '50px' }}>
            MICROFONT COMMENTS
        </div>
    )
}

export const ChallengeWithInfoViews = Template.bind({})
ChallengeWithInfoViews.args = {
    id: 'abc',
    qtdLikes: '23',
    qtdComments: '1 comentário',
    textLikes: 'Curtir',
    textDeslike: 'Descurtir',
    textComments: 'Comentar',
    isLiked: true,
    userAvatar: 'https://i.gyazo.com/59d6b73b26541b748ca6a5d167645746.png',
    handleLikeClick: () => alert('Click'),
    textTotalView: '12 Visualizações',
    handleClickTextTotalViews: () => alert('Click Views'),
    isUserLoggedChallenge: true,
    isCommentV2: true,
    childrenCommentV2: (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '50px' }}>
            MICROFONT COMMENTS
        </div>
    )
}