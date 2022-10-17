import React from 'react'

import SearchBox from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/SearchBox',
    component: SearchBox,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SearchBox {...args} />

export const Default = Template.bind({})
Default.args = {
    textTitle: 'Biblioteca de projetos',
    textPlaceholder: 'Busque aqui.',
    textButton: 'Pesquisar',
    handleClickSearchButton: () => alert('busque aqui'),
    onChange: (e) => console.log(e.target.value)
}

export const DefaultTranslate = Template.bind({})
DefaultTranslate.args = {
    textTitle: 'Project library',
    textPlaceholder: 'Search here.',
    textButton: 'Search',
    handleClickSearchButton: () => alert('search here'),
    onChange: (e) => console.log(e.target.value)
}



