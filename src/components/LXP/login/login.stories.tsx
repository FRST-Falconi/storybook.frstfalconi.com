import React from 'react'

import Login from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/Login',
    component: Login,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Login {...args} />

export const LoginComponent = Template.bind({})
LoginComponent.args = {
    variant: 'login',    
    isError: false,    
    handleClickLogin: (email, password) => { alert(`email: ${email}, senha: ${password}`) },
    handleClickForgotPassword: (email) => { alert(`emailRecuperado: ${email}`)},
    onClickConfimationBackToLogin: () => { alert('confirmação enviada com sucesso. Retornar para login') }
}

export const NewPassword = Template.bind({})
NewPassword.args = {
    variant: 'newPassword',    
    handleClickChangePassword: (newPassword, confirmPassword) => { alert(`Nova Senha: ${newPassword}, Cofirma Senha: ${confirmPassword}`) },
    handleClickChangePasswordCancel: () => { alert('Voltar Login')}
}

export const LoginTranslate = Template.bind({})
LoginTranslate.args = {
    variant: 'login',    
    isError: false,    
    handleClickLogin: (email, password) => { alert(`email: ${email}, senha: ${password}`) },
    handleClickForgotPassword: (email) => { alert(`emailRecuperado: ${email}`)},
    onClickConfimationBackToLogin: () => { alert('confirmação enviada com sucesso. Retornar para login') },
    textBoasVindas: 'Welcome',
    textLoginInformacao: 'To access, fill in the fields below:',
    textoLabelLoginButtonLink: 'Forgot password?',
    textInputLoginSenha: 'Password',
    textLoginConectado: 'keep me logged in',
    textLoginButton: 'Login',    
    textErrorEmailNaoInformado: 'E-mail not informed',
    textErrorSenhaNaoInformado: 'Password Not Informed',
    textErrorLoginPropsIsError: 'Incorrect email or passwords.',
    textEmailCadastro: 'Enter your registration email below and click send.',
    textEmailCadastro2: 'We will send you an email with a link to reset your password.',
    textEmailButtonLinkCancel: 'No, cancel',
    textEmailButtonEnviar: 'Submit',
    textEmailErrorNaoPrenchido: 'unfilled e-mail',
    textEmailErrorInvalido: 'invalid e-mail',
    textEmailErrorPropsIsError: 'Error sending password recovery email.',
    textConfirmacaoRespostaEmail: 'Request successfully sent to your email.',
    textConfirmacaoButtonRetorna: 'Return'
}

export const NewPasswordTranslate = Template.bind({})
NewPasswordTranslate.args = {
    variant: 'newPassword',    
    handleClickChangePassword: (newPassword, confirmPassword) => { alert(`Nova Senha: ${newPassword}, Cofirma Senha: ${confirmPassword}`) },
    handleClickChangePasswordCancel: () => { alert('Voltar Login')},
    textNewPasswordInformacao: 'To create a new password, fill in the fields below:',
    textNewPasswordInput: 'New Passaword',
    textNewPasswordInputConfirma: 'Confirm password',
    textNewPasswordButtonLink: 'Back login',
    textNewPasswordButtonSalvar: 'to save',
    textNewPasswordErrorNaoInformada: 'New password not provided.',
    textNewPasswordErrorSenhaForte: 'Your password must be at least 8 characters long and include at least one letter, one number and one special character.',
    textNewPasswordErrorCorfirma: 'Password confirmation not provided.',
    textNewPasswordErrorIguais: 'The two passwords must be the same.',
    textNewPasswordErrorInforma: 'Error entering new password'
}