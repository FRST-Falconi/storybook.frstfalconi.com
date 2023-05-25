import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './participantCardStyle'
import { ParticipantCardI } from './participantCard'

import Avatar from '@components/avatar'
import Tooltip from '@components/LXP/tooltip'
import { AddPeople, MessageCheckLine } from '@shared/icons'
import { useEffect, useState } from 'react'

export default function ParticipantCardOld({
  variant,
  userInfo,
  labels,
  successfullInvite,
  style,
  handleSendInvitation,
  handleClickRemove
}: ParticipantCardI) {
  const [userName, setUserName] = useState(userInfo?.name)
  const [userEmail, setUserEmail] = useState(userInfo?.email)
  const [area, setArea] = useState(`${labels?.area ? labels?.area : 'Área'}: ${userInfo?.area}`)
  const [position, setPosition] = useState(`${labels?.position ? labels?.position : 'Cargo'}: ${userInfo?.position}`)

  const [statusSend, setStatusSend] = useState(successfullInvite ? 'success' : 'default')

  useEffect(() => {
    setUserName(userInfo?.name)
    setUserEmail(userInfo?.email)
    setArea(`${labels?.area ? labels?.area : 'Área'}: ${userInfo?.area}`)
    setPosition(`${labels?.position ? labels?.position : 'Cargo'}: ${userInfo?.position}`)
    setStatusSend(successfullInvite ? 'success' : 'default')
  }, [userInfo, labels, successfullInvite])

  const clickSendInvitation = () => {
    setStatusSend('success')
    handleSendInvitation(userInfo?.id)
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.WrapperCard variant={variant} style={{ ...style }}>
        <Styles.UserInfo>
          <Avatar size="40px" src={userInfo?.avatar} />
          <Styles.DescriptionUser>
            {userName && userName?.length > 25 ? (
              <Tooltip position="top" textTooltip={userName}>
                <Styles.NameUser>{userName}</Styles.NameUser>
              </Tooltip>
            ) : (
              <Styles.NameUser>{userName}</Styles.NameUser>
            )}
            {userEmail && userEmail?.length > 30 ? (
              <Tooltip position="top" textTooltip={userEmail}>
                <Styles.EmailUser>{userEmail}</Styles.EmailUser>
              </Tooltip>
            ) : (
              <Styles.EmailUser>{userEmail}</Styles.EmailUser>
            )}
          </Styles.DescriptionUser>
        </Styles.UserInfo>

        <Styles.UserAdditionalInfo>
          {area && area?.length > 31 ? (
            <Tooltip position="top" textTooltip={userInfo?.area}>
              <Styles.Area variant={variant}>{area}</Styles.Area>
            </Tooltip>
          ) : (
            <Styles.Area variant={variant}>{area}</Styles.Area>
          )}
          {position && position?.length > 33 ? (
            <Tooltip position="top" textTooltip={userInfo?.position}>
              <Styles.Position>{position}</Styles.Position>
            </Tooltip>
          ) : (
            <Styles.Position>{position}</Styles.Position>
          )}
        </Styles.UserAdditionalInfo>
        {variant =='brainstorm' ? 
            <FooterButtonBrainstorm
              statusSend={statusSend}
              clickSendInvitation={clickSendInvitation}
              handleClickRemove={handleClickRemove}
              labels={labels}
              userInfo={userInfo}
            />
          :
            <FooterButtonDefault            
              statusSend={statusSend}
              clickSendInvitation={clickSendInvitation}
              handleClickRemove={handleClickRemove}
              labels={labels}
              userInfo={userInfo}
            />
        }
      </Styles.WrapperCard>
    </ThemeProvider>
  )
}


