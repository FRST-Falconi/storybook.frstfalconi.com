import React from 'react'

import PostFeed from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Post Feed',
    component: PostFeed,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostFeed {...args} />

export const Text = Template.bind({})
Text.args = {
    title: 'O título do post será escrito aqui e seu limite máximo será de 125 caracteres de texto.',
    description: "Você já conhece a nossa ferramenta guia de resolução de problemas, o **Space Race Game**? \n\nEla será utilizada em um ciclo ágil de aprendizado, colaboração e experimentação, aonde você selecionará um problema real da sua empresa para solucionar. Essa jornada contará com cinco etapas: **Definição do problema, Levantamento de hipóteses, Testes realizados, Resultados e aprendizados e Próximos passos**.\n\nQue tal testar na prática? Clique no botão abaixo para criar seu primeiro problema:",
    isVisibleComments: true,
    textPostButton: 'Botão CTA',
    handlePostButtonClick: () => alert('Clicado!'),

    isCompletePost: false,
    
    userAvatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
    postId: 'abc',
    qtdLikes: '23 pessoas',
    qtdComments: '2 comentários',
    textLikes: 'Curtir',
    textDeslike: 'Descurtir',
    textComments: 'Comentar',
    textAvaluation: 'Avaliar',
    isPostLiked: false,
    textAvaluationTitle: 'Este conteúdo foi útil para você?',
    ratingPostReview: 0,

    fixPostButton: {
        isVisibleButton: true,
        textFixed: 'Concluir',
        textUnfix: '',
        textTooltip: 'Ao concluir, posts mais recentes aparecerão primeiro na tela',
        actionClick: () => alert('Click')
    },

    // userCommentPlaceholder: 'Comente aqui sobre este projeto...',
//     commentList: [
//         {
//             name: 'Roberto Lima',
//             date: '1 minuto atrás',
//             position: 'Estudante/Universitário(a) de Tecnologia da Informação',
//             value: `Muito bom este conteúdo! Vai me ajudar bastante ao longo da minha jornada com a FRST.`,
//             onChange: () => alert('mudança!'),
//             actionLike: () => alert('Liked'),
//             textLike: 'Curtir',
//             textDeslike: 'Descurtir',
//             isLiked: false,
//             totalLikes: 3,
//             isAuthor: false,
//             isMe: false,
//             hasDropdown: true,
//             detectLinks: true,
//             actionEditComment: () => alert('Edit'),
//             textEditComment: 'Editar Comentário',
//             actionMakePrivate: () => alert('Privado'),
//             textMakePrivate: 'Tornar Privado',
//             textMakePublic: 'Tornar Público',
//             textEdited: 'editado',
//             actionDeleteComment: () => alert('Delete'),
//             textDeleteComment: 'Excluir Comentário',
//             actionUpdateValue: (e) => alert('update: ' + e),
//             textSaveButton: 'Save changes',
//             textSaveButtonMobile: 'Save',
//             textCancelButton: 'Cancel',
//         },
//         {
//             name: 'Marlon Pereira',
//             date: '1 minuto atrás',
//             position: 'Estudante/Universitário(a) de Tecnologia da Informação',
//             value: `Oi, Rayana!
// Muito bom o seu projeto! No momento estou lidando com um problema bem parecido e estava com dúvidas na etapa de testes. Os seus foram bem definidos e me deram ideias de como posso me organizar por aqui.`,
//             onChange: () => alert('mudança!'),
//             actionLike: () => alert('Liked'),
//             textLike: 'Curtir',
//             textDeslike: 'Descurtir',
//             isLiked: true,
//             totalLikes: 3,
//             isAuthor: true,
//             isMe: true,
//             hasDropdown: true,
//             detectLinks: true,
//             actionEditComment: () => alert('Edit'),
//             textEditComment: 'Editar Comentário',
//             actionMakePrivate: () => alert('Privado'),
//             textMakePrivate: 'Tornar Privado',
//             textMakePublic: 'Tornar Público',
//             textEdited: 'editado',
//             actionDeleteComment: () => alert('Delete'),
//             textDeleteComment: 'Excluir Comentário',
//             actionUpdateValue: (e) => alert('update: ' + e),
//             textSaveButton: 'Save changes',
//             textSaveButtonMobile: 'Save',
//             textCancelButton: 'Cancel',
//         },
//     ],
    textLoadMoreComments: 'Carregar mais comentários',
    // textSaveCommentBtn: 'Salvar',

    // handleSaveCommentBtn: (comment) => alert(comment),
    handlePostReviewChange: (e) => alert(e),
    handleLikeClick: () => alert('Liked!'),
    // onCommentChange: (e) => console.log(e.target.value)

    isCommentV2: true,
    childrenCommentV2: <div style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '50px'}}>MICROFONT COMMENTS</div>
}

