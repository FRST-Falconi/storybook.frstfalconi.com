import styled, { css } from 'styled-components'
import { enumVariant } from './globalMenu'

interface IMenuContainer {
    $variant?: enumVariant
    $marginTop?: boolean
}

export const MenuContainer = styled.div<IMenuContainer>`
    width: 100%;
    height: 64px;

    background: ${({ theme }) => theme.colors.neutralsGrey1};

    display: flex;
    align-items: center;
    justify-content: space-between;
    & > button {
        height: 100%;
    }
`

export const WrapperLogo = styled.div`
    margin-right: 65px;
    cursor: pointer;
    position: relative;
    top: 3px;
`
export const HamburgerButton = styled.div`
    cursor: pointer;
    display: flex;
    width: 48px;
    height: auto;
    margin-bottom: 10px;
    margin-right: 20px;
`
export const ArrowButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: auto;
`
export const WrapperMenu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`

export const WrapperRightInfo = styled.div`
    height: 100%;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const WrapperIconNotification = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    position: relative;
    left: 23px;
    padding: 8px;
    border-radius: 9px;

    :hover {
        padding: 8px;
        border-radius: 9px;
        background: #3a3a3a;
    }
`
export const WrapperIconNotificationText = styled.p`
    text-align: right;
    left: 0px;
    font-family: 'PT Sans';
    font-size: 16px;

    :active{
        font-weight: 700;
    }
`

export const WrapperIconNotificationMobile = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    margin-left: 24px;
    margin-right: 24px;
    height: 100%;
    color: #fff;
`

export const SubMenuContainer = styled.div<IMenuContainer>`
    width: 100%;
    height: 50px;
    ${(props) =>
        props.$marginTop &&
        css`
            margin-top: 4rem;
        `}
    background: ${({ $variant, theme }) => ($variant == 'LXP' ? theme.colors.neutralsGrey2 : theme.colors.primary1)};

    padding-left: 124px;
    padding-right: 124px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const MenuMobile = styled.div<{ $isVisible }>`
    display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 10001;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #222;
`

export const SideMenu = styled.div<{ $isVisible }>`
    display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 10001;
    top: 0;
    left: 0;
    width: 360px;
    height: 100vh;
    background: #222;
`

export const ItemSideMenu = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 360px;
    height: 20px;

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    padding: 20px;

    color: #ffffff;

    border-bottom: 1px solid #444;

    &:hover {
        background: #4444;
    }
`

export const ItemMenuMobile = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100vw;
    height: 20px;

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    padding: 20px;

    color: #ffffff;

    border-bottom: 1px solid #444;

    &:hover {
        background: #4444;
    }
`

export const footerMenuMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${({ theme }) => theme.fonts.textMessageComponentsBodyRegular};
    color: ${({ theme }) => theme.colors.shadeWhite};
    border-color: ${({ theme }) => theme.colors.neutralsGrey3};
    margin-top: 0px;
`

export const frstSocials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 24px;
    margin-bottom: 32px;
`

export const itemFrstSocials = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`

export const Help = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 15px;
    cursor: pointer;
    padding: 8px 20px 8px 8px;
    border-radius: 9px;

    :hover {
        padding: 8px 20px 8px 8px;
        border-radius: 9px;
        background: #3a3a3a;
    }
`

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    gap: 4px;
    padding: 8px;
    border-radius: 9px;

    :hover {
        padding: 8px;
        border-radius: 9px;
        background: #3a3a3a;
    }
`

export const TextNotification = styled.p`
    color: #fff;
    width: 45px;
    height: 25px;
    align-items: center;
    display: flex;
    font-family: 'PT Sans';
    font-size: 16px;

    :active {
        font-weight: bold;
    }
`


export const TolltipTopbar = styled.div`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #757575;
  box-shadow: 0px 25px 18px -20px rgba(34, 34, 34, 0.2);
  padding: 6px;
  position: absolute;
  width: 205px;
  height: 54px;
  right: 145px;
  text-align: center;
  top: 24px;


  &::before {
    content: '';
    position: absolute;
    top: -15px;
    right: 10px; /* Ajuste conforme necessário */
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }


  @media screen and (max-width: 1199px) {
    width: 205px;
    right: 28px;;
    font-size: 14px;

    &::before {
      right: 15px;
    }
  }

  @media screen and (min-width: 1200px) and (max-width: 1320px) {
    width: 205px;
    right: 28px;
    font-size: 14px;

    &::before {
      right: 15px;
    }
  }
  @media screen and (min-width: 1321px) {
    width: 205px;
    right: 28px;
    font-size: 14px;

    &::before {
      right: 15px;
    }
  }
`