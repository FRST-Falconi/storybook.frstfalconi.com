import React from 'react'

import ProjectLibrary from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LI/ProjectLibrary',
    component: ProjectLibrary,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProjectLibrary {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Biblioteca de projetos',
    handleClickSearchButton: () => alert('busque aqui'),
}

export const DefaultTranslate = Template.bind({})
DefaultTranslate.args = {
    title: 'Biblioteca de projetos',
    language: 'en-US',
    textTitle: 'Project library',
    textPlacerolder: 'Search here.',
    textButton: 'Search',
    handleClickSearchButton: () => alert('search here'),
}



