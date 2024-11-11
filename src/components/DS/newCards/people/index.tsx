import { ThemeProvider } from 'styled-components'
import {
    ContainerCard,
    HeaderInfo,
    UserInfo,
    ButtonsList,
    CardButton
} from './styles'
import { FRSTTheme } from '../../../../theme'
import Avatar from '@components/avatar'
import Tooltip from '@components/DS/tooltip'

function ProfileIcon () {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8 2.4C9.328 2.4 10.4 3.472 10.4 4.8C10.4 6.128 9.328 7.2 8 7.2C6.672 7.2 5.6 6.128 5.6 4.8C5.6 3.472 6.672 2.4 8 2.4ZM8 13.76C6 13.76 4.232 12.736 3.2 11.184C3.224 9.592 6.4 8.72 8 8.72C9.592 8.72 12.776 9.592 12.8 11.184C11.768 12.736 10 13.76 8 13.76Z" fill="white"/>
        </svg>
    )
}

function InviteIcon () {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6663 13.9812V14.3412C16.6663 14.8635 16.4909 15.3647 16.1681 15.7671C16.0488 15.9224 15.8523 16 15.6488 16H13.7681C14.0558 15.4988 14.2102 14.9271 14.2102 14.3412V13.9812C14.2102 12.9647 13.8383 12.0259 13.2067 11.3129C13.2558 11.2988 13.2979 11.2706 13.34 11.2494C13.6628 11.0659 14.0628 11.0094 14.4418 11.1012C15.7471 11.4329 16.6663 12.6118 16.6663 13.9812ZM11.7541 4C11.5295 4 11.312 4.02118 11.1014 4.07059C11.9365 4.84 12.4558 5.94824 12.4558 7.17647C12.4558 8.40471 11.9365 9.51294 11.1014 10.2823C11.312 10.3318 11.5295 10.3529 11.7541 10.3529C13.4944 10.3529 14.912 8.92706 14.912 7.17647C14.912 5.42588 13.4944 4 11.7541 4ZM8.24529 4C6.50494 4 5.08739 5.42588 5.08739 7.17647C5.08739 8.92706 6.50494 10.3529 8.24529 10.3529C9.98564 10.3529 11.4032 8.92706 11.4032 7.17647C11.4032 5.42588 9.98564 4 8.24529 4ZM10.933 11.1012C10.8067 11.0729 10.6874 11.0588 10.5611 11.0588C10.3014 11.0588 10.0488 11.1224 9.83126 11.2494C9.34003 11.5177 8.79266 11.6518 8.24529 11.6518C7.69792 11.6518 7.15758 11.5176 6.67337 11.2565C6.44179 11.1294 6.18213 11.0588 5.92248 11.0588C5.8102 11.0588 5.70492 11.0729 5.59966 11.0941C4.26633 11.4047 3.33301 12.5976 3.33301 13.9812V14.3412C3.33301 14.8635 3.50846 15.3647 3.83127 15.7671C3.95057 15.9224 4.14705 16 4.35056 16H12.14C12.3435 16 12.54 15.9224 12.6593 15.7671C12.9821 15.3647 13.1576 14.8635 13.1576 14.3412V13.9812C13.1576 12.6118 12.2383 11.4329 10.933 11.1012Z" fill="white"/>
            <path d="M3.03809 1.03857V5.03857" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.03809 3.03857H5.03809" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function MessageIcon () {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.33366 8.3382C1.33366 6.77478 1.33366 5.21768 1.33366 3.65426C1.33366 2.71114 1.91366 1.94525 2.80033 1.72371C2.97366 1.67941 3.15366 1.66675 3.32699 1.66675C6.44032 1.66675 9.56033 1.66675 12.6737 1.66675C13.587 1.66675 14.287 2.16679 14.567 3.01496C14.607 3.14156 14.6337 3.26815 14.667 3.40107V10.4713C14.6137 10.6612 14.5803 10.8637 14.4937 11.041C14.1403 11.8068 13.5337 12.1866 12.7137 12.1993C12.487 12.1993 12.2603 12.1993 12.027 12.1993C12.027 12.2563 12.0203 12.3069 12.0203 12.3512C12.0203 12.8576 12.0203 13.3576 12.0137 13.864C12.0137 14.1868 11.7937 14.3893 11.5203 14.3197C11.4403 14.3007 11.3603 14.2501 11.2937 14.1995C10.4937 13.5665 9.69366 12.9335 8.89366 12.2942C8.81366 12.2309 8.72699 12.1993 8.62033 12.1993C6.86033 12.1993 5.10699 12.1993 3.34699 12.1993C2.90699 12.1993 2.50032 12.1043 2.14699 11.8322C1.62033 11.4334 1.34699 10.8954 1.34699 10.2181C1.34699 9.59147 1.34699 8.97117 1.34699 8.34453L1.33366 8.3382ZM11.4537 8.02805C11.947 8.02805 12.3403 7.61662 12.3403 7.11658C12.3403 6.61653 11.9403 6.20511 11.4537 6.20511C10.967 6.20511 10.567 6.61653 10.567 7.11658C10.567 7.61662 10.967 8.02805 11.4537 8.02805ZM8.09366 8.02805C8.58699 8.02805 8.98033 7.61662 8.98033 7.11658C8.98033 6.61653 8.58033 6.20511 8.09366 6.20511C7.60699 6.20511 7.20699 6.61653 7.20699 7.11658C7.20699 7.61662 7.60699 8.02805 8.09366 8.02805ZM4.53366 8.02805C5.02699 8.02805 5.42033 7.61662 5.42033 7.11658C5.42033 6.61653 5.02033 6.20511 4.53366 6.20511C4.04699 6.20511 3.64699 6.61653 3.64699 7.11658C3.64699 7.61662 4.04699 8.02805 4.53366 8.02805Z" fill="white"/>
        </svg>
    )
}

