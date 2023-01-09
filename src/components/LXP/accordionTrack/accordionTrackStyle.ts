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
    //border: 1px solid black; 
    padding-top: 16px;
    margin-top: -5px; 
    background-color: rgb(235, 235, 235);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
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
export const TypographyActiveHeader = styled.p<IImageBackground>`
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