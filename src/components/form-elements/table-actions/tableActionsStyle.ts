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

export const WrapperEmptyState = styled.div<{ variant }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 8px;
  min-height: fit-content;
  background-color: ${({ variant, theme }) => variant == 'button' ? '#BEDCDC' : theme?.colors.shadeWhite};
  overflow: hidden;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: min-height 0.5s ease-in-out;
  transition: background-color 0.5s ease-in-out;
`

export const WrapperEmptyStateCaseButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 40px;
  padding-left: 15%;              
`

export const WrapperButtonEmpty = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`

export const ButtonEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 150px;
  background-color: #E0AF00;
  cursor: pointer;
  border-radius: 12px;
  white-space: nowrap;
  padding-left: 2px;
  padding-right: 2px;
  margin: 2px;
`