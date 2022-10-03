import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
    color?: string
}

export const ContainerGeral = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const AvatarChannel = styled.div<AvatarI>`    
    width: ${props => props.size || '80px'};
    height: ${props => props.size || '80px'};
    border-radius: 50%;
    background-color: ${props => props.color || '#6a3f86'};  
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        width: ${props => props.size || '80px'};
        height: ${props => props.size || '80px'};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    img {
        border-radius: 50%;
    }

    ${({ disabled }) => disabled === true && `
        filter: grayscale(100%);
    `}
`
export const Channel = styled.span`
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
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 18px 40px -15px #d3d3d3;
    display: flex;    
`
export const AvatarCam = styled.div<AvatarI>`
    width: 40px;
    height: 40px;    
    display: flex;
    justify-content: center;
    align-items: center;
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