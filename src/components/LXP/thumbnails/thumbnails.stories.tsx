import React from 'react'

import Thumbnails from './thumbnails'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/Thumbnails',
    component: Thumbnails,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Thumbnails {...args} />

export const Loading = Template.bind({})
Loading.args = {
    variant: 'default',
    isLoading: true,
}

export const Default = Template.bind({})
Default.args = {
    variant: 'default',
    label: 'Label',
    src: '',
    title: 'Blockchain e criptomoedas',
    id: 0,
    index: 0,
    handleClickCourse: () => { alert('Indo para o curso') },
    handleClickContent: () => { alert('Click conteúdo') },
    handleChange: (checkedValue) => { console.log(`curso ativado=${checkedValue}`)},
    handleClickPopOverEdit: () => { alert('editar conteúdo')},
    handleClickPopOverMove: () => { alert('mover para trilha')},
    handleClickPopOverDelete: () => {alert('deletar conteúdo')},
    txtButtonLabel: "See content",
    txtAtivarCurso: "Activate Trail",
    txtPopOverEditContent: "Edit content",
    txtPopOverMoveToTrails: "Move to Trails",
    txtPopOverDeleteContent:"Delete content",
    activeMenuModule: false
}

export const Add = Template.bind({})
Add.args = {
    variant: 'add',
    handleClickNew: () => { alert('Adicionado novo curso') },
    txtCriarNovoCurso: "Create new",
    txtCriarNovoCurso2: "content"
}

