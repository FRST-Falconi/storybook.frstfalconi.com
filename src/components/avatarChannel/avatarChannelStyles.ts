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
`
export const AvatarChannel = styled.div<AvatarI>`    
    width: ${props => props.size || '80px'};
    height: ${props => props.size || '80px'};
    border-radius: 50%;
    background-color: ${props => props.color || '#6a3f86'};  
    position: relative;
    margin: 0% 0% 0% 0%;
    cursor: pointer;
    margin-top: 12px;
   
    &:hover .hide{
        display: block;
    }
   
    img{
        border-radius: 50%;
    }

    ${({ disabled }) => disabled === true && `
        filter: grayscale(100%);
    `}
`
export const Channel = styled.span`
    position: absolute;    
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    top: 25px;
    left: 25px;
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
    position: relative;
    margin: 26.25% 25% 26.25% 25%;    
    box-shadow: 0px 18px 40px -15px #d3d3d3;
    top: 19px;
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
    margin-bottom: 18px;    
`