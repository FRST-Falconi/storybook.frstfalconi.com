import React from 'react'

import ItemLateralMenu from './index'

import * as Icons from '../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Header/Lateral Menu',
    component: ItemLateralMenu,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ItemLateralMenu {...args} />

export const normal = Template.bind({})
normal.args = {
    label: 'Label',
    onClick: () => alert('label'),
    beginComponent: <Icons.Noun/>,
    style: {
        width: '280px' 
    }
}

export const normalSelected = Template.bind({})
normal.args = {
    label: 'Label',
    onClick: () => alert('label'),
    selected: true,
    beginComponent: <Icons.Noun/>,
}

export const compound = Template.bind({})
compound.args = {
    label: 'Label',
    onClick: () => alert('label'),
    beginComponent: <Icons.Noun/>,
    subItems: [
        { label: 'List Entry', onClick: (e) => alert('label') },
        { label: 'List Entry', onClick: (e) => alert('label') },
        { label: 'List Entry', onClick: (e) => alert('label') },
        { label: 'List Entry', onClick: (e) => alert('label') }
    ],
}

export const withButton = Template.bind({})
withButton.args = {
    label: 'Label',
    onClick: () => alert('label'),
    button: {
        label: 'Entrar',
        variant: 'primary',
        onClick: () => alert('Click')
    },
    beginComponent: <Icons.Noun/>
}