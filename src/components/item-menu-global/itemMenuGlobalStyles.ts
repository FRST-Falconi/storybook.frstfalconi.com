import styled from "styled-components"

export const Wrapper =  styled.button<{variant, typeItem, wrapText, pressed}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    border-bottom: ${({typeItem}) => typeItem == 'menu'? '4px': '2px'} solid transparent;
    border-top: ${({typeItem}) => typeItem == 'menu'? '4px': '2px'} solid transparent;

    background-color: ${({variant, theme, typeItem}) => typeItem == 'submenu' ? 'transparent' : variant == 'LXP' ? theme.colors.neutralsGrey1 : theme.colors.primary1};

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #FFFFFF;

    white-space: ${({wrapText}) => wrapText ? 'wrap': 'nowrap'};

    &:hover {
        background-color: ${({variant, theme}) => variant == 'LXP' ? theme.colors.neutralsGrey3 : '#F5792A'};
        border-bottom: ${({typeItem}) => typeItem == 'menu'? '4px': '2px'} solid transparent;
    }
    ${({pressed, variant, typeItem, theme}) => pressed && `
        font-weight: 700;
        border-bottom: ${ typeItem == 'menu'? '4px': '2px'} solid 
        ${variant == 'LXP' && typeItem == 'menu' ? theme.colors.primary1: theme.colors.shadeWhite};
    `}
    &:focus {
        font-weight: 700;
        border-bottom: ${({typeItem}) => typeItem == 'menu'? '4px': '2px'} solid 
        ${({variant, typeItem, theme}) => variant == 'LXP' && typeItem == 'menu' ? theme.colors.primary1: theme.colors.shadeWhite};
    }
`
export const WrapperSubItem =  styled.button<{variant, typeItem, wrapText}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    border-bottom: ${({typeItem}) => typeItem == 'menu'? '4px': '2px'} solid transparent;
    border-top: ${({typeItem}) => typeItem == 'menu'? '4px': '2px'} solid transparent;

    background-color: transparent;

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #FFFFFF;

    white-space: ${({wrapText}) => wrapText ? 'wrap': 'nowrap'};

    &:hover {
        background-color: ${({variant, theme}) => variant == 'LXP' ? theme.colors.neutralsGrey3 : '#F5792A'};
        border-bottom: ${({typeItem}) => typeItem == 'menu'? '4px': '2px'} solid 
        ${({variant, typeItem, theme}) => variant == 'LXP' && typeItem == 'menu' ? theme.colors.primary1: theme.colors.shadeWhite};
    }

    &:focus {
        font-weight: 700;
    }
`

