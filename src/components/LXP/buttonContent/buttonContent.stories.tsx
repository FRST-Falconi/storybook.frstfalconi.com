import React from 'react'

import ButtonContent from './index'
import * as Icons from '../../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/ButtonContent',
    component: ButtonContent,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonContent {...args} />

export const Contents = Template.bind({})
Contents.args = {
    variant: 'content',
    label: 'Label',
    startIcon: <Icons.Noun fill= '#FF4D0D'/>,
    handleClick: () => { alert('Click') }
}

