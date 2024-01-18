import React, { useEffect } from 'react'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { CloseIcon, ErrorInCicleIcon } from '@shared/icons'
import {CircledCheck, CircledAlert} from '../../../../public/customIcons'
import {ToastWrapper, Icon, Text, CloseButton} from './toast.styles';
import {ToastProps} from './toast.types'


export const Toast = ({ type = 'success' , message, onClose , showBySeconds= 5, styles}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, showBySeconds * 1000)

    return () => clearTimeout(timer)
  }, [onClose])

  let iconComponent;
  switch (type) {
    case 'error':
      iconComponent = <ErrorInCicleIcon fill='#C00F00' width='22' height='22' />;
      break;
    case 'success':
      iconComponent = <CircledCheck width='22' height='22' />;
      break;
      case 'alert':
        iconComponent = <CircledAlert width='22' height='22' />;
        break;
    default:
      iconComponent = <CircledAlert width='22' height='22' />;
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <ToastWrapper style={...styles}>
        <Icon>{iconComponent}</Icon>
        <Text>{message}</Text>
        <CloseButton onClick={onClose}><CloseIcon width='14' height='14'/></CloseButton>
      </ToastWrapper>
    </ThemeProvider>
  )
}