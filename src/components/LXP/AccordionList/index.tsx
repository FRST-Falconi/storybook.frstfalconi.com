import { ArrowScrollLeft } from '@shared/icons'
import React, { useState } from 'react'
import { FRSTTheme } from '../../../theme'

import * as S from './AccordionList.styles'

type TAccordionListprops = {
  title?: string
  children?: React.Component
  isOpen: boolean
  setIsOpen: any
}

export default function AccordionList({ title = 'Módulo', children, isOpen = false, setIsOpen }: TAccordionListprops) {
  const [open, setOpen] = useState(isOpen)

  const handleSetOpen = () => {
    setOpen((prev) => !prev)
    setIsOpen()
  }
  return (
    <S.StylesAccordionList theme={FRSTTheme}>
      <div onClick={handleSetOpen} className={open ? 'header open' : 'header closed'}>
        <p className="title">{title}</p>
        <span className={open ? 'open' : 'closed'}>
          <ArrowScrollLeft height="16" width="16" />
        </span>
      </div>
      {open && <div className="listContent">{children}</div>}
    </S.StylesAccordionList>
  )
}
