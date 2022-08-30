import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
}

export const AvatarChannel = styled.div<AvatarI>`    
    width: ${props => props.size || '80px'};
    height: ${props => props.size || '80px'};
    border-radius: 50%;
    //background-color: ${({ theme }) => theme.colors.secondary1};  
    position: relative;
    margin: 0% 0% 0% 0%;
    cursor: pointer;
    opacity: 1;
    
    &:hover {
            opacity: 0.75;            
    }

    &:hover .hide{
        display: block;        
    }

    ${({ disabled }) => disabled === true && `
        filter: grayscale(100%);
    `}
`
export const AvatarCircle = styled.div<AvatarI>`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    position: absolute;
    margin: 26.25% 25% 26.25% 25%;    
    box-shadow: 0px 18px 40px -15px #d3d3d3;
    margin-top: -63px;
    display: none
`
export const AvatarCam = styled.div<AvatarI>`
    width: 33px;
    height: 31px;    
    position: absolute;
    margin: 15% 9% 12.5% 18%;
`
export const AvatarImg = styled.img<AvatarI>`
    width: ${props => props.size || '80px'};
    height: ${props => props.size || '80px'};
    border-radius: 50%;
    object-fit: cover;
    
    
    ${({ disabled }) => disabled === true && `
        filter: grayscale(100%);
    `}
`