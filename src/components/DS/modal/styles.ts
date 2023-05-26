import React from 'react'
import styled, { keyframes } from 'styled-components'

interface ModalProps {
  open: boolean
}

export const ModalWrapper = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  overflow-y: auto;
  display: none;

  ${({ open }) => open && `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

interface ModalContentProps {
  width?: string
  style?: React.CSSProperties
  mobileFullPage?: boolean
  animation: string
}

export const ModalContent = styled.div<ModalContentProps>`
  width: 80%;
  max-width: 528px;
  padding: 24px;
  margin: 1rem auto;
  box-sizing: border-box;
  margin-bottom: 100px;
  background: #FFFFFF;
  border: 1px solid #BDBDBD;
  border-radius: 16px;
  margin-top: 10%;
  animation: ${({ animation }) => {
    switch (animation) {
      case 'blowup':
        return BlowUpAnimation
      case 'fade':
        return FadeAnimation
      case 'slideup':
        return SlideUpAnimation
      case 'slidedown':
        return SlideDownAnimation
      default:
        return 'none'
    }
  }} 0.3s ease-in-out;

  ${({ width }) => width && `
    max-width: ${width};
  `}

  ${({ mobileFullPage }) => mobileFullPage === true && `
    @media (max-width: 768px) {
      margin: 0 !important;
      width: 100%;
      border-radius: 0 !important;
      min-height: 100vh !important;
    }
  `}
`

const BlowUpAnimation = keyframes`
  0% { transform: scale(0) }
  100% { transform: scale(1) }
`

const FadeAnimation = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

const SlideUpAnimation = keyframes`
  0% { transform: translateY(100%) }
  100% { transform: translateY(0) }
`

const SlideDownAnimation = keyframes`
  0% { transform: translateY(-100%) }
  100% { transform: translateY(0) }
`

export const ModalHeader = styled.div`
  position: relative;
  height: 20px;
`

export const ModalCloseButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`