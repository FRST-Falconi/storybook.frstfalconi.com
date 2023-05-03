import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './learningCycleCardStyle'
import { LearningCycleCardI } from './learningCycleCard'

import Avatar from '@components/avatar'
import { IconUp } from '@shared/icons'
import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from '@mui/material'

export default function LearningCycleCard({
  id,
  tag,
  name,
  favorite,
  labels,
  modulesList,
  disabled,
  style
}: LearningCycleCardI) {
  const [selectedItem, setSelectedItem] = useState(null)
  const [typeDetails, setTypeDetails] = useState(null)
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const [accordionState, setAccordionState] = useState({
    competences: false,
    modules: false
  })

  const IS_TYPE_COMPETENCES = typeDetails === 'competences'

  const handleSelectedItem = (id: string | number, type: string) => {
    setIsAccordionOpen(!isAccordionOpen)
    setSelectedItem(id)
    setTypeDetails(type)
    handleAccordionState(type, !accordionState[type])
  }

  const handleAccordionState = (type, value) => {
    setAccordionState({
      ...accordionState,
      [type]: value
    })
  }

  const handleQuantityGroups = (quantity: number | string) => {
    if (Number(quantity) < 10) {
      return `0${quantity}`
    } else {
      return quantity
    }
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.WrapperCard disabled={disabled} status={tag} style={{ ...style }}>
        <Styles.TagArea>
          <Styles.TagStatus disabled={disabled}>{tag}</Styles.TagStatus>
        </Styles.TagArea>
        <Styles.CycleName>{name}</Styles.CycleName>

        <Styles.AccordionList disabled={disabled}>
          <Accordion
            expanded={selectedItem === id && IS_TYPE_COMPETENCES && isAccordionOpen}
            onChange={() => handleSelectedItem(id, 'competences')}
          >
            <AccordionSummary expandIcon={<IconUp />} aria-controls="panel1bh-content" id="panel1bh-header">
              <Styles.AccortionTitle>
                <span>{handleQuantityGroups(labels?.groupsQuantity)}</span> <span> {labels?.groupsLabel} </span>
                {labels?.groupsQuantityDescription}
              </Styles.AccortionTitle>
            </AccordionSummary>
            {isAccordionOpen && <Divider sx={{ marginBottom: 2 }} />}
            <AccordionDetails>
              <Styles.DataList>
                {modulesList?.map((item, index) => (
                  <Styles.DataListItem key={index}>{item.name}</Styles.DataListItem>
                ))}
              </Styles.DataList>
            </AccordionDetails>
          </Accordion>
        </Styles.AccordionList>
      </Styles.WrapperCard>
    </ThemeProvider>
  )
}
