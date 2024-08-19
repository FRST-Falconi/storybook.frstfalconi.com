import React from 'react'
import { ToastV2, showToastV2 } from './index'
import { ToastProps } from './toast-v2.types'
import MiniButton from '../../mini-button'

export const ToastDemo = (props: ToastProps) => {
  return (
    <>
      <MiniButton variant="primary" label="Mostrar Toast" onClick={() => showToastV2(props)} />
      <ToastV2 />
    </>
  )
}
