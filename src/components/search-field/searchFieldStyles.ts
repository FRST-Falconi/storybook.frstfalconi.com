import styled from 'styled-components'

interface ISearchField {
  isHover?: boolean
  isOnFocus?: boolean
  inputSearchNewStyle?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelField = styled.label<ISearchField>`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.shadeBlack};

  color: ${({ theme, isHover }) => isHover && theme.colors.linkOnfocus};

  color: ${({ isOnFocus }) => isOnFocus && '#663366'};
`

export const ContainerIcon = styled.div`
  min-height: 20px;
  min-width: 20px;
  padding-left: 15px;
  padding-right: 8px;
  padding-top: 3px;
`

export const InputSearchWrapper = styled.div<ISearchField>`
  height: 48px;
  background-color: ${({ theme, inputSearchNewStyle }) => (inputSearchNewStyle ? theme.colors.shadeWhite : '#ebeded')};

  border-radius: 8px;

  cursor: pointer;
  display: flex;
  align-items: center;

  border: 1px solid
    ${({ isHover, theme, inputSearchNewStyle }) =>
      isHover ? theme.colors.linkOnfocus : inputSearchNewStyle ? theme.colors.neutralsGrey7 : '#E0E0E0'};

  ${({ isOnFocus }) => isOnFocus && 'outline: 1.5px solid #AE9BAE; border: 1px solid #663366;'}
`

export const InputText = styled.input<ISearchField>`
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  border: none;
  background: transparent;

  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.neutralsGrey1};

  &::placeholder {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    backgorund-color: #fff;
    color: ${({ theme, inputSearchNewStyle }) =>
      inputSearchNewStyle ? theme.colors.neutralsGrey1 : theme.colors.neutralsGrey3};
  }
`

export const ButtonAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.primary1};

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.shadeWhite};
  border-radius: 8px;

  padding: 14px;
  margin-right: -1px;
  margin-left: 10px;
  z-index: 2;
  white-space: nowrap;
`
