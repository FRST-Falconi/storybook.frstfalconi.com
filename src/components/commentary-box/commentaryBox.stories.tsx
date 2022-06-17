import React from 'react'

import CommentaryBox from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Learning Tech/Commentary Box',
    component: CommentaryBox,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CommentaryBox {...args} />

export const normal = Template.bind({})
normal.args = {
    name: 'Nome Segundo Nome Sobrenome',
    position: "Estudante/Universitário(a) de Tecnologia de Informação",
    date: "1 dia atrás",
    value: "What is Lorem Ipsum? \n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. https://frstfalconi.com/",

    isMe: true,
    isAuthor: true,
    detectLinks: true,
    wasEdited: true,   
    hasAnswer: true, 
    hasDropdown: true,
    isPrivateAuthor: false,
    isPrivateMe: false,
    isLiked: true,
    totalLikes: 5,

    actionLike:(e : any) => { alert("Curtir") },
    actionAnswer: (e : any) => { alert("Responder") },
    onChange:(e : any) => { alert("onChange") },
    actionEditComment:(e : any) => { alert("editComment") },
    actionDeleteComment:(e : any) => { alert("deleteComment") },
    actionMakePrivate:(e : any) => { alert("makePrivate") },
    actionUpdateValue:(e : any) => { alert("updateValue: " + e) },

    styles: { margin: '0 0 0 28px'},
    textYou: 'Você',
    textPrivateComment: 'Comentário Privado',
    textEdited: 'editado',
    textLiked: 'Curtir',
    textUnliked: 'Descurtir',
    textAnswer: 'Responder',
    textMakePrivate: 'Tornar Privado',
    textMakePublic: 'Tornar Público',
    textEditComment: 'Editar Comentário',
    textDeleteComment: 'Excluir Comentário',

    className: null,
    idTextComment: '',
}