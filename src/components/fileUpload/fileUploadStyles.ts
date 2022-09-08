import styled from 'styled-components'

export const LandscapeContainer = styled.button`
    width: 544px;
    height: 240px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.neutralsGrey6};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    object-fit: cover;
    border: none;  
`
export const PortraitContainer = styled.button`
    width: 180px;
    height: 240px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.neutralsGrey6};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    object-fit: cover;
    border: none;   
`
export const UploadCam = styled.div`
    width: 48px;
    height: 47.02px;
    background-color: ${({ theme }) => theme.colors.neutralsGrey3};
    border-radius: 50px; 
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: visible;      
`
export const TextFileUpload = styled.div`
    margin-top: 95px;
    font: 'PT Sans';
    font-size: 16px;    
    color: ${({ theme }) => theme.colors.neutralsGrey4};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;   
`
export const ImgLandscape = styled.img`
    width: 544px;
    height: 240px;
    border-radius: 8px;    
    position: absolute;
    object-fit: cover; 

    .oculto {
        visibility: hidden;
    }
`
export const ImgPortrait = styled.img`
    width: 180px;
    height: 240px;
    border-radius: 8px;    
    position: absolute;
    object-fit: cover;    

    .oculto {
        visibility: hidden;
    }
`