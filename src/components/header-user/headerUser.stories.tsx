import React from 'react'

import HeaderUser from './index'
import { boolean } from 'yargs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Header User',
    component: HeaderUser,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HeaderUser {...args} />

export const normal = Template.bind({})
normal.args = {
    avatar: {
        src: '',
        alt: ''
    },
    name: 'Camila Valadão',
    text: 'Empresa • Há 2 dias'
}

export const large = Template.bind({})
large.args = {
    avatar: {
        src: '',
        alt: ''
    },
    name: 'Camila Valadão',
    text: 'Empresa • Há 2 dias',
    large: true    
}

export const largeWithButton = Template.bind({})
largeWithButton.args = {
    avatar: {
        src: '',
        alt: ''
    },
    name: 'Camila Valadão',
    text: 'Área da empresa • Empresa • Há 2 dias',
    large: true,
    showHandleButtons: true,
    onClickEdit: () => alert('edit'),
    onClickDelete: () => alert('delete')
}
