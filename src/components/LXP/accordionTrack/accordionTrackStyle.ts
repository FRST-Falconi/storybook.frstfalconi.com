import styled, { css } from 'styled-components'

interface IImageBackground {
    active: boolean
}

export const ContainerHeader = styled.div<IImageBackground>`
    width: 100%;
    min-height: 72px;
    margin-top: 12px;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    padding-left: 27px;
    padding-right: 8px;
    background-color: ${( props ) => `${props.active ? '#ffffff' : '#ebebeb'}`};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    z-index: 99px;   
`
export const LoadingContent = styled.div`
    background: linear-gradient(90deg, rgba(123, 129, 136, 0) 6.43%, rgba(123, 129, 136, 0.2) 22.38%), #D9D9D9;
    color: transparent;
    border-radius: 5px;
    width: 90%;
    height: 0.45em;
    border: none;
    
    -webkit-animation-duration: 4s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: placeholderShimmer;
    -webkit-animation-timing-function: linear;

`

export const ContainerHeaderEmpty = styled.div<IImageBackground>`
    width: 100%;
    min-height: 72px;
    margin-top: 12px;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    padding-left: 27px;
    padding-right: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    z-index: 99px;   
`

export const ContainerTrailsNormal = styled.div`
    height: 415px; 
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    padding-top: 16px;
    margin-top: -5px; 
    background-color: rgb(235, 235, 235);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 0;
    width: 100%;
`
export const ContainerTrailsEmpty = styled.div`
    height: 415px; 
    padding-top: 16px;
    margin-top: -5px; 
    z-index: 0;
    width: 100%;    
    div[visibility="hidden"]{
        position: absolute;
    };
`
export const ContentTrailName = styled.div<IImageBackground>`
    display: flex;
    flex-direction: row;    
    gap: 20px;    
`
export const TypographyTrailName = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: ${({ theme }) => theme.colors.primary1};
`
export const Select = styled.div`
    cursor: pointer;    
`
export const ContentActiveHeader = styled.div`
    display: flex;
    flex-direction: row;    
    gap: 50px;    
`
export const TypographyActiveHeader = styled.span<IImageBackground>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'PT Sans';
    font-style: normal;
    font-size: 16px;
    line-height: 21px;
    text-align: right;
    color: ${({ theme }) => theme.colors.shadeBlack};    
    display: flex;
    gap: 10px;        
`
export const IconVerticalHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const ContainerAccordion = styled.div<IImageBackground>`
    width: 100%;
    min-height: 415px;
    display: flex;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.neutralsGrey7};
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-radius: 0px 0px 8px 8px;    
    padding: 30px 0px 30px 0px;
    filter: ${( props ) => `grayscale(${props.active ? '0' : '1'})`};
    margin-top: -5px;
`
export const ContainerCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    justify-items: center;
    width: 100%;
    min-height: 300px;
    gap: 20px;       
`
export const ContainerInputNameTrail = styled.div`
    display: inline-flex;
    flex-direction: row;
    gap: 18px;

    input{
        border: 1px solid #BDBDBD;
        border-radius: 8px;
        background: #EBEBEB;
        width: 220px;
        height: 45px;
        padding-left: 10px;
    }
`
export const TypographyMyContents = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;    
    color: ${({ theme }) => theme.colors.primary1};
`
export const TypographyMyTrails = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;    
    color: ${({ theme }) => theme.colors.primary1};
`

export const PopOver = styled.div`
    z-index: 999;
    width: 100%;
    min-height: 31px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 18px 20px -15px #222222;
    position: relative;
    padding: 8px;
    margin-bottom: 16px;
`

export const RectangleLowCenter = styled.div<{variant: string}>`
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 27px 0 -7px calc(50% - 7px);
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-left: none;   
    border-top: none;
    transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);
    
    ${({ variant }) => (variant)}
`