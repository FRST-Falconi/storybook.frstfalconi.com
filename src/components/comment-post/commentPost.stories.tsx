import React from 'react'

import CommentPost from './index'

import {
    EditIcon,
    TrashIconNew,
    FowardArrow
} from './../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Comment Post',
    component: CommentPost,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CommentPost {...args} />

export const normal = Template.bind({})
normal.args = {
    user: {
        avatar: {
            src: '',
            alt: '',
        },
        name: 'Camila Valadão',
        text: 'Empresa Há • 2 dias'
    },
    like: {
        onClick: () => alert('Like'),
        total: 12
    },
    menuMore: [
        {
            description: 'Editar',
            startIcon: <EditIcon fill='#222'/>,
            onClick: (e) => alert('click edit')
        },
        {
            description: 'Excluir',
            startIcon: <TrashIconNew fill='#C00F00'/>,
            onClick: (e) => alert('click delete'),
            color: '#C00F00'
        },
    ],
    
    isActiveEdit: false,
    
    inputEdit: {
        onChange: (value: any) => alert(value),
        limit: 350,
        hasEmoji: true,
    
        onClickPublish: (e) => alert(e),
        onClickCancel: () => alert('cancel'),
    
        labels: {
            cancel: 'Cancelar',
            publish: 'Publicar',
            save: 'Salvar',
            or: 'ou',
            errorManyChars: 'Reduza seu texto para 350 caracteres.'
        }
    },

    valueComment: 'Aliquam id nulla sed arcu lacinia ultricies. Praesent elementum risus placerat, hendrerit lorem in, consectetur lectus. Mauris molestie in arcu ut venenatis. Pellentesque lorem augue, posuere elementum libero laoreet, fringilla pretium nisl. Sed egestas efficitur dolor. Suspendisse justo enim, ullamcorper ac rhoncus vitae, molestie vehicula tellus.',
    onChangeValueComment: (e) => alert(e),
    
    styles: { width: '250px' }
}