function FooterButtonBrainstorm({statusSend, clickSendInvitation, handleClickRemove, labels, userInfo}) {
  return (
    <Styles.FooterButton style={{ justifyContent: 'flex-start', gap: '4px', alignItems: 'center'}}>
      {statusSend == 'default' ? (
        <>
          {clickSendInvitation ? (
            <Styles.ButtonSendV2 onClick={() => clickSendInvitation()}>
              <div>
                <LetterEnvelopLineIcon />
              </div>
              {labels?.sendInvitation ? labels?.sendInvitation : 'Convidar'}
            </Styles.ButtonSendV2>
          ) : null}
          <Styles.ButtonOrV2>{labels.or}</Styles.ButtonOrV2>
          {handleClickRemove ? (
            <Styles.ButtonRemoveV2 onClick={() => handleClickRemove(userInfo?.id)}>
              {labels?.remove ? labels?.remove : 'Remover'}
            </Styles.ButtonRemoveV2>
          ) : null}
        </>
      ) : null }
      {statusSend == 'success' ? (
        <div style={{ width: '100%', justifyContent: 'flex-start' }}>
          <Styles.ButtonSuccessV2>
            <CheckInCicle/>
            {labels?.invitationSuccess ? labels?.invitationSuccess : 'Convite enviado'}
          </Styles.ButtonSuccessV2>
        </div>
      ) : null}
    </Styles.FooterButton>
  )
}

function FooterButtonDefault({statusSend, clickSendInvitation, labels, handleClickRemove, userInfo}) {
  return (
    <Styles.FooterButton>
      {statusSend == 'default' ? (
        <>
          {clickSendInvitation ? (
            <Styles.ButtonSend onClick={() => clickSendInvitation()}>
              <AddPeople />
              {labels?.sendInvitation ? labels?.sendInvitation : 'Enviar convite'}
            </Styles.ButtonSend>
          ) : null}
          {handleClickRemove ? (
            <Styles.ButtonRemove onClick={() => handleClickRemove(userInfo?.id)}>
              {labels?.remove ? labels?.remove : 'Remover'}
            </Styles.ButtonRemove>
          ) : null}
        </>
      ) : null}
      {statusSend == 'success' ? (
        <div style={{ width: '100%', justifyContent: 'flex-start' }}>
          <Styles.ButtonSuccess>
            <MessageCheckLine width="14" />
            {labels?.invitationSuccess ? labels?.invitationSuccess : 'Convite enviado'}
          </Styles.ButtonSuccess>
        </div>
      ) : null}
    </Styles.FooterButton>
  )
}


function LetterEnvelopLineIcon() {
  return (
    <div style={{height: '12px', borderRadius: '2px', overflow: 'hidden', marginRight: '8px', marginLeft:'8px'}} >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12"  viewBox="1 1 16.4 12">
        <path strokeWidth="1" fill='#0645ad' d="m3.2,0C1.43,0,0,1.43,0,3.2h2.4c0-.44.36-.8.8-.8V0Zm12,2.4c.44,0,.8.36.8.8h2.4c0-1.77-1.43-3.2-3.2-3.2v2.4Zm.8,8.8c0,.44-.36.8-.8.8v2.4c1.77,0,3.2-1.43,3.2-3.2h-2.4Zm-12.8.8c-.44,0-.8-.36-.8-.8H0c0,1.77,1.43,3.2,3.2,3.2v-2.4Zm-.8-.8V3.2H0v8h2.4Zm12.8.8H3.2v2.4h12v-2.4Zm.8-8.8v8h2.4V3.2h-2.4Zm-12.8-.8h12V0H3.2v2.4Zm4.48,4.44c.91.66,2.14.66,3.05,0l-.7-.97c-.49.35-1.15.35-1.64,0l-.7.97Zm3.05,0l6.43-4.65-.7-.97-6.43,4.65.7.97ZM1.25,2.19l6.43,4.65.7-.97L1.95,1.21l-.7.97Zm9.12,4.17l-.35-.49.35.49Zm-2.35,0l-.35.49.35-.49Z"/>
    </svg>
    </div>
  )
}

function CheckInCicle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="8" fill="#1BA853"/>
      <path d="M11.8806 5.09106L6.54729 10.4244L4.12305 8.00016" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}