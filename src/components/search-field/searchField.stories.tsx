import React from 'react'

import SearchField from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/Search Field',
    component: SearchField,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SearchField {...args} />

export const normal = Template.bind({})
normal.args = {
    label: "Label",
    hasSearchIcon: true,
    placeholder: "Input Text",
    textButton: "Search",
    className: null,
    handleClickButton: () => alert('Click'),
}

export const withoutIcon = Template.bind({})
withoutIcon.args = {
    label: "Label",
    placeholder: "Input Text",
    textButton: "Button CTA",
    className: null,
    handleClickButton: () => alert('Click'),
}


export const withoutLabel = Template.bind({})
withoutLabel.args = {
    placeholder: "Input Text",
    textButton: "Button CTA",
    className: null,
    handleClickButton: () => alert('Click'),
}