import React from 'react'

type enumVariant = 'login' | 'newPassword'

export interface ILogin {
  variant?: enumVariant
  style?: React.CSSProperties
  isError?: boolean
  handleClickLogin?: (email, password, keepConnected) => void
  handleClickForgotPassword?: (email) => void
  onClickConfimationBackToLogin?: () => void
  handleClickChangePassword?: (newPassword, confirmPassword, codigoNewPassword) => void
  handleClickChangePasswordCancel?: () => void
}

export interface ILoginTranslate extends ILogin {
  textBoasVindas?: string
  textLoginInformacao?: string
  textoLabelLoginButtonLink?: string
  textInputLoginSenha?: string
  textLoginConectado?: string
  textLoginButton?: string
  textErrorEmailNaoInformado?: string
  textErrorSenhaNaoInformado?: string
  textErrorLoginPropsIsError?: string
  textEmailCadastro?: string
  textEmailCadastro2?: string
  textEmailButtonLinkCancel?: string
  textEmailButtonEnviar?: string
  textEmailErrorNaoPrenchido?: string
  textEmailErrorInvalido?: string
  textEmailErrorPropsIsError?: string
  textConfirmacaoRespostaEmail?: string
  textConfirmacaoButtonRetorna?: string
  textNewPasswordInformacao?: string
  textNewPasswordInput?: string
  textNewPasswordInputConfirma?: string
  textNewPasswordButtonLink?: string
  textNewPasswordButtonSalvar?: string
  textNewPasswordErrorNaoInformada?: string
  textNewPasswordErrorSenhaForte?: string
  textNewPasswordErrorCorfirma?: string
  textNewPasswordErrorIguais?: string
  textNewPasswordErrorInforma?: string
  textNewPasswordInputCodigo?: string
  textNewPasswordInputPlaceholderCodigo?: string
  textNewPasswordErrorCodigo?: string
  confirmEmail?: string
}
