import styled, { keyframes } from 'styled-components'

export interface AnimationToastProps {
  visible?: boolean;
}


const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOutRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(20px);
  }
`;

export const ToastWrapper = styled.div<AnimationToastProps>`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  border: 0.5px solid  ${({ theme }) => theme.colors.neutralsGrey5};
  box-shadow: 2px 4px 8px #3D3B3B33;
  background-color: #F9FAFB;
  margin: 10px;
  color: ${({ theme }) => theme.colors.shadeBlack};
  width: 411px;
  min-height:54px;
  max-height: auto;
  position: fixed;
  top: 100px;
  right: 40px;
  z-index: 10000;
  animation: ${fadeInRight} 0.5s ease-in-out;
`

export const Icon = styled.span`
  margin-right: 10px;
  margin-top:4px
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #000;
  opacity: 0.7;
  margin-left:auto;
  margin-bottom: auto;
  margin-top: 8px
`
export const Text = styled.p`
  display: flex;
  align-items: center;
  font-family: PT Sans;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 16px;
`
