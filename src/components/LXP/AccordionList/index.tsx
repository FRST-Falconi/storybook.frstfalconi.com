import { ArrowScrollLeft } from '@shared/icons'
import React, { useEffect, useState } from 'react'
import { FRSTTheme } from '../../../theme'

import * as S from './AccordionList.styles'

type TAccordionListprops = {
  title?: string
  children?: React.Component
  isOpen?: boolean
  setIsOpen: any
  selectedItem: boolean
}

export default function AccordionList({
  title = 'Módulo',
  children,
  isOpen = false,
  setIsOpen,
  selectedItem
}: TAccordionListprops) {
  const [open, setOpen] = useState(isOpen)
  const [selected, setSelected] = useState(selectedItem)

  const handleSetOpen = () => {
    setOpen((prev) => !prev)
    setIsOpen()
  }

  useEffect(() => {
    if (selectedItem) {
      setOpen(true)
    }
    setSelected(selectedItem)
  }, [selectedItem])

  return (
    <S.StylesAccordionList theme={FRSTTheme} selectedItem={selected} className={selected ? 'open' : 'closed'}>
      <div onClick={handleSetOpen} className={selected ? 'header open' : 'header closed'}>
        <p className="title">{title}</p>
        <span className={open ? 'open' : 'closed'}>
          <ArrowScrollLeft height="16" width="16" />
        </span>
      </div>
      {open && <div className="listContent">{children}</div>}
    </S.StylesAccordionList>
  )
}
