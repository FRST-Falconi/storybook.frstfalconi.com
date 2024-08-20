import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import { toast, ToastOptions, ToastPosition } from 'react-toastify'
import * as Styled from './toast-v2.styles'
import { ThemeProvider } from 'styled-components'
import { ToastProps } from './toast-v2.types'
import { FRSTTheme } from '../../../theme'
import { CloseIcon, ErrorInCicleIcon } from '@shared/icons'
import { CircledAlert, CircledCheck } from '@public/customIcons'

export const showToastV2 = ({ type = 'success', message, showBySeconds = 5, styles }: ToastProps) => {
  let iconComponent
  switch (type) {
    case 'error':
      iconComponent = <ErrorInCicleIcon fill="#C00F00" width="22" height="22" />
      break
    case 'success':
      iconComponent = <CircledCheck width="22" height="22" />
      break
    case 'warning':
      iconComponent = <CircledAlert width="22" height="22" />
      break
    default:
      iconComponent = undefined
  }
  const toastOptions: ToastOptions = {
    position: 'top-right' as ToastPosition,
    autoClose: showBySeconds * 1000,
    closeButton: (
      <span style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto', marginRight: '20px' }}>
        <CloseIcon width="14" height="14" />
      </span>
    ),
    icon: iconComponent,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
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