interface peopleCardProps {
    avatar: string
    name: string
    area: string
    position: string
    showBtnProfile: boolean
    showBtnInvite: boolean
    showBtnMessage: boolean
    handleClickProfile?: () => void
    handleClickInvite?: () => void
    handleClickMessage?: () => void
}

export default function PeopleCard ({
    avatar,
    name,
    area,
    position,
    showBtnProfile,
    showBtnInvite,
    showBtnMessage,
    handleClickProfile,
    handleClickInvite,
    handleClickMessage
}: peopleCardProps) {

    return (
        <ThemeProvider theme={FRSTTheme}>
            <ContainerCard>
                <HeaderInfo>
                    <Avatar
                        src={avatar}
                        size='56px'
                    />
                    <UserInfo>
                        <p className='title'>{name}</p>
                        <p>{area}</p>
                        <p>{position}</p>
                    </UserInfo>
                </HeaderInfo>
                <ButtonsList>
                    {showBtnProfile &&
                        <CardButton onClick={handleClickProfile}>
                            <Tooltip
                                direction='bottom'
                                content='Acessar perfil'
                                delay={50}
                                width='fit-content'
                                height='fit-content'
                                style={{ textAlign: 'center', top: '36px', whiteSpace: 'nowrap' }}
                            >
                                <ProfileIcon />
                            </Tooltip>
                        </CardButton>
                    }
                    {showBtnInvite &&
                        <CardButton onClick={handleClickInvite}>
                            <Tooltip
                                direction='bottom'
                                content='Convidar'
                                delay={50}
                                width='fit-content'
                                height='fit-content'
                                style={{ textAlign: 'center', top: '36px', whiteSpace: 'nowrap' }}
                            >
                                <InviteIcon />
                            </Tooltip>
                        </CardButton>
                    }
                    {showBtnMessage &&
                        <CardButton onClick={handleClickMessage}>
                            <Tooltip
                                direction='bottom'
                                content='Enviar mensagem'
                                delay={50}
                                width='fit-content'
                                height='fit-content'
                                style={{ textAlign: 'center', top: '36px', whiteSpace: 'nowrap' }}
                            >
                                <MessageIcon />
                            </Tooltip>
                        </CardButton>
                    }
                </ButtonsList>
            </ContainerCard>
        </ThemeProvider>
    )
}