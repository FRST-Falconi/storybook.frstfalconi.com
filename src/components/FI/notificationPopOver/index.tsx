import Button from '@components/buttons'
import { Box, Modal, Popover } from '@mui/material'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import NotificationCard from '../notificationCard'
import * as Styles from './notificationPopOverStyles'
import {Scrollbar} from 'react-scrollbars-custom'

type notificationCard ={
    notificationAvatar: string
    notificationDescription: string
    isNewNotification: boolean
    notificationDate: string

    textNew: string

    handleClick: () => void
}
interface INotificationPopOver{
    notificationList?: Array<notificationCard>

    textNotification: string
    textMarkAllAsRead: string
    textEmptyState: string

    isOpen: boolean
    anchor: any

    handleClickMarkRead: () => void
}

export default function NotificationPopOver ( props : INotificationPopOver ) {
    const isNewNotification = props.notificationList ? props.notificationList.filter( (notification) => notification.isNewNotification ) : []
    const emptyStateImage = 'https://i.gyazo.com/5551ed515f94a8b2502d2694d67633dc.png'
    
    return(
        <ThemeProvider theme={FRSTTheme} >
            <Popover open={props.isOpen}
                anchorEl={props.anchor}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{
                    style: {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        borderRadius: 0
                    }
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        mt: "10px",
                        "&::before": {
                            backgroundColor: "white",
                            content: '""',
                            display: "block",
                            position: "absolute",
                            width: 12,
                            height: 12,
                            top: -6,
                            transform: "rotate(45deg)",
                            left: "calc(50% - 6px)"
                        }
                    }}
                />

                <Styles.notificationContainer>
                    <Styles.notificationHeader>
                        <span style={{fontFamily: 'Work Sans', fontSize: 20, fontWeight: 500, color: FRSTTheme['colors'].primary1}}>{props.textNotification}</span>
                        <Button variant='link' label={props.textMarkAllAsRead} disabled={isNewNotification.length ? false : true} handleClick={props.handleClickMarkRead}  />
                    </Styles.notificationHeader>
                    {props.notificationList ?
                        <Scrollbar allowTransparency removeTracksWhenNotUsed disableTracksWidthCompensation disableTracksMousewheelScrolling >
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
                                                handleClick = {item.handleClick}
                                                key = {index}
                                                />
                                        </div>
                                    )
                                })
                            }
                        </Styles.notificationCardList>
                        </Scrollbar>
                        :
                        <Styles.emptyState>
                            <Styles.emptyStateInfo>
                                <img src={emptyStateImage} alt='Empty notification list' />
                                <span>{props.textEmptyState}</span>
                            </Styles.emptyStateInfo>
                        </Styles.emptyState>
                    }
                </Styles.notificationContainer>
            </Popover>
        </ThemeProvider>
    )
}