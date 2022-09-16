import React from 'react'

import Thumbnails from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/Thumbnails',
    component: Thumbnails,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Thumbnails {...args} />

export const Default = Template.bind({})
Default.args = {
    variant: 'default',
    label: 'Label',
    src: '',
    title: 'Blockchain e criptomoedas',    
    handleClickCourse: () => { alert('Indo para o curso') },
    handleClickContent: () => { alert('Click conteúdo') },
    handleChange: (checkedValue) => { console.log(`curso ativado=${checkedValue}`)}
}

export const Add = Template.bind({})
Add.args = {
    variant: 'add',
    handleClickNew: () => { alert('Adicionado novo curso') },
}