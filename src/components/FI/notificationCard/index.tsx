import Avatar from '@components/avatar'
import Markdown from 'markdown-to-jsx'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './notificationCardStyles'
import Tooltip from '@components/LXP/tooltip'

interface INotificationCard {
    notificationAvatar: string
    notificationDescription: string
    isNewNotification: boolean
    notificationDate: string
    textVisitProfile?: string

    textNew: string
    style?: React.CSSProperties

    handleClick: () => void
    onClickUserInfo?: () => void
}

const Divider = () => {
    return(
        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#757575"/>
        </svg>
    )
}

export default function NotificationCard ( props : INotificationCard ) {
    const [descriptionNotification, setDescriptionNotification] = useState(props.notificationDescription);

    useEffect(() => {
        setDescriptionNotification(props.notificationDescription)
    }, [props.notificationDescription])

    const handleChildClick = (event: any) => {
        event.stopPropagation();
        props.onClickUserInfo && props.onClickUserInfo()
    }

    return (
        <ThemeProvider theme={FRSTTheme} >
            
            <Styles.notificationContainer 
                onClick={props.handleClick}
                style={{...props.style, backgroundColor: props.isNewNotification ? '#FEF0D0' : FRSTTheme['colors'].shadeWhite}} 
            >
                {!!props?.onClickUserInfo ? 
                    <Tooltip 
                        position="right" 
                        textTooltip={props?.textVisitProfile ? props?.textVisitProfile : 'Visitar Perfil'} 
                        customWidth={'106px'}
                        customMarginLeft={'-30px'}
                    >
                        <div onClick={(e) => handleChildClick(e)}>
                            <Avatar src={props.notificationAvatar} size='40px' isActiveClick={true}/>
                        </div>
                    </Tooltip>
                :
                    <Avatar src={props.notificationAvatar} size='40px' isActiveClick={false} />
                }
                <Styles.notificationInfo>    
                    <Styles.notificationDescription>
                        <Markdown>
                            {descriptionNotification}
                        </Markdown>
                    </Styles.notificationDescription>
                    {props.isNewNotification ?
                        <Styles.notificationDate>
                            <span style={{fontWeight: 700, color: FRSTTheme['colors'].primary1}} >{props.textNew}</span>
                            <Divider />
                            {props.notificationDate}
                        </Styles.notificationDate>
                        :
                        <Styles.notificationDate>
                            {props.notificationDate}
                        </Styles.notificationDate>
                    }
                </Styles.notificationInfo>

            </Styles.notificationContainer>
        </ThemeProvider>
    )
}