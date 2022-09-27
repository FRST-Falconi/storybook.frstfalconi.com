import React from 'react'

import Login from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/Login',
    component: Login,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Login {...args} />

export const Default = Template.bind({})
Default.args = {
    variant: 'default',    
    handleClickForgotPassword: () => { alert('Esqueceu senha!') },
    handleClickLogin: (email, password) => { alert(`email: ${email}, senha: ${password}`) },
    isError: true
}

export const Recover = Template.bind({})
Recover.args = {
    variant: 'recover',    
    handleClickSubmit: (email) => { alert(`Email: ${email}`) },
    handleClickNotCancel: () => { alert('Não, cancela')},
    isError: true
}

export const NewPassword = Template.bind({})
NewPassword.args = {
    variant: 'newPassword',    
    handleClickSave: (newPassword, confirmPassword) => { alert(`Nova Senha: ${newPassword}, Cofirma Senha: ${confirmPassword}`) },
    handleClickComeBack: () => { alert('Voltar Login')}
}

export const SendConfirmation = Template.bind({})
SendConfirmation.args = {
    variant: 'sendConfirmation',    
    handleClickButtonSend: () => { alert('retornar') }    
}