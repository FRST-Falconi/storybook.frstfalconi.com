import styled, { css } from 'styled-components'

export const Container= styled.div<{sizeIcon}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 180px;
    height: 176px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    box-shadow: none;

    & > svg {        
        max-height: ${({sizeIcon}) => sizeIcon ? sizeIcon:'64px'};
        height: 100%;
        width: auto;
    }

    &:hover{
        box-shadow: 0px 18px 40px -15px;
    }
`
export const ContentSwitcher= styled.button<{}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 180px;
    height: 176px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    box-shadow: none;

    & > svg {        
        height: 64px;
        width: 64px;       
    }

    &:hover{
        box-shadow: 0px 18px 40px -15px
    }
`;
export const ContentSwitcherSelected= styled.button<{sizeIcon}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 180px;
    height: 176px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.primary1};
    color: ${({ theme }) => theme.colors.shadeWhite};

    & > svg {        
        max-height: ${({sizeIcon}) => sizeIcon ? sizeIcon:'64px'};
        height: 100%;
        width: auto;
    }

    &:hover{
        box-shadow: 0px 18px 40px -15px ${({ theme }) => theme.colors.primary3} ;
    }
`;


