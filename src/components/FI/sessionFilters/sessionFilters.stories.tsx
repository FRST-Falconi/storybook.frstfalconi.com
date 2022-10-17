import React from 'react'

import SessionFilters from './index'
import * as Icons from '../../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/SessionFilters',
    component: SessionFilters,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SessionFilters {...args} />

export const ButtonMyBusiness = Template.bind({})
ButtonMyBusiness.args = {
    variant: 'buttonMyBusiness',
    label: 'Minha empresa',
    disabled: false,
    startIcon: <Icons.Handshake />,
    handleClick: () => { alert('Click') }
}

export const ButtonMission = Template.bind({})
ButtonMission.args = {
    variant: 'buttonMission',
    label: 'Missão',
    disabled: false,
    startIcon: <Icons.Mission />,
    handleClick: () => { alert('Click') }
}

export const ButtonLamp = Template.bind({})
ButtonLamp.args = {
    variant: 'buttonLamp',
    label: 'Trilha',
    disabled: false,
    startIcon: <Icons.Lamp />,
    handleClick: () => { alert('Click') }
}