export const Image = Template.bind({})
Image.args = {
    title: 'O título do post será escrito aqui e seu limite máximo será de 125 caracteres de texto.',
    description: 'Esse espaço está destinado para o conteúdo textual do post, que será limitado a 800 caracteres.',
    
    isCompletePost: false,

    textPostButton: 'Botão CTA',
    handlePostButtonClick: () => alert('Clicado!'),

    postImage: 'https://i.gyazo.com/865239e98e9e1e30976f1c78506093a5.png',

    fixPostButton: {
        isVisibleButton: true,
        textFixed: 'Concluir',
        textUnfix: '',
        textTooltip: 'Ao concluir, posts mais recentes aparecerão primeiro na tela',
        actionClick: () => alert('Click')
    },

    userAvatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
    postId: 'abc',
    qtdLikes: '23 pessoas',
    qtdComments: '2 comentários',
    textLikes: 'Curtir',
    textDeslike: 'Descurtir',
    textComments: 'Comentar',
    textAvaluation: 'Avaliar',
    isPostLiked: false,
    textAvaluationTitle: 'Este conteúdo foi útil para você?',
    ratingPostReview: 0,

    // userCommentPlaceholder: 'Comente aqui sobre este projeto...',
//     commentList: [
//         {
//             name: 'Roberto Lima',
//             date: '1 minuto atrás',
//             position: 'Estudante/Universitário(a) de Tecnologia da Informação',
//             value: `Muito bom este conteúdo! Vai me ajudar bastante ao longo da minha jornada com a FRST.`,
//             onChange: () => alert('mudança!'),
//             actionLike: () => alert('Liked'),
//             textLike: 'Curtir',
//             textDeslike: 'Descurtir',
//             isLiked: false,
//             totalLikes: 3,
//             isAuthor: true,
//             isMe: true,
//             hasDropdown: true,
//             detectLinks: true,
//             actionEditComment: () => alert('Edit'),
//             textEditComment: 'Editar Comentário',
//             actionMakePrivate: () => alert('Privado'),
//             textMakePrivate: 'Tornar Privado',
//             textMakePublic: 'Tornar Público',
//             textEdited: 'editado',
//             actionDeleteComment: () => alert('Delete'),
//             textDeleteComment: 'Excluir Comentário',
//             actionUpdateValue: (e) => alert('update: ' + e),
//             textSaveButton: 'Save changes',
//             textSaveButtonMobile: 'Save',
//             textCancelButton: 'Cancel',
//         },
//         {
//             name: 'Marlon Pereira',
//             date: '1 minuto atrás',
//             position: 'Estudante/Universitário(a) de Tecnologia da Informação',
//             value: `Oi, Rayana!
// Muito bom o seu projeto! No momento estou lidando com um problema bem parecido e estava com dúvidas na etapa de testes. Os seus foram bem definidos e me deram ideias de como posso me organizar por aqui.`,
//             onChange: () => alert('mudança!'),
//             actionLike: () => alert('Liked'),
//             textLike: 'Curtir',
//             textDeslike: 'Descurtir',
//             isLiked: true,
//             totalLikes: 3,
//             isAuthor: true,
//             isMe: true,
//             hasDropdown: true,
//             detectLinks: true,
//             actionEditComment: () => alert('Edit'),
//             textEditComment: 'Editar Comentário',
//             actionMakePrivate: () => alert('Privado'),
//             textMakePrivate: 'Tornar Privado',
//             textMakePublic: 'Tornar Público',
//             textEdited: 'editado',
//             actionDeleteComment: () => alert('Delete'),
//             textDeleteComment: 'Excluir Comentário',
//             actionUpdateValue: (e) => alert('update: ' + e),
//             textSaveButton: 'Save changes',
//             textSaveButtonMobile: 'Save',
//             textCancelButton: 'Cancel',
//         },
//     ],
    textLoadMoreComments: 'Carregar mais comentários',
    // textSaveCommentBtn: 'Salvar',

    // handleSaveCommentBtn: (comment) => alert(comment),
    handlePostReviewChange: (e) => alert(e),
    handleLikeClick: () => alert('Liked!'),
    // onCommentChange: (e) => console.log(e.target.value)
    isCommentV2: true,
    childrenCommentV2: <div style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '50px'}}>MICROFONT COMMENTS</div>
}

