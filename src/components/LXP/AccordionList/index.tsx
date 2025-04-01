import { ArrowScrollLeft, Check_circle } from '@shared/icons'
import React, { useEffect, useState } from 'react'
import { FRSTTheme } from '../../../theme'

import * as S from './AccordionList.styles'
import { Box } from '@mui/material'
import ProgressBar from '../progressBar'
import { CheckCircle } from '@mui/icons-material'

type TAccordionListprops = {
  title?: string
  children?: React.Component
  isOpen?: boolean
  setIsOpen: any
  selectedItem: boolean
  style?: React.CSSProperties
  isOldAccordionList?: boolean
  value?: number,
  darkMode?: boolean
}

export default function AccordionList({
  title = 'Módulo',
  children,
  isOpen = false,
  setIsOpen,
  isOldAccordionList = true,
  selectedItem,
  style = {} ,
  value,
  darkMode = false
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
    <S.StylesAccordionList darkMode={darkMode} theme={FRSTTheme} selectedItem={selected} style={{ ...style }} isOldAccordionList={isOldAccordionList} className={selected ? 'open' : 'closed'}>
      <div onClick={handleSetOpen} className={selected ? 'header open' : 'header closed'}>
        <div className="title-container">
          <p className="title">{title}</p>
          {
            !isOldAccordionList && value === 100 ? (
              <S.ContainerComplete>
              <Check_circle /> {/* Ícone antes de "Completo" */}
              <S.CompleteText darkMode={darkMode}>Completo</S.CompleteText>
            </S.ContainerComplete>
            ) : (
              !isOldAccordionList && 
              <Box width={'135px'} marginTop={'22px'}>
                <ProgressBar bgColor='#F26818' value={value} trackColor='#E0E0E0' colorText={darkMode ? '#EBEBEB' : '#444444'}/>
              </Box>
            )
          }
        </div>
        <span className={open ? 'open' : 'closed'}>
          <ArrowScrollLeft height="16" width="16" fill={darkMode ? 'white' : 'black'} />
        </span>
      </div>
      {open && <div className="listContent">{children}</div>}
    </S.StylesAccordionList>
  );
}
