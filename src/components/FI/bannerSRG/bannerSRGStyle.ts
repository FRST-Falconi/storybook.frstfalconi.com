import styled, { css } from 'styled-components'

export const ContainerBanner = styled.div`
    display: flex;
    position: relative;       
       
    .banner{ 
       width: 100%;
       max-width: 1440px;
       height: 468px;
       object-fit: cover; 
       
       @media (max-width: 600px) {
                display: none;
        }       
   }

   .mobile{
        display: none;

            @media (max-width: 600px) {
                display: flex;
        }
   }
` 
export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px; 
    left:0;
    right: 0;
    margin-top: 184px;
    margin-left: 135px;
    flex-wrap: wrap;

    @media (max-width: 1009px) {
            margin-left: 0px;
            gap: 10px;
        }

    @media (max-width: 600px) {
            margin-left: 10px;
            margin-top: 20px;
            gap:32px;                
        }

    .spaceRace{                
        width: 198px;
        height: 175px;                
   }
`
export const ContainerTypographyButton = styled.div`
    width: 248px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
`
export const TypographyTitle  = styled.p`
    font-family: Work Sans;
    font-size: 22px;
    font-weight: 700;
    line-height: 22px;
    color: #FFFFFF;    
`
export const TypographyText = styled.p`
    font-family: Work Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: #FFFFFF;
`
export const ContainerButton = styled.div`
    margin: 0;
`
export const ContainerPopOver = styled.div`
    margin-left: 55px;

    @media (max-width: 1009px) {
            margin-left: 0px;
        }    

    @media (max-width: 600px) {
            margin-left: 0px;
        }
`
export const PopOverLeftRight = styled.div`
    width: 156px;
    height: 203px;
    border-radius: 4px;
    background-color: #4b2961;
    position: relative;
    margin: 0% 0% 0% 0%;
    padding: 16px;    
`
export const TypographyPopOver = styled.p`
    font-family: Work Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #fafafa;    
`
export const ContainerAvatar = styled.div`
    position: absolute;
    margin-left: 190px;
    margin-top: -75px;
`