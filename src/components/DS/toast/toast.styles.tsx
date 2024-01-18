import styled from 'styled-components'

export const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px 16px 24px;
  border-radius: 5px;
  border: 0.5px solid  ${({ theme }) => theme.colors.neutralsGrey5};
  box-shadow: 2px 4px 8px -20px #3D3B3B33;
  background-color: #F9FAFB;
  margin: 10px;
  color: ${({ theme }) => theme.colors.shadeBlack};
  width: 411px;
  min-height: 54px;
  height:auto;
`

export const Icon = styled.span`
  margin-right: 10px;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #000;
  opacity: 0.7;
  margin-left:auto;
`
export const Text = styled.p`
  display: flex;
  align-items: center;
  font-family: PT Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`
