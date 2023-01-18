import styled, { css } from 'styled-components'

interface IImageBackground {
    active: boolean
}

interface IContainerThumbnails {
    showSwitchIndividual: boolean
}


export const ContainerThumbnails = styled.div<IContainerThumbnails>`
    width: 180px;
    min-width: 180px;
    height: ${( props ) => `${props.showSwitchIndividual ? '352px' : '320px'}`};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-sizing: border-box;
    position: relative;
    padding-top: 8px;    
    z-index: 9999px;
    user-select: none;
`
export const ContainerButton = styled.div<IImageBackground>`    
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 8px;
    z-index: 1;
    background-color: #00000090;
    margin:0;
    padding: 0;
    border: none;
    display: ${( props ) => `${props.active ? 'flex' : 'none'}`};
    justify-content: center;
    align-items: center;
`
export const Thumbnails = styled.div`
    display: flex;
    justify-content: center;   
    `
export const Image = styled.img<IImageBackground>`
    width: 155px;
    height: 205px;
    border-radius: 4px;
    position: absolute;
    object-fit: cover;
    margin-top: 10px;
    margin-left: 12px;
    filter: ${( props ) => `grayscale(${props.active ? '0' : '1'})`};   
    `
export const GeralThumbnails = styled.div`    
   margin: 0;
`
export const ContainerMain = styled.div`
    display: flex;
    margin-top: 235px;
    position: relative;
    align-items: center;
`
export const Typography = styled.p`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.shadeBlack};
    margin-left: 12px; 
    white-space: wrap;
    position: absolute;
`
export const IconVertical = styled.div`
    margin-left: 150px;
    margin-top: 10px;
    width: 34px;
    cursor: pointer;
    position: absolute;
`
export const ContainerAtivar = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 45px;
    margin-left: 24px;
    position: absolute;
`
export const TypographyAtivar = styled.span<IImageBackground>`
    font-family: 'PT Sans';
    font-style: normal;
    font-size: 16px;
    line-height: 21px;
    text-align: right;
    color: ${({ theme }) => theme.colors.shadeBlack};        
`
/* ################addNew############################ */

export const ContainerThumbnailsAdd = styled.div`
    width: 177px;
    height: 352px;
    border-radius: 8px;
    border: 1px dashed ${({ theme }) => theme.colors.neutralsGrey5};
    background-color: ${({ theme }) => theme.colors.neutralsGrey6};
    box-sizing: border-box;
    padding: 14px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    gap: 10px;
`
export const ContainerEllipse = styled.button`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.colors.neutralsGrey4};
    cursor: pointer;
    padding-top: 5px;
`
export const TypographyAdd = styled.p`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;     
    color: ${({ theme }) => theme.colors.neutralsGrey4};
    text-align: center;
    word-wrap: break-word;      
`