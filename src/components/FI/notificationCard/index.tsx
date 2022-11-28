import Avatar from '@components/avatar'
import * as Styles from './notificationCardStyles'

interface INotificationCard {
    notificationAvatar : string
    notificationDescription : string
    isNewNotification : boolean
    isBottomCard : boolean
}

export default function NotificationCard ( props : INotificationCard ) {
    return (
        <Styles.notificationContainer >
            <div>
                <Avatar src={props.notificationAvatar} size='40px' />
            </div>

        </Styles.notificationContainer>
    )
}