import styled from "styled-components";

export const ContainerCard = styled('div')`
    width: 140px;
    height: 146px;
    border-radius: 12px;
    padding: 16px;
    background: ${({theme}) => theme.colors.shadeWhite};
    cursor: pointer;
    border: 2px solid transparent;

    :hover {
        border: 2px solid #757575;
    }

    :focus {
        border: 2px solid #757575;
        background-color: #F7F7F7;
    }
`

export const ContentCard = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    p {
        font-family: 'PT Sans';
        font-size: 1rem;
        line-height: 1.1;
        font-weight: 700;
        text-align: center;
        color: #222222;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`