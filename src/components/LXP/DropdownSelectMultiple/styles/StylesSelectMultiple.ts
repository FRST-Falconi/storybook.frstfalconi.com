import styled, { css } from 'styled-components'

interface PropsSelect {
  error?: boolean
  isOpen?: boolean
  isDisabled?: boolean
}
export const ContainerSelectMultiples = styled.div<PropsSelect>`
  cursor: pointer;
  ${(props) =>
    props.isDisabled &&
    css`
      label {
        color: ${({ theme }) => theme.colors.disabledLabelGray} !important;
      }
    `}
  :hover {
    label {
      color: ${({ theme }) => theme.colors.linkOnfocus};
    }
  }
`
export const DropDownContainer = styled.div<PropsSelect>`
  width: 100%;
  height: 48px;
  background: #ffffff;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.borderGray};
  border-radius: 8px;
  position: relative;

  ${(props) =>
    props.error &&
    css`
      background: ${({ theme }) => theme.colors.inputError};
      border: 1px solid ${({ theme }) => theme.colors.messageError1};
    `}
  ${(props) =>
    props.isOpen &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.linkPressed};
    `}
    ${(props) =>
    props.isDisabled &&
    css`
      :hover {
        border-width: 0px !important;
        border-color: transparent !important;
      }
    `}
  :focus {
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.inputSelect};
  }
  :hover {
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.linkOnfocus};
  }
`

export const DropDownHeader = styled.div<PropsSelect>`
  font-weight: 500;
  font-size: 1.3rem;
  background: #ffffff;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-radius: 8px;

  p {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.neutralsGrey4};
  }
  ${(props) =>
    props.error &&
    css`
      background: ${({ theme }) => theme.colors.inputError};
      p {
        color: ${({ theme }) => theme.colors.linkError};
      }
    `}
  ${(props) =>
    props.isDisabled &&
    css`
      background: ${({ theme }) => theme.colors.neutralsGrey6};
    `}
`
export const DropDownListContainer = styled('div')``

export const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  top: 2.2rem;
  background: #ffffff;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.borderGray};
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  position: absolute;
  width: 100%;
  z-index: -1;
  border-radius: 8px;

  &:first-child {
    padding-top: 0.8em;
  }
`
export const DropDownHeaderIcon = styled.button<PropsSelect>`
  position: absolute;
  padding: 0.4rem;
  right: 16.48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
  border-width: 0px;
  background: transparent;

  ${(props) =>
    props.isOpen === true &&
    css`
      transform: rotate(180deg);
    `}

  ${(props) =>
    props.isDisabled &&
    css`
      cursor: auto;
      :focus {
        background-color: transparent !important;
      }
    `}
  :focus {
    background-color: ${({ theme }) => theme.colors.selectItens};
  }
`
export const SelectedOption = styled('p')`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #222222 !important;
`
export const ContainerListItens = styled.div`
  height: 19rem;
  display: block;
  overflow-y: scroll;

  a {
    margin: 1rem;
  }
  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.neutralsGrey3};
    border-radius: 20px;
  }
`
export const LabelSelect = styled.label<PropsSelect>`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 2rem;
  margin-left: 0.2rem;
  color: #222222;
  ${(props) =>
    props.isOpen &&
    css`
      color: ${({ theme }) => theme.colors.linkPressed};
    `}
  ${(props) =>
    props.isDisabled &&
    css`
      color: ${({ theme }) => theme.colors.disabledLabelGray};
    `}
`
export const IconOptional = styled('div')<PropsSelect>`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`
