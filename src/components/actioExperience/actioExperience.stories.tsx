import React from 'react'
import { ActioExperience } from '.'

export default {
    title: 'Base/ActioExperience',
    component: ActioExperience,
    parameters: {
        layout: 'centered'
    }
}

const Template = (args: any) => <ActioExperience {...args} />

export const Default = Template.bind({})

Default.args = {
    handleClickTune: () => {
        console.log('Clicou em Tune - Indicadores estratégicos da empresa')
        alert('Redirecionando para Tune...')
    },
    handleClickLift: () => {
        console.log('Clicou em Lift - Seu desenvolvimento e da sua equipe')
        alert('Redirecionando para Lift...')
    }
}

Default.storyName = 'Modal ActioExperience'
