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
  handleCloseOnIcon?: () => void,
  propagationOnClose?: boolean
}

export default function Modal({
  children,
  width,
  headerContent,
  style,
  onClose,
  onOpen,
  handleCloseOnIcon,
  animation='BlowUp',
  open = false,
  showHeader = false,
  mobileFullPage = false,
  showCloseButton = false,
  closeOnClickOutside = true,
  propagationOnClose = true,
}: ModalProps): JSX.Element {
  const ModalWrapperRef = useRef(null)
  const ModalContentRef = useRef(null)
  const originalOverflowRef = useRef<string>('')
  const AnimationType = animation.toLowerCase()
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    function handleClickOutside(event: any) {
      const ModalWreapperEl = ModalWrapperRef?.current
      if (ModalWreapperEl === event.target && active) {
        document.body.style.overflow = originalOverflowRef.current
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
      originalOverflowRef.current = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      if (onOpen) onOpen()
    } else {
      document.body.style.overflow = originalOverflowRef.current || ''
    }
    setActive(open)

    return () => {
      document.body.style.overflow = originalOverflowRef.current || ''
    }
  }, [onOpen, open])

  const handleClose = (e: MouseEvent) => {
    if (propagationOnClose) e.stopPropagation()

    document.body.style.overflow = originalOverflowRef.current || ''
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
                  <span onClick={(e: MouseEvent) => (handleCloseOnIcon ? handleCloseOnIcon() : handleClose(e))}>
                    <CloseIcon />
                  </span>
                </ModalCloseButton>
              )}
            </ModalHeader>
          ))}
        {children && children}
      </ModalContent>
    </ModalWrapper>
  )
}
