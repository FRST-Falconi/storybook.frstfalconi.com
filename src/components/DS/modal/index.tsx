import React, { useEffect, useState, useRef, CSSProperties, ReactNode, MouseEvent } from 'react'

import { ModalWrapper, ModalContent, ModalHeader, ModalCloseButton } from './styles'

import { CloseIcon } from '@shared/icons'

interface ModalProps {
  children?: ReactNode
  width?: string
  headerContent?: any
  open?: boolean
  style?: CSSProperties
  mobileFullPage?: boolean
  showCloseButton?: boolean
  showHeader?: boolean
  onClose?: (event?: MouseEvent | any) => void
  onOpen?: (event?: MouseEvent | any) => void
  closeOnClickOutside?: boolean
  animation?: 'BlowUp' | 'Fade' | 'SlideUp' | 'SlideDown'
  handleCloseOnIcon?: () => void
}

export default function Modal({
  children,
  width,
  headerContent,
  open = false,
  mobileFullPage = false,
  showCloseButton = false,
  showHeader = false,
  style,
  onClose,
  onOpen,
  closeOnClickOutside = true,
  animation,
  handleCloseOnIcon
}: ModalProps): JSX.Element {
  const ModalWrapperRef = useRef(null)
  const ModalContentRef = useRef(null)
  const AnimationType = animation.toLowerCase()
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    function handleClickOutside(event: any) {
      const ModalWreapperEl = ModalWrapperRef?.current
      if (ModalWreapperEl === event.target && active) {
        if (onClose) onClose(event)
        if (closeOnClickOutside === true) setActive(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ModalWrapperRef, active, closeOnClickOutside, onClose])

  useEffect(() => {
    if (open === true) {
      document.body.style.overflow = 'hidden'
      if (onOpen) onOpen()
    } else {
      document.body.style.overflow = 'auto'
    }
    setActive(open)
  }, [onOpen, open])

  const handleClose = (e: MouseEvent) => {
    e.stopPropagation()
    setActive(false)

    if (onClose) onClose(e)
  }

  return (
    <ModalWrapper open={active} ref={ModalWrapperRef}>
      <ModalContent
        style={style}
        width={width}
        mobileFullPage={mobileFullPage}
        ref={ModalContentRef}
        animation={AnimationType}
      >
        {showHeader === true ||
          (showCloseButton === true && (
            <ModalHeader>
              {showCloseButton === true && (
                <ModalCloseButton onClick={(e: MouseEvent) => handleClose(e)}>
                  {headerContent && headerContent}
                  <CloseIcon onClick={(e: MouseEvent) => handleCloseOnIcon() ?? handleClose(e)} />
                </ModalCloseButton>
              )}
            </ModalHeader>
          ))}
        {children && children}
      </ModalContent>
    </ModalWrapper>
  )
}
