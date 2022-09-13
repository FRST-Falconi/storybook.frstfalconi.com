import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 270px;
    height: 409px;
    background-color: ${({ theme }) => theme.colors.primary2};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    position: relative;
`
export const Image = styled.img`
    width: 232px;
    height: 310px;
    margin-bottom: 45px;
    border-radius: 8px;
    position: absolute;
    object-fit: cover;
`
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute ;
    margin-top: 340px;
`
export const Typography = styled.p`
    width: 140px;
    height: 46px;    
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.shadeWhite};
    margin: 70px;
    margin-left: 8px;
`
export const Select = styled.div`
    background: none;
    width: 20px;
    height: 20px;
    margin-top: 95px;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`
export const ContainerCard = styled.div`
    width: 269px;
    height: 76px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    display: flex;
    align-items: center;
    margin-top: 2px;
    padding: 8px;
    position: relative;
    overflow: hidden;

    &:hover {
        background-color: ${({ theme }) => theme.colors.neutralsGrey5};
    }
    
    &:hover .trash {
        //display: block;
        right: 15px;       
    }
`
export const Thumbnails = styled.div`
    width: 17.29px;
    height: 51px;    
    margin-left: -11px;       
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`
export const Title = styled.div`
    margin: 10px;
    cursor: default;
` 
export const IconTrash = styled.div`
    cursor: pointer;
    //display: none;
    right: -15px;
    position: absolute;
    transition: all .2s linear;
    
`
// ##############TRILHA##############

export const ContainerTrilha = styled.div`
    width: 270px;
    height: 499px;
    background-color: ${({ theme }) => theme.colors.primary2};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;       

`
export const ContainerChoice = styled.div`
    width: 232px;
    height: 75px;
    position: absolute;
    top: 0;
    margin: 20px;    
`
export const TypographyChoice = styled.p`            
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #ffffff;
        padding-bottom: 8px;
        white-space: nowrap;    
`
export const SelectChoice = styled.select`    
        width: 232px;
        height: 48px;
        border-radius: 8px;
        border: 1px solid #E0E0E0;
        color: #9c9c9c;
        padding-left: 10px;
`
export const ImageChoice = styled.img`
    width: 232px;
    height: 310px;
    margin-bottom: 70px;
    border-radius: 8px;
    position: absolute;
    object-fit: cover;
    bottom: 0;    
`
export const ContentChoice = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute ;
    margin-top: 425px;
`
export const OptionChoice = styled.option`
    color: #9c9c9c;
`
