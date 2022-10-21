import styled, { css } from 'styled-components'

export const ContainerBanner = styled.div<{bannerNormal, bannerResponsive}>`
    width: 100%;
    height: 508px;
    background-image: url("${({bannerNormal}) => bannerNormal}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 120px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    & > div:nth-child(5) {
        display: none;
    }
    @media (max-width: 1500px) {
        padding: 20px !important;
    }

    @media (max-width: 1200px) {
        & > div:nth-child(1) {
            display: none !important;
        }
    }

    @media (max-width: 870px) {
        background-image: url("${({bannerResponsive}) => bannerResponsive}");
        height: 745px;

        & > div:nth-child(2) {
            min-width: 100%;
        }
        & > div:nth-child(3) {
            min-width: 360px;
            max-width: 360px;

            & > div:nth-child(2) {
                margin-bottom: 0px;
            }
            & > button {
                display: none;
            }
        }
        & > div:nth-child(4) {
            min-width: 100%;
            max-width: 100%;
            display: flex;
            justify-content: center;

            & > div:nth-child(1) {
                width: 270px;
                margin-left: 0px;

                & > div:nth-child(1) {

                }
            }
        }
        & > div:nth-child(5) {
            min-width: 100%;
            min-width: 360px;
            display: flex;
            align-self: flex-end;
            margin-bottom: 40px;
            & > button {
                width: 360px;
                max-width: 100%;
            }
        }
    }
`
export const WrapperContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const WrapperContentMain = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    & button {
        width: fit-content;
        white-space:  nowrap;
    }
`

export const WrapperContentHelper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: row;
`

export const TitleSRG = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    white-space:  nowrap;

    display: flex;
    align-items: center;
    letter-spacing: 0.01em;

    color: ${({theme}) => theme.colors.shadeWhite};
    margin-bottom: 24px;
    
`

export const DescriptionSRG = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;

    color: ${({theme}) => theme.colors.shadeWhite};
    margin-bottom: 24px;
`



export const SpeechBubble = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    background: ${({theme}) => theme.colors.messageAlert2};
    border: 1.5px solid ${({theme}) => theme.colors.borderSecondary2};
    border-radius: 8px;
    padding: 16px;
    
    width: 160px;
    margin-right: 22px;
    margin-left: 50px;

    &:before {
        content: "";
        position: absolute;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 20px solid ${({theme}) => theme.colors.borderSecondary2}; 
        border-right: 10px solid transparent;
        margin-right: -46px;
        margin-bottom: 0px;
    }

    &:after {
        content: "";
        position: absolute;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 20px solid ${({theme}) => theme.colors.messageAlert2}; 
        border-right: 10px solid transparent;
        margin-right: -44px;
        margin-bottom: 0px;
    }

    & a {
        align-self: flex-start;
    }
`
export const HelperText = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: ${({theme}) => theme.colors.neutralsGrey1};
    margin-bottom: 8px;
`


export const FrstSocials = styled.div`
    display:flex;
    justify-content: center;
    align-center: center;
    flex-direction: row;
    margin-top: 24px;
    margin-bottom: 32px;
    position: absolute;
    right: 120px;
    top: 60px;
    @media (max-width: 1500px) {
        right: 40px;
    }
`

export const ItemFrstSocials = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    margin-left: 11px;
`