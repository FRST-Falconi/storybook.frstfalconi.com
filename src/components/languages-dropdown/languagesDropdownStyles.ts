import styled from "styled-components"

export const sdsdsa =  styled.button<{variant, typeItem}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    border-bottom: ${({typeItem}) => typeItem == 'menu'? '4px': '2px'} solid transparent;
    border-top: ${({typeItem}) => typeItem == 'menu'? '4px': '2px'} solid transparent;

    background-color: ${({variant, theme}) => variant == 'LXP' ? theme.colors.neutralsGrey1 : theme.colors.primary1};

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #FFFFFF;


    &:hover {
        background-color: ${({variant, theme}) => variant == 'LXP' ? theme.colors.neutralsGrey3 : '#F5792A'};
        border-bottom: ${({typeItem}) => typeItem == 'menu'? '4px': '2px'} solid 
        ${({variant, typeItem, theme}) => variant == 'LXP' && typeItem == 'menu' ? theme.colors.primary1: theme.colors.shadeWhite};
    }

    &:focus {
        font-weight: 700;
    }
`

export const Wrapper =  styled.div<{variant}>`
    width: 50px;
    object-fit: contain;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
    user-select: none;
    background: transparent;
    border: 0;
`

export const Image =  styled.img`
    width: 50px;
    user-select: none;
    cursor: pointer;
    object-fit: contain;
`

export const WrapperDrop =  styled.div<{variant, isVisible}>`
    user-select: none;
    width: 50px;

    position: absolute;
    margin-top: 45px;
    z-index: 10000;

    border: 0;
    display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
    flex-direction: column;
    background-color: ${({variant, theme}) => variant == 'LXP' ? theme.colors.neutralsGrey1 : '#F5792A'};
`