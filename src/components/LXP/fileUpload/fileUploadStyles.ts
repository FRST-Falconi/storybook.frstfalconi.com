import styled from 'styled-components'

export const LandscapeContainer = styled.button`
    width: 544px;
    height: 240px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.neutralsGrey7};
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
    background-color: ${({ theme }) => theme.colors.neutralsGrey};
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
    height: 48px;
    background-color: ${({ theme }) => theme.colors.neutralsGrey4};
    border-radius: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: visible;      
`
export const TextFileUpload = styled.div`
    margin-top: 8px;
    font: 'PT Sans';
    font-weight: 700;
    font-size: 16px;  
    line-height: 21px;  
    color: ${({ theme }) => theme.colors.neutralsGrey4};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;   
`