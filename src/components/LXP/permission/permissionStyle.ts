import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    min-height: 400px;
    flex-direction: column;        
`
export const Typography = styled.p`
   font-family: 'PT Sans' ;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 21px;
   color: ${({ theme }) => theme.colors.shadeBlack};
   margin: 20px; 
`
export const ContainerPermission = styled.div`
   width: 42%;
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   justify-content: space-between;
   align-items: center;
   margin: 20px;   
   border-bottom: 1px solid ${({ theme }) => theme.colors.shadeBlack};
   padding-bottom: 13px;
`
export const ContainerTypography = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px; 
`
export const TypographyTitle = styled.p`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.shadeBlack};
`
export const TypographyPermission = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.shadeBlack};
`
export const ContainerSwitch = styled.div`
   
`