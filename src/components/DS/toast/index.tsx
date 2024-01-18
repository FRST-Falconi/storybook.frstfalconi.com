import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { CloseIcon, ErrorInCicleIcon } from '@shared/icons'
import {CircledCheck} from '../../../../public/customIcons/CheckCircle'
import {ToastWrapper, Icon, Text, CloseButton} from './toast.styles';
import {ToastProps} from './toast.types'


export const Toast = ({ type = 'success' , message, onClose , showBySeconds= 5}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, showBySeconds * 1000)

    return () => clearTimeout(timer)
  }, [onClose])


  return (
    <ThemeProvider theme={FRSTTheme}>
      <ToastWrapper style={{}}>
        <Icon>{type==='error'? <ErrorInCicleIcon width='22' height='22'/>: <CircledCheck/>}</Icon>
        <Text>{message}</Text>
        <CloseButton onClick={onClose}><CloseIcon width='14' height='14'/></CloseButton>
      </ToastWrapper>
    </ThemeProvider>
  )
}