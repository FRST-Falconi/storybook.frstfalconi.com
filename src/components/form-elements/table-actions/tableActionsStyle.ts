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
  cursor:pointer;
  /* :focus {
    background-color: ${({ theme }) => theme.colors.selectItens};
  } */
`

export const Label = styled.div<{ isChecked: boolean }>`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: ${({ isChecked }) => (isChecked ? 700 : 400)};
  font-size: 16px;
  line-height: 21px;

  padding-left: 8px;
`

export const ButtonActionInbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  min-width: fit-content;
  height: 100%;
  min-height: 35px;
  padding-left: 4px;
  padding-right: 4px;
  gap: 6px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary1};

  font-family: Work Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.42px;
  text-align: center;
  color: ${({ theme }) => theme.colors.shadeWhite};

  cursor: pointer;

`