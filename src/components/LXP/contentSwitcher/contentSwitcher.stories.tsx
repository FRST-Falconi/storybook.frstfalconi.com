import React from 'react'
import ContentSwitcher from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/ContentSwitcher',
    component: ContentSwitcher,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ContentSwitcher {...args} />

export const primary = Template.bind({})
primary.args = {
    label: 'Name item',
    handleClick: () => { alert('Click') }
}

