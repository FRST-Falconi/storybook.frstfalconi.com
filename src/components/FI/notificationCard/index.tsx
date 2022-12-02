import Avatar from '@components/avatar'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './notificationCardStyles'

interface INotificationCard {
    notificationAvatar: string
    notificationDescription: string
    isNewNotification: boolean
    isBottomCard: boolean
    notificationDate: string

    textNew: string

    handleClick: () => void
}

const Divider = () => {
    return(
        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#757575"/>
        </svg>
    )
}

export default function NotificationCard ( props : INotificationCard ) {
    return (
        <ThemeProvider theme={FRSTTheme} >
            
            <Styles.notificationContainer 
                onClick={props.handleClick}
                style={{backgroundColor: props.isNewNotification ? '#FEF0D0' : FRSTTheme['colors'].shadeWhite, borderRadius: props.isBottomCard ? '0 0 8px 8px' : 0}} 
            >
                
                <Avatar src={props.notificationAvatar} size='40px' />
                <Styles.notificationInfo>    
                    <Styles.notificationDescription>
                        {props.notificationDescription}
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