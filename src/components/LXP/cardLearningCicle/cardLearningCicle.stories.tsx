import React from 'react'

import CardLearningCicle from './index'
import * as Icons from '../../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/CardLearningCicle',
    component: CardLearningCicle,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardLearningCicle {...args} />

export const normal = Template.bind({})
normal.args = {    
    handleClick: () => { alert('Click') },
}

export const normalTranslate = Template.bind({})
normalTranslate.args = {    
    handleClick: () => { alert('Click') },
    titleStep1: 'Create Learning Cycle',
    titleStep2: 'Group of participants',
    txtStep2: 'Create or select a participant group to relate to one or more content.',
    titleStep3: 'Content created',
    txtStep3: 'Select one or more content for the selected group to see.',
    titleStep4: 'Calendar',
    txtStep4: 'Select the start date of these contents for this group.'
}

