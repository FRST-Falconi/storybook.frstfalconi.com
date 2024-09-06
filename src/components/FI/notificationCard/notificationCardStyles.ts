import styled, { keyframes } from 'styled-components'

export const notificationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 375px;
  height: auto;
  padding: 16px;
  gap: 16px;
  cursor: pointer;
`

export const notificationInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const notificationDescription = styled.div`
  font-family: 'PT Sans';
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.selectItens};
  a {
    color: ${({ theme }) => theme.colors.selectItens};
    text-decoration: none;
    pointer-events: none;
  }
`

export const notificationDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  font-family: 'PT Sans';
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutralsGrey5};
`

export const PopOverVisitProfile = styled.div`
  display: none;
  position: absolute;
  border: 1px solid black;
  background-color: #fff;
  padding: 10px;
  z-index: 1000;
`

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`
export const TrashIconContainer = styled.div<{ isNewNotification: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  margin-left: auto;
  margin-top: auto;
  border-radius: 50%;
  &:hover {
    background-color: ${({ isNewNotification }) => (isNewNotification ? '#585858' : '#494949')};
    & > svg {
      path {
        fill: #f7f9fc !important;
      }
    }
  }
  &:active {
    background-color: ${({ isNewNotification }) => (isNewNotification ? '#686868' : '#595959')};
    animation: ${pulseAnimation} 0.3s ease-in-out;
  }
`
