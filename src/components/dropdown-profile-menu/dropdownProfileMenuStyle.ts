import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'


export const Container = styled.div`
  width: auto;
  height: auto;
`
export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: row;
  width: 290px;
  background-color: #222;
  padding: 12px;
`
  export const WrapperRightProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  `
  export const ProfileNameInfo = styled.span`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    
    display: flex;
    align-items: center;
    
    color: #FFFFFF;
  `
  export const ProfileCompanyInfo = styled.span`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    
    display: flex;
    align-items: center;
    
    color: #FFFFFF;
  `

  export const WrapperButtonFrst = styled.div`
    & > button {
      margin-top: 16px;
      
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #FFF; 
      border: 1px solid #FFF;
      width: 106px;
      height: 48px;
      border-radius: 8px;
      white-space: nowrap;

      &:hover {
        color: #FFF; 
        border: 1.8px solid #FFF;        
      }
      &:focus {
        color: #FFF; 
        border: 2px solid #FFF;        
      }
    }
  `

export const UserName = styled.span`
  color: white;
  padding-left: 8px;
  padding-right: 8px;

  text-transform: none;

  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  display: flex;
  align-items: center;
  text-align: right;

  color: #FFFFFF;
`

export const AvatarCustomUser = styled(Avatar)`
  height: 32px;
  width: 32px;
`

export const MenuCustom = styled(Menu)`
  & .MuiPaper-root{
    border-radius: 0px;

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: none !important;
  }
  ul {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`

export const LoginMenuCustom = styled(Menu)`
  & .MuiPaper-root{
    border-radius: 0px;
    box-shadow: none !important;
    background: linear-gradient(359.72deg, rgba(166, 166, 166, 0.4) 69.54%, rgba(0, 0, 0, 0.4) 88.63%), #000000 !important;
  }
  ul {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`

export const MenuItemCustom = styled(MenuItem)`
  color: white !important;
  border: 0;
  background-color: #222222 !important;
  border-top: 0.5px solid #757575 !important;
  &:hover {
    background-color: #444444 !important;
  }
`

export const SubMenuItemCustom = styled(MenuItem)`
  color: white !important;
  background-color: #222222 !important;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  &:hover {
    background-color: #444444 !important;
  }
`