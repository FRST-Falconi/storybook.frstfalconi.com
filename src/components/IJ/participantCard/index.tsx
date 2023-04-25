import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './participantCardStyle'
import { ParticipantCardI } from './participantCard'

import Avatar from '@components/avatar'
import Tooltip from '@components/LXP/tooltip'
import { AddPeople, MessageCheckLine } from '@shared/icons'
import { useEffect, useState } from 'react'

export default function ParticipantCard({ userInfo, labels, successfullInvite, style }: ParticipantCardI) {
  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.WrapperCard style={{ ...style }}>
        <Styles.TagArea>
          <Styles.TagStatus> Cadastrado</Styles.TagStatus>
        </Styles.TagArea>
        <Styles.UserInfo>
          <Avatar size="40px" src={userInfo?.avatar} />
          <Styles.DescriptionUser>
            {userInfo?.name && userInfo?.name?.length > 25 ? (
              <Styles.NameUser>{userInfo?.name}</Styles.NameUser>
            ) : (
              <Styles.NameUser>{userInfo?.name}</Styles.NameUser>
            )}
            {userInfo?.email && userInfo?.email?.length > 30 ? (
              <Tooltip position="top" textTooltip={userInfo?.email}>
                <Styles.EmailUser>{userInfo?.email}</Styles.EmailUser>
              </Tooltip>
            ) : (
              <Styles.EmailUser>{userInfo?.email}</Styles.EmailUser>
            )}
          </Styles.DescriptionUser>
        </Styles.UserInfo>

        {/* <Styles.UserAdditionalInfo>
          {area && area?.length > 31 ? (
            <Tooltip position="top" textTooltip={userInfo?.area}>
              <Styles.Area>{area}</Styles.Area>
            </Tooltip>
          ) : (
            <Styles.Area>{area}</Styles.Area>
          )}
          {position && position?.length > 33 ? (
            <Tooltip position="top" textTooltip={userInfo?.position}>
              <Styles.Position>{position}</Styles.Position>
            </Tooltip>
          ) : (
            <Styles.Position>{position}</Styles.Position>
          )}
        </Styles.UserAdditionalInfo> */}
      </Styles.WrapperCard>
    </ThemeProvider>
  )
}
