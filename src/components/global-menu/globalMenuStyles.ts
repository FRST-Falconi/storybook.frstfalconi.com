import styled from 'styled-components'
import { enumVariant } from './globalMenu'

interface IMenuContainer {
    variant?: enumVariant,
}

export const MenuContainer = styled.div<IMenuContainer>`
    width: 100%;
    height: 64px;

    background: ${({ variant, theme }) => variant == 'LXP' ? theme.colors.neutralsGrey1 : theme.colors.primary1};

    padding-left: 124px;
    padding-right: 124px;

    display: flex;
    align-items: center;
`


export const WrapperLogo = styled.div`
    margin-right: 65px;
`

export const WrapperMenu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`

export const WrapperRightInfo = styled.div`
    height: 100%;   
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WrapperIconNotification = styled.div`
    height: 100%;
    width: 24px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
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