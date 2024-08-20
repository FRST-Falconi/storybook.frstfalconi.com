import 'react-toastify/dist/ReactToastify.css'

import React from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

export const StyledContainer = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 8px !important;
    min-height: 54px !important;
  }
  .Toastify__toast-body {
    color: #000 !important;
    font-family: Pt Sans;
    font-weight: 400;
    line-height: 18.12px;
    font-size: 14px;
  }
`
