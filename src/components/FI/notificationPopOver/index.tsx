import Button from '@components/buttons'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import NotificationCard from '../notificationCard'
import * as Styles from './notificationPopOverStyles'

type notificationCard ={
    notificationAvatar: string
    notificationDescription: string
    isNewNotification: boolean
    isBottomCard: boolean
    notificationDate: string

    textNew: string

    handleClick: () => void
}
interface INotificationPopOver{
    notificationList: Array<notificationCard>

    textNotification: string
    textMarkAllAsRead: string

    handleClickMarkRead: () => void
}

export default function NotificationPopOver ( props : INotificationPopOver ) {
    const isNewNotification = props.notificationList.filter( (notification) => notification.isNewNotification )

    return(
        <ThemeProvider theme={FRSTTheme} >
            <Styles.notificationContainer>
                <Styles.notificationHeader>
                    <span style={{fontFamily: 'Work Sans', fontSize: 20, fontWeight: 500, color: FRSTTheme['colors'].primary1}}>{props.textNotification}</span>
                    <Button variant='link' label={props.textMarkAllAsRead} disabled={isNewNotification ? false : true} handleClick={props.handleClickMarkRead}  />
                </Styles.notificationHeader>
                <Styles.notificationCardList>
                    {
                        props.notificationList.map((item, index) => {
                            return(
                                <div style={{borderBottom: `1px solid ${FRSTTheme['colors'].borderPrimary}`}} >
                                    <NotificationCard
                                        notificationAvatar = {item.notificationAvatar}
                                        notificationDescription = {item.notificationDescription}
                                        notificationDate = {item.notificationDate} 
                                        textNew = {item.textNew}
                                        isNewNotification = {item.isNewNotification}
                                        isBottomCard = {item.isBottomCard}
                                        handleClick = {item.handleClick}
                                        key = {index}
                                    />
                                </div>
                            )
                        })
                    }
                </Styles.notificationCardList>
            </Styles.notificationContainer>
        </ThemeProvider>
    )
}