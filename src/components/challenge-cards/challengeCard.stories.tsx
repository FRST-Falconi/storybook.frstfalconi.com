import React from 'react'

import ChallengeCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Challenge Card',
    component: ChallengeCard,
    argTypes: {
        language: {
            control: 'select',
            options: ['pt-BR', 'pt-PT', 'en-US', 'es']
        },
        variant: {
            control: 'select',
            options: ['srg', 'incompleteMars', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'completed']
        }
    }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ChallengeCard {...args} />

export const normal = Template.bind({})
normal.args = {
    variant: 'mars',
    description: 'Aumentar em 50% o engajamento dos alunos na plataforma.',
    language: 'pt-BR',
    onClickView: () => alert('view project'),
    onClickNewProject: () => alert('new project'),
    onClickContinue: () => alert('click continue'),
    onClickDelete: () => alert('click delete'),
}

export const exibition = Template.bind({})
exibition.args = {
    variant: 'mars',
    description: 'Aumentar em 50% o engajamento dos alunos na plataforma.',
    language: 'pt-BR',
    onClickView: () => alert('view project'),
    
}
