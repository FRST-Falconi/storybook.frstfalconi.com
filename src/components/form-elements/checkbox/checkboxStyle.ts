import styled from 'styled-components'

interface TextFieldProps {
  type?: string
  as?: string
}

export const CheckBoxWrapper = styled.div`
  min-height: 16px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  width: fit-content;
  align-items: center;
`

export const CheckButton = styled.button`
  min-height: 16px;
  min-width: 16px;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  background-color: transparent;
  border-width: 0px;
  :focus {
    background-color: ${({ theme }) => theme.colors.selectItens};
  }
`

export const Label = styled.div<{ isChecked: boolean }>`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: ${({ isChecked }) => (isChecked ? 700 : 400)};
  font-size: 16px;
  line-height: 21px;

  padding-left: 8px;
`
