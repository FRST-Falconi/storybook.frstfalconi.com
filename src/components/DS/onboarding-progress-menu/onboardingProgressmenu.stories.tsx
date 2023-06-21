import React from 'react'
import OnboardingProgressMenu from './index'


export default {
    title: 'DS/OnboardingProgressMenu',
    component: OnboardingProgressMenu,
}

const Template = (args) => <OnboardingProgressMenu{...args} />

export const normal = Template.bind({})
normal.args = {
    
}