import Button from '@components/buttons'
import { Box, Popover } from '@mui/material'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import NotificationCard from '../notificationCard'
import * as Styles from './notificationPopOverStyles'
import { BackArrow, MoreDotsVertical } from '@shared/icons'
import imgNotification from '../../../../public/img/Nonotification.png'
import MenuMore from '@components/menu-more'

type notificationCard = {
  notificationAvatar: string
  notificationDescription: string
  isNewNotification: boolean
  notificationDate: string
  id: string

  textNew: string

  handleClick: () => void
  handleClickDelete: () => Promise<void>
  onClickUserInfo?: () => void
  textVisitProfile?: string
}
interface INotificationPopOver {
  notificationList?: Array<notificationCard>

  textBack: string
  textNotification: string
  textMarkAllAsRead: string
  textDeleteAll: string
  textEmptyState: string

  isOpen: boolean
  anchor: any
  isMobile: boolean

  handleClickMarkRead: () => void
  handleClickDeleteAll: () => void
  setOnAreaPopOver?: (e) => void
  handleClickBack: () => void
}

export default function NotificationPopOver(props: INotificationPopOver) {
  const isNewNotification = props.notificationList
    ? props.notificationList.filter((notification) => notification.isNewNotification)
    : []
  const emptyStateImage = imgNotification
  const notificationsLength = props?.notificationList?.length

  const markAllAsReadOption = {
    description: props.textMarkAllAsRead,
    onClick: props.handleClickMarkRead,
    color: props.notificationList ? '#FCFCFC' : '#9C9C9C',
    disabled: !props.notificationList
  }

  const deleteAllNotificationsOption = {
    description: props.textDeleteAll,
    onClick: props.handleClickDeleteAll,
    color: props.notificationList ? '#FF6868' : '#9C9C9C',
    disabled: !props.notificationList
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      {props.isMobile ? (
        <div style={{ backgroundColor: '#E5E5E5' }}>
          <div style={{ padding: 16 }}>
            <Button
              variant="link"
              startIcon={<BackArrow fill="currentColor" />}
              label={props.textBack}
              handleClick={() => props.handleClickBack()}
            />
          </div>
          <Styles.notificationContainerMobile>
            <Styles.notificationHeader>
              <span
                style={{ fontFamily: 'Work Sans', fontSize: 20, fontWeight: 500, color: FRSTTheme['colors'].primary1 }}
              >
                {props.textNotification}
              </span>
              <MenuMore
                options={[markAllAsReadOption, deleteAllNotificationsOption]}
                isHover={false}
                closeAfterClick={true}
                isArrowInMenu={false}
                isPaddingInMenu={false}
                isDarkMode={true}
                iconButton={<MoreDotsVertical fill="#F7F9FC" />}
              />
            </Styles.notificationHeader>
            {props.notificationList ? (
              <Styles.notificationCardList>
                {props.notificationList.map((item, index) => {
                  return (
                    <div style={{ borderBottom: `1px solid ${FRSTTheme['colors'].borderPrimary}` }}>
                      <NotificationCard
                        style={{ width: '100%' }}
                        onClickUserInfo={item.onClickUserInfo}
                        textVisitProfile={item.textVisitProfile}
                        notificationAvatar={item.notificationAvatar}
                        notificationDescription={item.notificationDescription}
                        notificationDate={item.notificationDate}
                        textNew={item.textNew}
                        isNewNotification={item.isNewNotification}
                        handleClick={item.handleClick}
                        handleClickDelete={item.handleClickDelete}
                        key={index}
                      />
                    </div>
                  )
                })}
              </Styles.notificationCardList>
            ) : (
              <Styles.emptyState>
                <Styles.emptyStateInfo>
                  <img src={emptyStateImage} alt="Empty notification list" />
                  <span>{props.textEmptyState}</span>
                </Styles.emptyStateInfo>
              </Styles.emptyState>
            )}
          </Styles.notificationContainerMobile>
        </div>
      ) : (
        <Styles.PopoverCustom
          open={props.isOpen}
          anchorEl={props.anchor}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              borderRadius: 0
            }
          }}
        >
          <Styles.notificationContainer>
            <Styles.notificationHeader
              onMouseOver={() => (props?.setOnAreaPopOver ? props?.setOnAreaPopOver(true) : {})}
              onMouseOut={() => (props?.setOnAreaPopOver ? props?.setOnAreaPopOver(false) : {})}
            >
              <span
                style={{ fontFamily: 'Work Sans', fontSize: 20, fontWeight: 500, color: FRSTTheme['colors'].primary1 }}
              >
                {props.textNotification}
              </span>
              <MenuMore
                options={[markAllAsReadOption, deleteAllNotificationsOption]}
                isHover={false}
                closeAfterClick={true}
                isArrowInMenu={false}
                isPaddingInMenu={false}
                isDarkMode={true}
                iconButton={<MoreDotsVertical fill="#F7F9FC" />}
              />
            </Styles.notificationHeader>
            {props.notificationList ? (
              <Styles.notificationCardList notificationsLength={notificationsLength}>
                {props.notificationList.map((item, index) => {
                  return (
                    <div
                      style={{ borderBottom: `1px solid #313131` }}
                      onMouseOver={() => (props?.setOnAreaPopOver ? props?.setOnAreaPopOver(true) : {})}
                      onMouseOut={() => (props?.setOnAreaPopOver ? props?.setOnAreaPopOver(false) : {})}
                      key={index}
                    >
                      <NotificationCard
                        onClickUserInfo={item.onClickUserInfo}
                        textVisitProfile={item.textVisitProfile}
                        notificationAvatar={item.notificationAvatar}
                        notificationDescription={item.notificationDescription}
                        notificationDate={item.notificationDate}
                        textNew={item.textNew}
                        isNewNotification={item.isNewNotification}
                        handleClick={item.handleClick}
                        handleClickDelete={item.handleClickDelete}
                        key={index}
                      />
                    </div>
                  )
                })}
              </Styles.notificationCardList>
            ) : (
              <Styles.emptyState>
                <Styles.emptyStateInfo>
                  <img src={emptyStateImage} alt="Empty notification list" />
                  <span>{props.textEmptyState}</span>
                </Styles.emptyStateInfo>
              </Styles.emptyState>
            )}
          </Styles.notificationContainer>
        </Styles.PopoverCustom>
      )}
    </ThemeProvider>
  )
}
