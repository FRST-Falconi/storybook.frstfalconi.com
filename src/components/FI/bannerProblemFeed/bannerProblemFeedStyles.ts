import styled from "styled-components";

export const achievementHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    
    height: 96px;
    padding: 20px 32px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    word-break: break-all;

    ${({theme}) => theme.fonts.textMessageComponentsBodyBold};
    color: ${({theme}) => theme.colors.shadeWhite};
`

export const bannerContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border: 1px solid ${({theme}) => theme.colors.borderPrimary}; 
    background-color: ${({theme}) => theme.colors.shadeWhite};
    padding: 24px;
`

export const headerContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const userInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    font-family: 'Work Sans';
    color: ${({theme}) => theme.colors.neutralsGrey1};
    margin-left: 16px;
`

export const problemTitle = styled.div`
    font-family: 'Work Sans';
    color: ${({theme}) => theme.colors.primary1};
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-top: 32px;
    word-break: break-all;
`

export const tagContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 32px;
`

export const lastUpdatedText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    ${({theme}) => theme.fonts.textMessageComponentsBodySmall};
    margin-top: 16px;
`

export const stepsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    border: 1px solid ${({theme}) => theme.colors.borderPrimary}; 
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.shadeWhite};
    padding: 24px;
    margin-bottom: 24px;
`

export const stepsTitle = styled.span`
    ${({theme}) => theme.fonts.header2};
    font-size: 24px !important;
`

export const stepsLabel = styled.span`
    font-family: 'Work Sans';
    font-size: 16px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.neutralsGrey1};
    margin-top: 16px;
    word-break: break-all;
`

export const stepsValueText = styled.span`
    font-family: 'Work Sans';
    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.neutralsGrey1};
    margin-top: 8px;
    word-break: break-all;
`