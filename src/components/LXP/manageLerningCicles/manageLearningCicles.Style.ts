import styled, { css } from 'styled-components'

interface PropsStyleManagerLerningCicle {
    isOpen: boolean
}

export const Container = styled.div<PropsStyleManagerLerningCicle>`
    width: 24.188rem;    
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    positon: relative;
    ${(props) =>
    props.isOpen &&
    css`
        background-color: #D3D3D3;
    `}
    
`
export const TypographyDefinition = styled.p`
    font-family: 'Work Sans';
    font-Weight: 700;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.borderSecondary4};
    margin-top: 2rem;
    margin-left: 1.6rem;
`
export const Date = styled.p`
    font-family: 'PT Sans';
    font-Weight: 400;
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.neutralsGrey3};
    margin-left: 1.6rem;
`
export const ContetsName = styled.div`
    margin-left: 1.6rem;
    margin-top: 1.5rem;    
`
export const TypographyContentsName = styled.p`
    font-family: 'PT Sans';
    font-Weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutralsGrey3};
`
export const ContainerIcon = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    margin-top: 1.5rem;    
    position: relative;    
`
export const SelectIcon = styled.select`
    font-family: 'PT Sans';
    font-Weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutralsGrey4};
    border: none;
    background: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;    
    padding-left: 20px;
    position: absolute;    
`
export const GroupName = styled.div<PropsStyleManagerLerningCicle>`
    width: 24.1rem;
    height: 78.63px;
    background-color: #F7F9FC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;    
    margin-top: 62px;
    ${(props) =>
    props.isOpen &&
    css`
        background-color: ${({ theme }) => theme.colors.borderPrimary};        
    `}

    p{
        margin-left: 1.6rem; 
    }

    div{
        margin-right: 2rem;
        cursor: pointer;
    }  
`
