import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './participantCardStyle'
import { ParticipantCardI } from './participantCard'

import Avatar from '@components/avatar';
import Tooltip from '@components/LXP/tooltip';
import TooltipV2 from '@components/DS/tooltip';

import { AddPeople, MessageCheckLine } from '@shared/icons'
import { useEffect, useState } from 'react'

export default function ParticipantCardOld({
  variant,
  userInfo,
  labels,
  successfullInvite,
  style,
  handleSendInvitation,
  handleClickRemove,
  onClickUserInfo,
  textVisitProfile,
  hidenRemoveBtn,
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
        <Styles.UserInfo onClick={() => onClickUserInfo ? onClickUserInfo() : {}}>
          <TooltipV2
                direction="top"
                content={textVisitProfile ? textVisitProfile : 'Visitar perfil'}
                trigger='hover'
                width='101px'
                height='32px'
                style={{ top: '-10px', textAlign: 'center' }}
            >
            <Avatar size="40px" src={userInfo?.avatar} isActiveClick={true}/>
          </TooltipV2>
          <Styles.DescriptionUser>
            {userName && userName?.length > 25 ? (
              <Tooltip position="top" textTooltip={userName}>
                <Styles.NameUser>{userName}</Styles.NameUser>
              </Tooltip>
            ) : (
              <Styles.NameUser>{userName}</Styles.NameUser>
            )}

            {userEmail && userEmail?.length > 20 ? (
              <Tooltip position="top" textTooltip={userEmail}>
                <Styles.EmailUser>{limitString(userEmail, 20)}</Styles.EmailUser>
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
        {variant =='secondary' ? (
            <FooterButtonVariantIcons
              statusSend={statusSend}
              clickSendInvitation={clickSendInvitation}
              handleClickRemove={handleClickRemove}
              labels={labels}
              userInfo={userInfo}
              variant={variant}
              IconSend={<LetterEnvelopLineIcon />}
              hidenRemoveBtn={hidenRemoveBtn}              
            />
          ) : (
          variant == 'tertiary' ?
            <FooterButtonVariantIcons
              statusSend={statusSend}
              clickSendInvitation={() => handleSendInvitation(userInfo?.id)}
              handleClickRemove={handleClickRemove}
              labels={labels}
              userInfo={userInfo}
              variant={variant}
              IconSend={ <PeopleLineIcon/>}
              hidenRemoveBtn={hidenRemoveBtn}
            /> 
            :
            <FooterButtonDefault            
              statusSend={statusSend}
              clickSendInvitation={clickSendInvitation}
              handleClickRemove={handleClickRemove}
              labels={labels}
              userInfo={userInfo}
            /> )
        }
      </Styles.WrapperCard>
    </ThemeProvider>
  )
}


function FooterButtonVariantIcons({
  statusSend, 
  clickSendInvitation, 
  handleClickRemove, 
  labels, 
  userInfo,
  variant,
  IconSend,
  hidenRemoveBtn }) {
  const [status, setStatus] = useState(statusSend)

  useEffect(() => {
    setStatus(statusSend)
  }, [statusSend])

  return (
    <Styles.FooterButton style={{ justifyContent: 'flex-start', gap: '4px', alignItems: 'center'}}>
      {status == 'default' ? (
        <Styles.WrapperButtons 
        status={status}>
          <Styles.ButtonSendV2
            onClick={() => {
              if(variant == 'secondary') setStatus('success')
              clickSendInvitation()
            }}
          >
            {IconSend}
            {labels?.sendInvitation ? labels?.sendInvitation : 'Convidar'}
          </Styles.ButtonSendV2>
          {!hidenRemoveBtn && <>
          <Styles.ButtonOrV2>{labels.or}</Styles.ButtonOrV2>
          <Styles.ButtonRemoveV2 onClick={() => handleClickRemove(userInfo?.id)}>
            {labels?.remove ? labels?.remove : 'Remover'}
          </Styles.ButtonRemoveV2></>}
        </Styles.WrapperButtons>
      ) : null }
        <div style={{ width: '100%', justifyContent: 'flex-start' }}>
          <Styles.ButtonSuccessV2
            status={status}
          >
            <CheckInCicle/>
            {labels?.invitationSuccess ? labels?.invitationSuccess : 'Convite enviado'}
          </Styles.ButtonSuccessV2>
        </div>
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

function limitString(str, total) {
  if (str.length > total) {
    return str.substring(0, total) + '...';
  } else {
    return str;
  }
}

function PeopleLineIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.549 14.9713C12.532 14.7717 12.6157 14.5769 12.772 14.4518C13.2283 14.0867 13.5727 13.581 13.7932 12.9049C14.0286 12.1829 14.1413 11.5131 14.1413 10.8923V8.62656C14.1413 8.30123 14.016 7.93557 13.6901 7.51986C13.3643 7.10436 12.9296 6.75178 12.3712 6.46759C11.8218 6.18796 11.2767 6.05454 10.7301 6.05454C10.4151 6.05454 10.0826 6.10541 9.73058 6.21296C9.37604 6.32129 9.05625 6.46735 8.76858 6.64954L8.44995 6.14643L8.76858 6.64954C8.46646 6.84088 8.19782 7.05279 7.96103 7.28464C7.73815 7.50288 7.57086 7.73504 7.45235 7.98085C7.33291 8.22857 7.28531 8.44184 7.28531 8.62656V10.8923C7.28531 11.4321 7.4064 12.0735 7.67084 12.8245C7.91914 13.5297 8.28527 14.0571 8.75636 14.4359C8.91295 14.5618 8.99614 14.7577 8.97796 14.9578C8.95979 15.1579 8.84266 15.3356 8.66594 15.4312L5.19182 17.3109C5.18613 17.314 5.1804 17.317 5.17462 17.3199C5.11819 17.3481 5.04257 17.3883 4.94593 17.442C4.91178 17.4609 4.82117 17.5256 4.66114 17.675C4.63587 17.6986 4.61809 17.7179 4.60598 17.7327C4.60376 17.7354 4.60177 17.738 4.6 17.7403V19.0489C4.6 19.1498 4.62784 19.2078 4.68601 19.2642C4.75468 19.3307 4.81815 19.3552 4.90629 19.3552H16.5203C16.6084 19.3552 16.6719 19.3307 16.7406 19.2642C16.7987 19.2078 16.8266 19.1498 16.8266 19.0489V17.7212C16.8184 17.7054 16.8107 17.6951 16.8044 17.6881C16.776 17.6565 16.7386 17.6203 16.69 17.5798C16.6454 17.5426 16.6054 17.5149 16.5704 17.4945L12.549 14.9713ZM12.549 14.9713C12.566 15.1708 12.6815 15.3487 12.8568 15.4455M12.549 14.9713L12.8568 15.4455M12.8568 15.4455L16.2083 17.2963L16.2378 17.316C16.2798 17.344 16.3252 17.3666 16.3729 17.3832L12.8568 15.4455ZM16.3735 17.3836C16.3791 17.3862 16.3894 17.3913 16.4051 17.4L16.3735 17.3836Z" stroke="#0645AD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 4.62121C12.2991 4.42929 12.628 4.27778 12.9869 4.16667C13.3458 4.05556 13.6947 4 14.0336 4C14.6118 4 15.1801 4.14394 15.7383 4.43182C16.2966 4.7197 16.7477 5.08586 17.0916 5.5303C17.4355 5.97475 17.6075 6.41919 17.6075 6.86364V8.90909C17.6075 9.53535 17.4953 10.197 17.271 10.8939C17.0467 11.5909 16.6854 12.1414 16.1869 12.5455L19.1925 14.2273L19.2374 14.2576C19.2673 14.2677 19.3047 14.2854 19.3495 14.3106C19.3944 14.3359 19.4467 14.3662 19.5065 14.4015C19.5664 14.4369 19.6262 14.4798 19.686 14.5303C19.7458 14.5808 19.7981 14.6313 19.843 14.6818C19.8878 14.7323 19.9252 14.7904 19.9551 14.8561C19.985 14.9217 20 14.9848 20 15.0455V16.2727C20 16.505 19.9202 16.6995 19.7607 16.8561C19.6012 17.0126 19.4118 17.0909 19.1925 17.0909" stroke="#0645AD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
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
      <path d="M11.8806 5.09106L6.54729 10.4244L4.12305 8.00016" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}