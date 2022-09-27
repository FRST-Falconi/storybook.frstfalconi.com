import React from "react"

type enumVariant = 'default' | 'recover' | 'newPassword' | 'sendConfirmation'

export interface ILogin {
    variant?: enumVariant;    
    style?: React.CSSProperties,
    handleClickForgotPassword?: () => void,
    handleClickLogin?: (email, password, keepConnected) => void,
    handleClickNotCancel?: () => void,
    handleClickComeBack?: () => void,
    handleClickButtonSend?: () => void
    handleClickSave?: (newPassword, confirmPassword) => void
    handleClickSubmit?: (email) => void,
    isError?: boolean
}
