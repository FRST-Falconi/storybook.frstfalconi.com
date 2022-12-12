import { display, flexbox } from '@mui/system'
import styled, { css } from 'styled-components'

interface PropsItensSelectMultiples {
  selected: boolean
  value: any
  disabled?: boolean
  checked?: boolean
}

export const ListItens = styled('li')<PropsItensSelectMultiples>`
  list-style: none;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000;
  height: 38px;
  margin: 0;
  padding-left: 16px;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
  word-break: break-all;
  cursor: pointer;
  ${(props) =>
    props.disabled === true &&
    css`
      cursor: not-allowed;
      background-color: #e5e5e5;
      opacity: 0.3;
    `}
  :focus {
    background-color: ${({ theme }) => theme.colors.selectItens};
  }
`

export const ListItensAndCheckbox = styled.div<PropsItensSelectMultiples>`
  display: flex;
  margin-right: 1rem;
  ${(props) =>
    props.checked &&
    css`
      background-color: ${({ theme }) => theme.colors.neutralsGrey9};
    `}
  :focus {
    background-color: ${({ theme }) => theme.colors.selectItens};
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.selectItens};
  }
`
