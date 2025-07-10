import React from 'react'
import { toast, ToastOptions, ToastPosition, CloseButtonProps } from 'react-toastify'

import * as Styled from './toast-v2.styles'
import { ThemeProvider } from 'styled-components'
import { ToastProps } from './toast-v2.types'
import { FRSTTheme } from '../../../theme'
import { CloseIcon, ErrorInCicleIcon } from '@shared/icons'
import { CircledCheck, WarningIcon } from '@public/customIcons'

export const showToastV2 = ({
    type = 'success',
    message,
    showBySeconds = 5,
    styles,
    startICon,
    isHiddenCloseicon,
    handleClick
}: ToastProps) => {
    let iconComponent = startICon
    switch (type) {
        case 'error':
            iconComponent = <ErrorInCicleIcon fill="#C00F00" width="22" height="22" />
            break
        case 'success':
            iconComponent = <CircledCheck width="22" height="22" />
            break
        case 'warning':
            iconComponent = <WarningIcon width="22" height="22" />
            break
        default:
            iconComponent = undefined
    }

    const CustomCloseButton = ({ closeToast }: CloseButtonProps) => (
        <span
            onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                closeToast(e)
            }}
            style={{
                display: 'flex',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: '20px',
                marginLeft: '4px',
                cursor: 'pointer'
            }}
        >
            <CloseIcon width="14" height="14" />
        </span>
    )
    const toastOptions: ToastOptions = {
        position: 'top-right' as ToastPosition,
        autoClose: showBySeconds * 1000,
        closeButton: isHiddenCloseicon ? false : CustomCloseButton,
        icon: startICon ? startICon : iconComponent,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClick: (e) => {
            e?.preventDefault()
            e?.stopPropagation()
            handleClick ? handleClick() : null
        },
        style: styles
    }

    switch (type) {
        case 'info':
            toast.info(message, toastOptions)
            break
        case 'success':
            toast.success(message, toastOptions)
            break
        case 'error':
            toast.error(message, toastOptions)
            break
        case 'warning':
            toast.warn(message, toastOptions)
            break
        default:
            toast(message, toastOptions)
            break
    }
}

export const ToastV2 = () => {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styled.StyledContainer />
        </ThemeProvider>
    )
}
