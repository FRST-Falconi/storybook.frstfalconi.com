import React from 'react'

import CommentaryBox from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Issues Feed/Commentary Box',
    component: CommentaryBox,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CommentaryBox {...args} />

export const normal = Template.bind({})
normal.args = {
    name: 'Nome Segundo Nome Sobrenome',
    className: null,
    styles: { margin: '0 0 0 28px'},
    position: "Estudante/Universitário(a) de Tecnologia de Informação",
    value: "Olá, pessoal! Tudo bem? \n\nEstou iniciando a trilha Digital Business Mindest essa semana e pensei nesse problema para resolver! Por favor, quem tiver algum feedback ou algum insight que possa me ajudar, estou 100% aberto! Obrigado! https://google.com ",
    date: "1 dia atrás",
    isMe: true,
    isPrivate: true,
    detectLinks: true,
    like:(e : any) => { alert("Curtir") },
    answer: (e : any) => { alert("Responder") },
    deleteComment:(e : any) => { alert("deleteComment") },
    editComment:(e : any) => { alert("editComment") },
    makePrivate:(e : any) => { alert("makePrivate") },
    updateValue:(e : any) => { alert("updateValue->" + e) },
    onChange:(e : any) => { alert("onChange") },
    idTextComment: null,
    wasEdited: true,
}

// name={item.name}
// className={null}
// position={item.position}
// value={item.value}
// date={item.date}
// like={() => handleLike(item)}
// answer={() => handleAnswer(item)}
// margin={'0 0 0 28px'}
// style={{ marginLeft: '28px' }}
// isMe={item.isMe}
// deleteComment={() => deleteComment(item)}
// editComment={() => editComment(item)}
// makePrivate={() => makePrivate(item)}
// updateValue={() => updateValue(item)}
// onChange={(e) => handleComment(e, item)}