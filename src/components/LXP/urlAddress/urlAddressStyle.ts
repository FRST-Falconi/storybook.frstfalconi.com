import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 169px;    
    background: #FFFDEE;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    padding-left: 120px;
    gap: 40px;
`
export const ContainerLink = styled.div`
    margin: 0;
`
export const TypographyCanal = styled.p`
    margin-bottom: 16px;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.primary1};
`
export const BoxLink = styled.div`
    width: 100%;
    min-height: 63px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.secondary2};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    padding-top: 11px;
    padding-left: 13px;
    padding-right: 30px;
    margin-right: 10px;
`
export const TypographyLink = styled.p`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.linkOnfocus};
`
export const TypographyMsn = styled.p`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.secondary};
    padding-top: 8px;
`
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 45px;
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
`    
