import React from 'react'

import BannerSRG from './index'
import * as Icons from '../../../shared/icons'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LI/BannerSRG',
    component: BannerSRG,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BannerSRG {...args} />

export const Banner = Template.bind({})
Banner.args = {
    variant: 'banner',    
    handleClickNewProject: () => { alert('Novo Projeto') },
    handleClickAcessHere: () => { alert('acesse aqui') }
}

export const BannerTranslate = Template.bind({})
BannerTranslate.args = {
    variant: 'banner',    
    handleClickNewProject: () => { alert('New Project') },
    handleClickAcessHere: () => { alert('access here') },


    textTypographyText: 'Our problem-solving tool guides you through agile cycles of learning, collaboration, and experimentation.',
    buttonCreateNewProject: 'Create a new project',
    textTypographyPovOver: 'Before starting your journey, check out our support material and be prepared for your first project!',
    buttonLinkAccessHere: 'Access here',
    idioma: 'en-US',
}