export const Video = Template.bind({})
Video.args = {
    title: 'O título do post será escrito aqui e seu limite máximo será de 125 caracteres de texto.',
    description: 'Esse espaço está destinado para o conteúdo textual do post, que será limitado a 800 caracteres.',
    
    textPostButton: 'Botão CTA',
    handlePostButtonClick: () => alert('Clicado!'),

    fixPostButton: {
        isVisibleButton: true,
        textFixed: 'Fixado',
        textUnfix: 'Desfixar',
        actionClick: () => alert('Click')
    },
    
    postVideoId: 'sY63f5aJy4M',
    videoSource: 'youtube',
    videoWidth: '800',
    videoHeight: '400',

    userAvatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
    postId: 'abc',
    qtdLikes: '23 pessoas',
    qtdComments: '2 comentários',
    textLikes: 'Curtir',
    textDeslike: 'Descurtir',
    textComments: 'Comentar',
    textAvaluation: 'Avaliar',
    isPostLiked: false,
    textAvaluationTitle: 'Este conteúdo foi útil para você?',
    ratingPostReview: 0,

    // userCommentPlaceholder: 'Comente aqui sobre este projeto...',
//     commentList: [
//         {
//             name: 'Roberto Lima',
//             date: '1 minuto atrás',
//             position: 'Estudante/Universitário(a) de Tecnologia da Informação',
//             value: `Muito bom este conteúdo! Vai me ajudar bastante ao longo da minha jornada com a FRST.`,
//             onChange: () => alert('mudança!'),
//             actionLike: () => alert('Liked'),
//             textLike: 'Curtir',
//             textDeslike: 'Descurtir',
//             isLiked: false,
//             totalLikes: 3,
//             isAuthor: true,
//             isMe: true,
//             hasDropdown: true,
//             detectLinks: true,
//             actionEditComment: () => alert('Edit'),
//             textEditComment: 'Editar Comentário',
//             actionMakePrivate: () => alert('Privado'),
//             textMakePrivate: 'Tornar Privado',
//             textMakePublic: 'Tornar Público',
//             textEdited: 'editado',
//             actionDeleteComment: () => alert('Delete'),
//             textDeleteComment: 'Excluir Comentário',
//             actionUpdateValue: (e) => alert('update: ' + e),
//             textSaveButton: 'Save changes',
//             textSaveButtonMobile: 'Save',
//             textCancelButton: 'Cancel',
//         },
//         {
//             name: 'Marlon Pereira',
//             date: '1 minuto atrás',
//             position: 'Estudante/Universitário(a) de Tecnologia da Informação',
//             value: `Oi, Rayana!
// Muito bom o seu projeto! No momento estou lidando com um problema bem parecido e estava com dúvidas na etapa de testes. Os seus foram bem definidos e me deram ideias de como posso me organizar por aqui.`,
//             onChange: () => alert('mudança!'),
//             actionLike: () => alert('Liked'),
//             textLike: 'Curtir',
//             textDeslike: 'Descurtir',
//             isLiked: true,
//             totalLikes: 3,
//             isAuthor: true,
//             isMe: true,
//             hasDropdown: true,
//             detectLinks: true,
//             actionEditComment: () => alert('Edit'),
//             textEditComment: 'Editar Comentário',
//             actionMakePrivate: () => alert('Privado'),
//             textMakePrivate: 'Tornar Privado',
//             textMakePublic: 'Tornar Público',
//             textEdited: 'editado',
//             actionDeleteComment: () => alert('Delete'),
//             textDeleteComment: 'Excluir Comentário',
//             actionUpdateValue: (e) => alert('update: ' + e),
//             textSaveButton: 'Save changes',
//             textSaveButtonMobile: 'Save',
//             textCancelButton: 'Cancel',
//         },
//     ],
    textLoadMoreComments: 'Carregar mais comentários',
    // textSaveCommentBtn: 'Salvar',

    // handleSaveCommentBtn: (comment) => alert(comment),
    handlePostReviewChange: (e) => alert(e),
    handleLikeClick: () => alert('Liked!'),
    // onCommentChange: (e) => console.log(e.target.value)
}

