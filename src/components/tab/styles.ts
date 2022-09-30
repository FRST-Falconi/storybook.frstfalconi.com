import styled from 'styled-components'

export const ButtonGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`



export const WrapperTabPrimary = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #BDBDBD;
`

export const TabItemPrimary = styled.div<{active}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  color: #222222;
  padding: 10px;
  margin-right: 16px;
  border-bottom: 2px solid transparent;

  ${({active}) => active && `
    color: #FF4D0D;
    font-weight: 700;
    border-bottom: 2px solid #FF4D0D;
  `}
  &:hover {
    font-weight: 700;
    color: #FF4D0D;
  }
`
 