import React from 'react'
import {ResultFilterTabs} from './index'

export default {
    title: 'DS/ResultFilterTabs',
    component: ResultFilterTabs
}

const Template = (args) => <ResultFilterTabs {...args} />


export const normal = Template.bind({})
normal.args = {
    results: [
        { value: 30, targetDate: '2024-10-12' },
        { value: 50, targetDate: '2024-11-20' },
    ],
    onTabChange: () => {
        alert('Tab clicada:');
    },
}
