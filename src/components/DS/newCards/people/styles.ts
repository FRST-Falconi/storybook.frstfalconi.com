import styled from "styled-components";

export const ContainerCard = styled('div')`
    width: 280px;
    height: 140px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px;
    border-radius: 12px;
    background-color: ${({theme}) => theme.colors.shadeWhite};

    :hover {
        border: 2px solid #757575;
    }

    :focus {
        border: 2px solid #757575;
        background-color: #F7F7F7;
    }

`

export const HeaderInfo = styled('div')`
    display: flex;
    gap: 12px;
    height: 56px;
`

export const UserInfo = styled('div')`
    display: flex;
    flex-direction: column;

    .title {
        font-family: 'PT Sans';
        font-size: 14px;
        font-weight: 600;
        line-height: 1.1;
        color: #222222;
        margin-bottom: 4px;
    }

    p {
        font-family: 'PT Sans';
        font-size: 12px;
        font-weight: 400;
        line-height: 1.3;
        color: #757575;
    }
`

export const ButtonsList = styled('div')`
    display: flex;
    gap: 16px;
`

export const CardButton = styled('div')`
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background-color: ${({theme}) => theme.colors.primary1};
    border: 1px solid ${({theme}) => theme.colors.primary1};

    :hover {
        background: #F18624;
    }

`