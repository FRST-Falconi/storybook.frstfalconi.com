import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
    color?: string
}

export const ContainerGeral = styled.div`
     &:hover .popOver {
        display: block;        
    }       
    &:hover .hide{
        display: block;
    }
`
export const AvatarChannel = styled.div<AvatarI>`    
    width: ${props => props.size || '80px'};
    height: ${props => props.size || '80px'};
    background-color: ${props => props.color || '#6a3f86'}; 
    background-image:  ${props => props.src? `url(${props.src})`: 'none'};
    position: relative; 
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    
   


    ${({ disabled }) => disabled === true && `
        filter: grayscale(100%);
    `}
`
export const Channel = styled.span`   
    letter-spacing: 0.01em;
    font-size: 24px;
    color: #ffffff;
    font-family: 'Work Sans';
    font-weight: 700;
    line-height: 130%;
`
export const AvatarCircle = styled.div<AvatarI>`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    position: absolute;
    margin: 26.25% 25% 26.25% 25%;    
    box-shadow: 0px 18px 40px -15px #d3d3d3;
    display: none;    
`
export const AvatarCam = styled.div<AvatarI>`
    width: 33px;
    height: 31px;    
    position: absolute;
    margin: 15% 9% 12.5% 18%;
`
export const ContainerPopOver = styled.div`
    white-space: nowrap;    
    font-size: 16px;
    display: none;
    width: 120px;
    position: absolute;
    top: 0;
    margin-top: -5px;
    font-family: 'PT Sans';
    font-weight: 400;    
`