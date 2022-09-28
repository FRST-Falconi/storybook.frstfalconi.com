import React from 'react'

import ItemGlobalMenu from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/Item Global Menu',
    component: ItemGlobalMenu,
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'LXP']
        },
        type: {
            control: 'select',
            options: ['menu', 'submenu']
        }
    }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ItemGlobalMenu {...args} />

export const normal = Template.bind({})
normal.args = {
    variant: 'default',
    type: 'menu',
    label: 'Início',
    onClick: (e) => alert('Click'),
    style: { height: '40px' }
}

export const LXP = Template.bind({})
LXP.args = {
    variant: 'LXP',
    type: 'menu',
    label: 'Início',
    onClick: (e) => alert('Click'),
    style: { height: '40px' }
}