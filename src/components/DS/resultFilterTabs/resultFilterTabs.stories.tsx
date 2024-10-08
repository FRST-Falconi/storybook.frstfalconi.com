import React from 'react'
import {ResultFilterTabs} from './index'

export default {
    title: 'DS/ResultFilterTabs',
    component: ResultFilterTabs
}

const Template = (args) => <ResultFilterTabs {...args} />


export const withEditing = Template.bind({})
withEditing.args = {
    results: [
        { value: 30, targetDate: '12/10/24' },
        { value: 50, targetDate: '20/11/24' },
    ],
    onTabChange: () => {
        alert('Tab clicada:');
    },
}


export const noEditing = Template.bind({})
noEditing.args = {
    results: [
        { value: 30, targetDate: '12/10/24' },
        { value: 50, targetDate: '20/11/24' },
    ],
    onTabChange: () => {
        alert('Tab clicada:');
    },
    showEditOption: false
}