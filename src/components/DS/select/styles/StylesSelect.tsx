import styled, { css } from 'styled-components'

interface PropsSelect {
  error?: boolean
}

export const DropDownContainer = styled.div<PropsSelect>`
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  position: relative;
  ${(props) =>
    props.error &&
    css`
      background: ${({ theme }) => theme.colors.inputError};
      border: 1px solid ${({ theme }) => theme.colors.messageError1};
    `}
`
export const EventOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
  cursor: pointer;
  z-index: 2;
`
export const DropDownHeader = styled.div<PropsSelect>`
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-radius: 4px;

  p {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #a6a6a6;
  }
  ${(props) =>
    props.error &&
    css`
      background: ${({ theme }) => theme.colors.inputError};
      p {
        color: ${({ theme }) => theme.colors.linkError};
      }
    `}
`
export const DropDownListContainer = styled('div')``

export const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  position: absolute;
  width: 100%;
  z-index: 5;

  &:first-child {
    padding-top: 0.8em;
  }
`
export const DropDownHeaderIcon = styled('div')<{ open: boolean }>`
  position: absolute;
  right: 16.48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease-in-out;

  ${({ open }) =>
    open === true &&
    css`
      transform: rotate(180deg);
    `}
`
export const SelectedOption = styled('p')`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #222222 !important;
`
