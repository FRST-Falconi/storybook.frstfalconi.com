import styled, { css } from "styled-components";

export const ContainerImpedimentos = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const TabWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Tab = styled('div')<{selected: boolean}>`
    width: 137px;
    padding: 12px 16px;
    background-color: ${({theme}) => theme.colors.shadeWhite};
    border-radius: 8px 8px 0px 0px;
    cursor: default;

    ${(props) => props.selected &&
        css`
            background-color: #D2ACE4;
        `
    }

    p {
        font-family: 'PT Sans';
        font-size: 16px;
        line-height: 1.1;
        color: ${({theme}) => theme.colors.neutralsGrey1};
        font-weight: ${ props => props.selected ? 700 : 400 };
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden
    }

    :hover {
        background-color: ${({theme}) => theme.colors.neutralsGrey8};

        ${(props) => props.selected &&
            css`
                background-color: #D2ACE4;
            `
        }

    }

`

export const TabInfoWrapper = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    border-radius: 0px 0px 8px 8px;
    background-color: #E5CBF1;
    height: 56px;

    p {
        font-family: 'PT Sans';
        font-size: 14px;
        line-height: 1.3;
        color: ${({theme}) => theme.colors.neutralsGrey1};
        font-weight: 400;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden
    }

`

export const WrapperAddButton = styled('div')<{activeButton: boolean}>`
    padding: 4px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-left: 16px;

    ${(props) => props.activeButton &&
        css`
            background-color: ${({theme}) => theme.colors.neutralsGrey6};
        `
    }

    :hover {
        background-color: ${({theme}) => theme.colors.neutralsGrey8};

        svg path {
            stroke: ${({theme}) => theme.colors.neutralsGrey1};
        }
    }

    svg {
        width: 16px;
        height: 16px;

        path {
            ${(props) => props.activeButton ?
                css`
                    stroke: ${({theme}) => theme.colors.neutralsGrey1};
                `
                :
                css`
                    stroke: ${({theme}) => theme.colors.neutralsGrey4};
                `
            }
        }
    }

`

export const WrapperImpedimentoSelect = styled('div')<{activeSelect: boolean}>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.colors.shadeWhite};
    cursor: default;

    ${(props) => props.activeSelect &&
        css`
            background-color: ${({theme}) => theme.colors.neutralsGrey6};
        `
    }

    p {
        font-family: 'PT Sans';
        font-size: 16px;
        line-height: 1.1;
        font-weight: 700;
        color: ${({theme}) => theme.colors.neutralsGrey2};
    }

    :hover {
        background-color: ${({theme}) => theme.colors.neutralsGrey8};
    }

`

export const WrapperSelectIcon = styled('div')<{isOpenSelect: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpenSelect }) => (isOpenSelect ? 'rotate(180deg)' : 'rotate(0deg)')} ;

    svg {
        width: 16px;
        height: 16px;

        path {
            stroke: ${({theme}) => theme.colors.neutralsGrey2};
        }
    }
`