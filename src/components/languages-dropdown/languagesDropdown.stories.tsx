import React from 'react'

import ItemGlobalMenu from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/Language Select',
    component: ItemGlobalMenu,
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'LXP']
        },
        type: {
            control: 'languages',
            options: ['pt-BR', 'es', 'en-US', 'pt-PT']
        }
    }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ItemGlobalMenu {...args} />

export const normal = Template.bind({})
normal.args = {
    variant: 'default',
    languages: ['pt-BR', 'es', 'en-US', 'pt-PT'],
    selected: 'pt-BR',
    onSelect: (e) => alert(e)
}

export const LXP = Template.bind({})
LXP.args = {
    variant: 'LXP',
    languages: ['pt-BR', 'es', 'en-US', 'pt-PT'],
    selected: 'pt-PT',
    onSelect: (e) => alert(e)
}