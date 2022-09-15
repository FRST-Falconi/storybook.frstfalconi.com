import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const Title = styled.p` 
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;

    display: flex;
    align-items: center;
    letter-spacing: 0.01em;

    color: ${({theme}) => theme.colors.neutralsGrey1};

    margin-bottom: 30px;
`

export const WrapperList = styled.div`
    display: flex;
    flex-direction: column;
`

export const ItemList = styled.div<({isMobile})>`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
    min-width: ${({isMobile}) => isMobile ? '0x' : '374px'};
    margin-bottom: 16px;
`

export const TextList = styled.span`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    margin-left: 12px;
`

export const IconList = styled.span`
    margin-top: 2px;
`