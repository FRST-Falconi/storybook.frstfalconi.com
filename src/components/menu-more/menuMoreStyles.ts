import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import styled from 'styled-components'

export const UserName = styled.p`
  color: white;
  padding-left: 5px;
  font-size: 16px;
`

export const ButtonMore = styled(Button) <{ isHover: boolean }>`
    width: 30px !important;
    min-width: 30px !important;
    max-width: 30px !important;
    height: 30px !important;
    margin: 0px !important;
    padding: 0px !important;
    display: flex !important;
    justify-content: center !important;
    border-radius: 12px !important;
    background-color: transparent !important;
    ${({ isHover }) => isHover && `&:hover {
      background-color: #FFF9 !important;
  }`};
`


export const MenuCustom = styled(Menu) < { isArrowInMenu: boolean, isPaddingInMenu: boolean, isDarkMode: boolean } > `
margin-top: ${({ isArrowInMenu }) => isArrowInMenu ? '8px' : '15px'};
margin-left: 30px;
overflow: hidden;
border-radius: 8px;

  & .MuiPaper-root {
  border-radius: 8px !important;
  box-shadow: 0px 15px 20px -20px rgba(34, 34, 34, 0.15), 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
  overflow: visible;
  background: #00000000;
   ${({ isArrowInMenu }) => isArrowInMenu &&
    `&:before {
    content: "";
    position: absolute;
    top: -15px;
    right: 8.5px;
    border-top: 6px solid transparent;
    border-bottom: 10px solid #EBEBEB;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
  
    &:after {
    content: "";
    position: absolute;
    top: -14px;
    right: 8.5px;
    border-top: 6px solid transparent;
    border-bottom: 10px solid #FFF;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;

  }`} 
}
  ul {
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15), 0px 15px 20px -20px rgba(34, 34, 34, 0.15);
  padding-top: 0px;
  padding-bottom: 0px;
  border: 1px solid ${({ isDarkMode }) => isDarkMode ? '#1f1f1f' : '#EBEBEB'}!important;
  border-radius: 8px!important;
  overflow: hidden;
  background:${({ isDarkMode }) => isDarkMode ? '#1f1f1f' : '#FFF'};
  min-width: 160px;
  width: auto;
  &:hover {
    background:${({ isDarkMode }) => isDarkMode ? '#525252' : '#FFF'};
    border: 1px solid ${({ isDarkMode }) => isDarkMode ? '#525252' : '#EBEBEB'} !important;
  }
  li {
    ${({ isPaddingInMenu }) => isPaddingInMenu && `padding-left: 25px;`}
  }
}
`

export const MenuItemCustom = styled(MenuItem) < { isPaddingInMenu: boolean, isDarkMode: boolean } > `
  background-color: ${({ theme, isDarkMode }) => isDarkMode ? `#1f1f1f` : theme.colors.shadeWhite} !important;
  ${({ isPaddingInMenu }) => isPaddingInMenu && `padding-right: 45px!important;`}
  margin: 1px!important;
  transition: none!important;
  animation: none!important;
    &:hover {
    background-color: ${({ isDarkMode }) => isDarkMode ? `#525252 !important;` : `#F7F9FC!important;`};
  }
    &:active {
    background-color: ${({ isDarkMode }) => isDarkMode ? `#525252 !important;` : `#FCF3EB!important;`};
  }
`

export const SubMenuItemCustom = styled(MenuItem)`
color: white!important;
background-color: #F5792A!important;

display: flex;
flex-direction: row;
  &:hover {
  background-color: #FD9350!important;
}
`

export const TextOption = styled.div`
margin-left: 10px;
padding-top: 1px;
font-family: 'PT Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17.6px;
`

export const IconOption = styled.div`
width: 20px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
`
