import React from 'react'

import FieldSearch from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/FieldSearch',
    component: FieldSearch,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FieldSearch {...args} />

export const normal = Template.bind({})
normal.args = {
    variant: 'LXP',
    loading: false,
    textLoading: 'Carregando...',
    placeholder: 'O que você busca?', 
    value: 'Default to show options',
    onChange: (e) => alert(e.target.value),
    hasListResult: true, 
    listResults: [
        {id: '1', label: 'List Entry', onClick: (e) => alert(e)},
        {id: '2', label: 'List Entry', onClick: (e) => alert(e)},
        {id: '3', label: 'List Entry', onClick: (e) => alert(e)},
        {id: '4', label: 'List Entry', onClick: (e) => alert(e)}

    ], 
    hasOptionSeeAll: true, 
    seeAll: {id: '9', label: 'Ver todos os resultados', onClick: (e) => alert(e)},
    style: { width: '332px' }
}
