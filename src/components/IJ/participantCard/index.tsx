import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './participantCardStyle'
import { ParticipantCardI } from './participantCard'

import Avatar from '@components/avatar'
import Tooltip from '@components/LXP/tooltip'
import { AddPeople, MessageCheckLine } from '@shared/icons'
import { useEffect, useState } from 'react'


export default function ParticipantCard({ userInfo, labels, successfullInvite, style, handleSendInvitation, handleClickRemove }: ParticipantCardI) {
    const [ userName, setUserName ] = useState(userInfo?.name)
    const [ userEmail, setUserEmail ] = useState(userInfo?.email)
    const [ area, setArea ] = useState(`${labels?.area ? labels?.area: 'Área'}: ${userInfo?.area}`)
    const [ position, setPosition ] = useState(`${labels?.position ? labels?.position: 'Cargo'}: ${userInfo?.position}`)

    const [ statusSend, setStatusSend ] = useState(successfullInvite ? 'success' : 'default')

    useEffect(() => {
        setUserName(userInfo?.name)
        setUserEmail(userInfo?.email)
        setArea(`${labels?.area ? labels?.area: 'Área'}: ${userInfo?.area}`)
        setPosition(`${labels?.position ? labels?.position: 'Cargo'}: ${userInfo?.position}`)
        setStatusSend(successfullInvite ? 'success' : 'default')
    }, [userInfo, labels, successfullInvite])

    const clickSendInvitation = () => {
        setStatusSend('success')
        handleSendInvitation(userInfo?.id)
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.WrapperCard style={{...style}}>
                <Styles.UserInfo>
                    <Avatar  size='40px' src={userInfo?.avatar} />
                    <Styles.DescriptionUser>
                        { userName && userName?.length > 25 ?
                            <Tooltip position="top" textTooltip={userName}>
                                <Styles.NameUser>{userName}</Styles.NameUser>
                            </Tooltip> 
                            :
                            <Styles.NameUser>{userName}</Styles.NameUser> 
                        }
                        { userEmail && userEmail?.length > 30 ?
                            <Tooltip position="top" textTooltip={userEmail}>
                                <Styles.EmailUser>{userEmail}</Styles.EmailUser>
                            </Tooltip> 
                            :
                            <Styles.EmailUser>{userEmail}</Styles.EmailUser>
                        }                        
                    </Styles.DescriptionUser>
                </Styles.UserInfo>

                <Styles.UserAdditionalInfo>
                    { area && area?.length > 31 ?
                        <Tooltip position="top" textTooltip={userInfo?.area}>
                            <Styles.Area>{area}</Styles.Area>
                        </Tooltip> 
                        :
                        <Styles.Area>{area}</Styles.Area>
                    }  
                    { position && position?.length > 33 ?
                        <Tooltip position="top" textTooltip={userInfo?.position}>
                            <Styles.Position>{position}</Styles.Position>
                        </Tooltip> 
                        :
                        <Styles.Position>{position}</Styles.Position>
                    }                      
                </Styles.UserAdditionalInfo>
                
                <Styles.FooterButton>
                    { statusSend == 'default' ? 
                    <>
                        {clickSendInvitation ?
                            <Styles.ButtonSend onClick={() => clickSendInvitation()}><AddPeople/>{labels?.sendInvitation ? labels?.sendInvitation : 'Enviar convite'}</Styles.ButtonSend>
                            : null
                        }
                        {handleClickRemove ?
                            <Styles.ButtonRemove onClick={() => handleClickRemove(userInfo?.id)}>{labels?.remove ? labels?.remove : 'Remover'}</Styles.ButtonRemove>
                            : null
                        }
                    </> : null }
                    { statusSend == 'success' ? 
                    <div style={{width: '100%', justifyContent: 'flex-start'}}>
                        <Styles.ButtonSuccess><MessageCheckLine width='14'/>{labels?.invitationSuccess ? labels?.invitationSuccess : 'Convite enviado'}</Styles.ButtonSuccess>
                    </div> : null }
                </Styles.FooterButton>
            </Styles.WrapperCard>
        </ThemeProvider>
    )
}
