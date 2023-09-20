import Button from '@components/buttons'
import { Box, Popover } from '@mui/material'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import NotificationCard from '../notificationCard'
import * as Styles from './notificationPopOverStyles'
import { BackArrow } from '@shared/icons'
import { useState } from 'react'
import imgNotification from '../../../../public/img/Nonotification.png'

type notificationCard = {
  notificationAvatar: string
  notificationDescription: string
  isNewNotification: boolean
  notificationDate: string

  textNew: string

  handleClick: () => void
  onClickUserInfo?: () => void
  textVisitProfile?: string
}
interface INotificationPopOver {
  notificationList?: Array<notificationCard>

  textBack: string
  textNotification: string
  textMarkAllAsRead: string
  textEmptyState: string

  isOpen: boolean
  anchor: any
  isMobile: boolean

  handleClickMarkRead: () => void
  setOnAreaPopOver?: (e) => void
  handleClickBack: () => void
}

export default function NotificationPopOver(props: INotificationPopOver) {
  const isNewNotification = props.notificationList
    ? props.notificationList.filter((notification) => notification.isNewNotification)
    : []
  const emptyStateImage = imgNotification
  const notificationsLength = props?.notificationList?.length

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
              <Button
                variant="link"
                label={props.textMarkAllAsRead}
                disabled={isNewNotification.length ? false : true}
                handleClick={props.handleClickMarkRead}
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
          <Box
            sx={{
              position: 'relative',
              mt: '10px',
              '&::before': {
                backgroundColor: 'white',
                content: '""',
                display: 'block',
                position: 'absolute',
                width: 12,
                height: 12,
                top: -6,
                transform: 'rotate(45deg)',
                left: 'calc(50% - 6px)'
              }
            }}
          />

          <Styles.notificationContainer>
            <Styles.notificationHeader
              onMouseOver={() => props?.setOnAreaPopOver ? props?.setOnAreaPopOver(true) : {}}
              onMouseOut={() => props?.setOnAreaPopOver ? props?.setOnAreaPopOver(false): {}}
            >
              <span
                style={{ fontFamily: 'Work Sans', fontSize: 20, fontWeight: 500, color: FRSTTheme['colors'].primary1 }}
              >
                {props.textNotification}
              </span>
              <Button
                variant="link"
                label={props.textMarkAllAsRead}
                disabled={isNewNotification.length ? false : true}
                handleClick={props.handleClickMarkRead}
              />
            </Styles.notificationHeader>
            {props.notificationList ? (
              <Styles.notificationCardList notificationsLength={notificationsLength}>
                {props.notificationList.map((item, index) => {
                  return (
                    <div
                      style={{ borderBottom: `1px solid ${FRSTTheme['colors'].borderPrimary}` }}
                      onMouseOver={() => props?.setOnAreaPopOver ? props?.setOnAreaPopOver(true) : {}}
                      onMouseOut={() => props?.setOnAreaPopOver ? props?.setOnAreaPopOver(false): {}}
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
