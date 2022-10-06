import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

export const UserName = styled.p`
  color: white;
  padding-left: 5px;
  font-size: 16px;
`

export const MenuCustom = styled(Menu)`
  margin-left: -90px;
  margin-top: 10px;

  & .MuiPaper-root {
    border-radius: 0px;
    box-shadow: none !important;
    overflow: visible;

    &:before {
      content: "";
      position: absolute;
      top: -17px;
      right: 19.5px;
      border-top: 7px solid transparent;
      border-bottom: 10px solid #BDBDBD;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
    }
  
    &:after {
        content: "";
        position: absolute;
        top: -16px;
        right: 19.5px;
        border-top: 7px solid transparent;
        border-bottom: 10px solid #FFF;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
    }
  }
  ul {
    box-shadow: -3px 16px 12px -12px #BDBDBD;
    padding-top: 0px;
    padding-bottom: 0px;
    border: 1px solid #BDBDBD !important;
    border-radius: 4px !important;
    overflow: hidden;
  }
`

export const MenuItemCustom = styled(MenuItem)`
  background-color: ${({theme}) => theme.colors.shadeWhite} !important;
  margin: 1px !important;
  &:hover {
    background-color: ${({theme}) => theme.colors.neutralsGrey7} !important;
  }
`

export const SubMenuItemCustom = styled(MenuItem)`
  color: white !important;
  background-color: #F5792A !important;

  displey: flex;
  flex-direction: row;
  &:hover {
    background-color: #FD9350 !important;
  }
`

export const TextOption = styled.div`
  margin-left: 10px;
  padding-top: 1px;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
`