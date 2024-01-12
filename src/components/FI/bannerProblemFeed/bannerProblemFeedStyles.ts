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
    word-wrap: break-word;

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
    position: relative;
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
    margin-top: 24px;
    word-wrap: break-word;
`

export const tagContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 24px;
    gap: 8px;
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
    word-wrap: break-word;
`

export const stepsValueText = styled.span`
    font-family: 'Work Sans';
    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.neutralsGrey1};
    margin-top: 8px;
    word-wrap: break-word;
`

export const topHeaderTag = styled.span<{ background: string, color: string }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    gap: 10px;

    position: absolute;
    right: -1px;
    top: -1px;

    background: ${({background}) => background || '#940059'};
    color: ${({color}) => color || '#FFFFFF'};
    border-radius: 0px 8px;

`


export const ShowLikeDoubleClick = styled.div<{show}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: ${props => props?.show ? '1' : '0'};
    transition: opacity 0.2s ease-in-out;
    border-radius: 8px;
    user-select: none;
`

export const IconLike = styled.img`
    transform: rotate(180deg);
    transform: scaleY(-1);
    width: 30%;
    background-color: rgba(255, 255, 255, 0.8);

    border-radius: 50%;
    user-select: none;
    padding: 1%;

    // border: 0.5vw solid #0645ad;
`

export const WorkInfo = styled.span`
    font-weight: 400;
    font-size: 16;
    max-width: 21ch;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`