import React from 'react'

import InputComment from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Input Comment Post-It',
    component: InputComment,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InputComment {...args} />

export const normal = Template.bind({})
normal.args = {
    placeholder: 'Placeholder',
    limit: 550,
    avatar: {
        src: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
        alt: 'Alt example'
    },
    onChange: (e : any) => console.log(e),
    hasEmoji: true,
    showCharacterCounter: true,
    emojiWindowlanguage: 'pt',
    labels: {
        cancel: 'Cancelar',
        publish: 'Publicar',
        save: 'Salvar',
        or: 'ou',
        errorManyChars: 'Reduza seu texto para 350 caracteres.'
    },
    styles: {
        marginTop: '100px',
        width: '250px'
    },
    onClickPublish: (e) => alert(e)
}