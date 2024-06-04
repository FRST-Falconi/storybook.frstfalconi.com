import styled, { css } from 'styled-components'

interface ContainerProps{
    variant: boolean
}

export const UserContainer = styled.div<ContainerProps>`
    width: 100%;
    display: flex;
    position: relative;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    background:${({ theme }) => theme.colors.shadeWhite};
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

    ${
        (props) => props.variant ? css`
            padding-top: 12px;
            padding-left:16px;
            padding-right: 16px;
            padding-bottom: 16px;
            min-height: 231px;
        ` : css`
            padding-top: 18px;
            padding-left:16px;
            padding-right: 16px;
            padding-bottom: 22px;
            min-height: 208px;
        `
    }
`

export const Headers = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;

`

export const UserInfo = styled.p<ContainerProps>`
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    font-family: 'Work Sans';
    ${
        (props) => props.variant ? css`
            margin-top: 12px;
        ` : css`
            margin-top: 8px;
        `
    }
`

export const InfoBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 8px;
    font-size:12px;
    text-align: center;
    margin-top:14px;
    font-family:PT Sans;
    `
export const InfoDescription = styled.div<ContainerProps>`
    margin-top:8px;
    font-size:12px;
    text-align:center;
    margin-bottom:3px;
    color:#757575;
    ${
        (props) => props.variant ? css`
            font-family: 'PT Sans';
            font-weight: 400;
            line-height:  130%;
        ` : css`
            font-family: 'Work Sans'
        `
    }
`



