import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './participantCardStyle'
import { ParticipantCardI } from './participantCard'

import Avatar from '@components/avatar'
import Tooltip from '@components/LXP/tooltip'
import { AddPeople, MessageCheckLine, IconUp, IconDown, IconGaps, IconModules } from '@shared/icons'
import { useEffect, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

export default function ParticipantCard({ userInfo, labels, successfullInvite, style }: ParticipantCardI) {
  const [selectedItem, setSelectedItem] = useState(null)
  const [typeDetails, setTypeDetails] = useState(null)
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const IS_TYPE_COMPETENCES = typeDetails === 'competences'
  const IS_TYPE_MODULES = typeDetails === 'modules'

  const handleSelectedItem = (id: string) => {
    setSelectedItem(id)
    if (id === '1') {
      setTypeDetails('competences')
    } else {
      setTypeDetails('modules')
    }
  }

  console.log('selectedItem', selectedItem)
  console.log('userInfo?.id', userInfo?.id)

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

        <Accordion
          expanded={selectedItem === userInfo?.id && IS_TYPE_COMPETENCES}
          onChange={() => handleSelectedItem('1')}
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
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id
              dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={selectedItem === userInfo?.id && IS_TYPE_MODULES} onChange={() => handleSelectedItem('2')}>
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
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit.
              Pellentesque convallis laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Styles.WrapperCard>
    </ThemeProvider>
  )
}
