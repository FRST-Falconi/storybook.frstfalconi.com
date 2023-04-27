import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './participantCardStyle'
import { ParticipantCardI } from './participantCard'

import Avatar from '@components/avatar'
import Tooltip from '@components/LXP/tooltip'
import { AddPeople, MessageCheckLine, IconUp, IconDown, IconGaps, IconModules } from '@shared/icons'
import { useEffect, useMemo, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

export default function ParticipantCard({ userInfo, labels, competencesList, modulesList, style }: ParticipantCardI) {
  const [selectedItem, setSelectedItem] = useState(null)
  const [typeDetails, setTypeDetails] = useState(null)
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const [accordionState, setAccordionState] = useState({
    competences: false,
    modules: false
  })

  const IS_TYPE_COMPETENCES = typeDetails === 'competences'
  const IS_TYPE_MODULES = typeDetails === 'modules'

  const handleSelectedItem = (id: string, type: string) => {
    setIsAccordionOpen(!isAccordionOpen)
    setSelectedItem(id)
    setTypeDetails(type)
    handleAccordionState(type, isAccordionOpen)
  }

  const handleAccordionState = (type, value) => {
    setAccordionState({
      ...accordionState,
      [type]: value
    })
  }

  useMemo(() => {
    if ((isAccordionOpen && IS_TYPE_COMPETENCES) || (isAccordionOpen && IS_TYPE_MODULES)) {
      handleAccordionState(typeDetails, isAccordionOpen)
    }
  }, [isAccordionOpen, typeDetails])

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.WrapperCard style={{ ...style }}>
        <Styles.TagArea>
          <Styles.TagStatus> Cadastrado</Styles.TagStatus>
        </Styles.TagArea>
        <Styles.UserInfo>
          <Avatar size="40px" src={userInfo?.avatar} />
          <Styles.DescriptionUser>
            <Styles.NameUser>{userInfo?.name}</Styles.NameUser>
            <Styles.EmailUser>{userInfo?.email}</Styles.EmailUser>
          </Styles.DescriptionUser>
        </Styles.UserInfo>

        <Styles.UserAdditionalInfo>
          <Styles.Area>{`${labels?.area}: ${userInfo?.area}`}</Styles.Area>
          <Styles.Position>{`${labels?.position}: ${userInfo?.position}`}</Styles.Position>
        </Styles.UserAdditionalInfo>
        <Styles.AccordionList>
          <Accordion
            expanded={selectedItem === userInfo?.id && IS_TYPE_COMPETENCES && isAccordionOpen}
            onChange={() => handleSelectedItem(userInfo?.id, 'competences')}
          >
            <AccordionSummary
              expandIcon={isAccordionOpen && IS_TYPE_COMPETENCES ? <IconDown /> : <IconUp />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Styles.AccortionTitle>
                <IconGaps />
                {labels?.competences}
              </Styles.AccortionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Styles.DataList>
                {competencesList?.map((item, index) => (
                  <Styles.DataListItem key={index}>{item.name}</Styles.DataListItem>
                ))}
              </Styles.DataList>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={selectedItem === userInfo?.id && IS_TYPE_MODULES && isAccordionOpen}
            onChange={() => handleSelectedItem(userInfo?.id, 'modules')}
          >
            <AccordionSummary
              expandIcon={isAccordionOpen && IS_TYPE_MODULES ? <IconDown /> : <IconUp />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Styles.AccortionTitle>
                <IconModules />
                {labels?.modules}
              </Styles.AccortionTitle>
            </AccordionSummary>
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
