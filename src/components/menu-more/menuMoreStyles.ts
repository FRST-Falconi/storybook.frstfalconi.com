import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'

export const UserName = styled.p`
  color: white;
  padding-left: 5px;
  font-size: 16px;
`

export const ButtonMore = styled(Button)`
    width: 30px !important;
    min-width: 30px !important;
    max-width: 30px !important;
    height: 30px !important;
    margin: 0px !important;
    padding: 0px !important;
    display: flex !important;
    justify-content: center !important;
    border-radius: 12px !important;

    &:hover {
        background-color: #FFF9 !important;
    }

`

export const MenuCustom = styled(Menu)`
  margin-top: 10px;
  margin-left: 40px;
  overflow: hidden;
  border-radius: 10px;

  & .MuiPaper-root {
    border-radius: 0px;
    box-shadow: none !important;
    overflow: visible;
    background: #00000000;

    &:before {
      content: "";
      position: absolute;
      top: -17px;
      right: 19.5px;
      border-top: 7px solid transparent;
      border-bottom: 10px solid #EBEBEB;
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
    border: 1px solid #EBEBEB !important;
    border-radius: 8px !important;
    overflow: hidden;
    background: #FFF;
  }
`

export const MenuItemCustom = styled(MenuItem)`
  background-color: ${({theme}) => theme.colors.shadeWhite} !important;
  padding-right: 45px !important;
  margin: 1px !important;
  transition: none !important;
  animation: none !important;
  &:hover {
    background-color: #F7F9FC !important;
  }
  &:active {    
    background-color: #FBF3EC !important;
  }

  
`

export const SubMenuItemCustom = styled(MenuItem)`
  color: white !important;
  background-color: #F5792A !important;

  display: flex;
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
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`

export const IconOption = styled.div`
  width: 20px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`