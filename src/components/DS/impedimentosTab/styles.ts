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
    min-height: 56px;

    p {
        font-family: 'PT Sans';
        font-size: 14px;
        line-height: 1.3;
        color: ${({theme}) => theme.colors.neutralsGrey1};
        font-weight: 400;
    }

`

export const WrapperAddButton = styled('div')<{activeButton: boolean}>`
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    cursor: pointer;

    p {
        font-family: 'PT Sans';
        font-size: 16px;
        line-height: 1.1;
        font-weight: 700;
        color: #8E0EC8;
    }

    ${(props) => props.activeButton &&
        css`
            color: #7C0EAF;
        `
    }

    :hover {
        background-color: ${({theme}) => theme.colors.neutralsGrey8};
        color: #7C0EAF;

        svg path {
            stroke: #7C0EAF;
        }
    }

    svg {
        width: 16px;
        height: 16px;

        path {
            ${(props) => props.activeButton ?
                css`
                    stroke: #7C0EAF;
                `
                :
                css`
                    stroke: #8E0EC8;
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

    p {
        font-family: 'PT Sans';
        font-size: 16px;
        line-height: 1.1;
        font-weight: 400;
        color: ${({theme}) => theme.colors.neutralsGrey1};

        ${(props) => props.activeSelect &&
            css`
                font-weight: 700;
                color: ${({theme}) => theme.colors.neutralsGrey2};
            `
        }
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

export const WrapperMenuMore = styled('div')`
    margin-left: auto;
    margin-right: 0;
`

export const EditWrapper = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
`

export const EditButtons = styled('div')<{buttonColor: string}>`
    width: 32px;
    height: 32px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.buttonColor};
`