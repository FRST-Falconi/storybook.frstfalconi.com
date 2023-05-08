import styled, { css } from 'styled-components'

export const RectangleUpLeft = styled.div<{variant: string}>`
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: -7px 0 32px 27px;
    left: 0;
    top: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-bottom: none;
    border-right: none;
    transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);

    ${({ variant }) => (variant)}
`
export const RectangleUpRight = styled.div<{variant: string}>`
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    right: 0;
    top: 0;
    margin: -15px 16px 0 27px;}
`
export const RectangleLowRight = styled.div<{variant: string}>`
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 27px 32px -7px 0px;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-left: none;   
    border-top: none;
    transform: matrix(0.71, 0.97, -0.51, 0.91, 0, 0);
    
    ${({ variant }) => (variant)}
`
export const RectangleLowLeft = styled.div<{variant: string}>`
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 27px 0 -7px 32px;
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

export const RectangleLeft = styled.div<{variant: string}>`
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 39px 0px 32px -7px;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-right: none;
    border-bottom: none;
    transform: matrix(0.91, -0.51, 0.91, 0.61, 0, 0);    
    
    ${({ variant }) => (variant)}
`
export const RectangleRight = styled.div<{variant: string}>`
    width: 13.64px;
    height: 13.64px;
    position: absolute;
    margin: 39px -7px 13px 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-left: none;   
    border-top: none;
    transform: matrix(0.91, -0.51, 0.91, 0.61, 0, 0);    
    
    ${({ variant }) => (variant)}
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
`
export const PopOverLeftRight = styled.div`
    width: 100%;
    min-height: 67px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 18px 40px -15px #d3d3d3;
    position: relative;
    margin: 0% 0% 0% 0%;
    padding: 8px;    
`

