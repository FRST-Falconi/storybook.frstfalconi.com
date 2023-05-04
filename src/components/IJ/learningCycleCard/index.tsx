import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './learningCycleCardStyle'
import { LearningCycleCardI } from './learningCycleCard'

import { IconUp } from '@shared/icons'
import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Divider, Rating, Typography } from '@mui/material'

import CardMenu from './components/menu'

export default function LearningCycleCard({
  id,
  tag,
  name,
  favorite,
  labels,

  modulesList,
  handleClick,
  handleFavorite,
  disabled,
  style
}: LearningCycleCardI) {
  const [selectedItem, setSelectedItem] = useState(null)
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const [isFavorite, setIsFavorite] = useState(favorite || false)

  const handleSelectedItem = (id: string | number) => {
    setIsAccordionOpen(!isAccordionOpen)
    setSelectedItem(id)
  }

  const handleQuantityGroups = (quantity: number | string) => {
    if (Number(quantity) < 10) {
      return `0${quantity}`
    } else {
      return quantity
    }
  }

  const FavoriteStar = () => {
    return (
      <Rating
        id="favoriteStar"
        value={isFavorite ? 1 : 0}
        max={1}
        onChange={() => {
          setIsFavorite(!isFavorite)
          handleFavorite()
        }}
      />
    )
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.WrapperCard disabled={disabled} status={tag} style={{ ...style }}>
        <Styles.TagArea>
          <Styles.TagStatus disabled={disabled}>{tag}</Styles.TagStatus>
          <Styles.Actions>
            <FavoriteStar />
            <CardMenu />
          </Styles.Actions>
        </Styles.TagArea>
        <Styles.CycleName>{name}</Styles.CycleName>

        <Styles.AccordionList disabled={disabled}>
          <Accordion expanded={selectedItem === id && isAccordionOpen} onChange={() => handleSelectedItem(id)}>
            <AccordionSummary expandIcon={<IconUp />} aria-controls="panel1bh-content" id="panel1bh-header">
              <Styles.AccortionTitle>
                <span>{handleQuantityGroups(modulesList?.length)}</span> <span> {labels?.groupsLabel} </span>
                {labels?.groupsQuantityDescription}
              </Styles.AccortionTitle>
            </AccordionSummary>
            {!disabled && isAccordionOpen && <Divider sx={{ marginBottom: '5px' }} />}
            <AccordionDetails>
              <Styles.DataList>
                {modulesList?.map((item, index) => (
                  <Styles.DataListItem key={index}>{item.name}</Styles.DataListItem>
                ))}
              </Styles.DataList>
            </AccordionDetails>
            {isAccordionOpen && <Divider sx={{ marginTop: '5px' }} />}
            <Styles.Button onClick={handleClick}>{labels?.actionButton}</Styles.Button>
          </Accordion>
        </Styles.AccordionList>
      </Styles.WrapperCard>
    </ThemeProvider>
  )
}
