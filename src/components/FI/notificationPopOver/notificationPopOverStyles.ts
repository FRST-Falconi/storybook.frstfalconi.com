import styled from 'styled-components'
import { Box, Popover } from '@mui/material'

type NotificationListProps = {
  notificationsLength?: number
}
export const PopoverCustom = styled(Popover)`
  & > div:nth-child(3) {
    border-radius: 7px !important;
    box-shadow: 0px 25px 62px -19px rgba(0, 0, 0, 0.37) !important;
    -webkit-box-shadow: 0px 25px 62px -19px rgba(0, 0, 0, 0.47);
    -moz-box-shadow: 0px 25px 62px -19px rgba(0, 0, 0, 0.47);
  }
`

export const notificationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 8px;
  width: 376px;
  height: 412px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.neutralsGrey1};

  border: 1px solid ${({ theme }) => theme.colors.borderSecondary4} !important;
  /* & > div:nth-child(2) > div:nth-child(3) {
    display: none !important;
  } */
`

export const notificationContainerMobile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  background-color: ${({ theme }) => theme.colors.shadeWhite};

  & > div:nth-child(2) {
    max-height: 80vh !important;
    overflow-y: scroll !important;
  }
`

export const notificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  width: 100%;
`

export const notificationCardList = styled.div<NotificationListProps>`
  height: 100%;
  min-height: 300px;
  min-width: 100%;
  overflow: hidden;
  overflow-y: ${(props) => props?.notificationsLength > 3 && 'scroll'};
  width: 100%;

  &::-webkit-scrollbar {
    width: 7px;
    height: 90%;
    display: flex;
    box-sizing: border-box;
    margin-right: 5px !important;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.shadeWhite};
    height: 30%;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderPrimary};
    height: 30%;
    border-radius: 5px;
    margin: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.borderPrimary};
    height: 30%;
  }
`

export const emptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const emptyStateInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  text-align: center;
  font-family: 'PT Sans';
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutralsGrey3};
`
