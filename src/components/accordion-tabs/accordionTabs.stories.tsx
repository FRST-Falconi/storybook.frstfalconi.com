import React from 'react'

import Avatar from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/Accordion Tabs',
    component: Avatar,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Avatar {...args} />

export const normal = Template.bind({})
normal.args = {
    titleAccordion: "Escolha abaixo:",
    typeAccordion: 'horizontal',
    typeButtonTab: 'transparent',
    activeTabID: '0',
    titleTabs: [
        {id: 0, title: 'Label', totalCounter: 1, description: 'Tab Internal Title'},
        {id: 1, title: 'Label', totalCounter: 2},
        {id: 2, title: 'Label', totalCounter: 0, description: 'Tab Internal Title - 2'},
        {id: 3, title: 'Label', totalCounter: 3},
        {id: 4, title: 'Label', totalCounter: 5},
        {id: 5, title: 'Label', totalCounter: 3},
    ],
    handleActiveTab: (e) => alert(e),
    hasCleanButton: true,
    handleActionClean: (e) => alert(e),
    hasCounterTab: true,
    textCleanButton: "Excluir filtros",
    children: null
}
