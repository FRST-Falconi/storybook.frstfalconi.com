import styled from 'styled-components'
import { enumVariant } from './globalMenu'

interface IMenuContainer {
    variant?: enumVariant,
}

export const MenuContainer = styled.div<IMenuContainer>`
    width: 100%;
    height: 64px;

    background: ${({ theme }) => theme.colors.neutralsGrey1 };

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
    gap: 12px;
`

export const WrapperIconNotification = styled.div`
    
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    font-size: 16px;
    font-weight: 400;
    color: #FFF;
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
    color: #FFF;
`


export const SubMenuContainer = styled.div<IMenuContainer>`
    width: 100%;
    height: 32px;

    background: ${({ variant, theme }) => variant == 'LXP' ? theme.colors.neutralsGrey2 : theme.colors.primary1};

    padding-left: 124px;
    padding-right: 124px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top: 1px solid ${({ variant, theme }) => variant == 'LXP' ? theme.colors.neutralsGrey3 : theme.colors.primary1};
`


export const MenuMobile = styled.div<{isVisible}>`
    display: ${({isVisible}) => isVisible ? 'flex': 'none'};
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 10001;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #222;
`

export const SideMenu = styled.div<{isVisible}>`
    display: ${({isVisible}) => isVisible ? 'flex': 'none'};
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 10001;
    top:0;
    left: 0;
    width: 360px;
    height: 100vh;
    background: #222;
    margin-top: 1rem;
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

    color: #FFFFFF;

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

    color: #FFFFFF;

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
    ${({theme}) => theme.fonts.textMessageComponentsBodyRegular};
    color: ${({theme}) => theme.colors.shadeWhite};
    border-color: ${({theme}) => theme.colors.neutralsGrey3};
    margin-top: 0px;
    
`

export const frstSocials = styled.div`
    display:flex;
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