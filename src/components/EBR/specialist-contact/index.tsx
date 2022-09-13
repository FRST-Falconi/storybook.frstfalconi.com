import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './specialistContactStyles'
import { ISpecialistContact } from './specialistContact'
import { WhatAppBordered, MailBordered } from '@shared/icons'

import Button from '@components/buttons/index'

export default function SpecialistContact({ title, avatar, name, email, telephone, mobileVersion,
    handleActionConversation, textButtonConversation,handleActionSendEmail, textButtonSendEmail }: ISpecialistContact) {
    const src = 'https://i.gyazo.com/499dda909b1ebfe0375d1efa2d5d00a8.png'
    return (
        <Styles.Wrapper mobileVersion={mobileVersion}>
            <Styles.Title mobileVersion={mobileVersion}>{title}</Styles.Title>
            <Styles.WrapperSpecialist mobileVersion={mobileVersion}>
                <Styles.AvatarImg src={avatar ? avatar : src}/>
                <Styles.TextSpecialist  mobileVersion={mobileVersion}>
                    <Styles.Name mobileVersion={mobileVersion}> {name} </Styles.Name>
                    <Styles.Email mobileVersion={mobileVersion}> {email} </Styles.Email>
                    <Styles.Phone mobileVersion={mobileVersion}> {telephone} </Styles.Phone>
                </Styles.TextSpecialist>
            </Styles.WrapperSpecialist>

            <Styles.WrapperButtons>
                <Button 
                    variant='primary' 
                    label={textButtonConversation ? textButtonConversation : 'Iniciar conversa'}
                    handleClick={() => handleActionConversation()}
                    startIcon={!mobileVersion && <WhatAppBordered/>}
                    sizeIcon={'22px'}/>
                <Button 
                    variant='primary' 
                    label={textButtonSendEmail ? textButtonSendEmail : 'Enviar e-mail'}
                    handleClick={() => handleActionSendEmail()}
                    startIcon={!mobileVersion && <MailBordered/>}
                    sizeIcon={'22px'}/>
            </Styles.WrapperButtons>
        </Styles.Wrapper>
    )
}
