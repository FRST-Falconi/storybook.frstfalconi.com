import React from 'react'

import Permission from './index'
import * as Icons from '../../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/Permission',
    component: Permission,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Permission {...args} />

export const Administrator = Template.bind({})
Administrator.args = {
    variant: 'Administrador',    
    disabled: false,
    handleChangeAdmin: (checkedValue) => { console.log(`acesso ativado=${checkedValue}`)},   
    handleChangeEditor: (checkedValue) => { console.log(`acesso ativado=${checkedValue}`)},
    handleChangeInstructor: (checkedValue) => { console.log(`acesso ativado=${checkedValue}`)},
    handleChangeViewer: (checkedValue) => { console.log(`acesso ativado=${checkedValue}`)},
    handleChangeMentor: (checkedValue) => { console.log(`acesso ativado=${checkedValue}`)}           
}




