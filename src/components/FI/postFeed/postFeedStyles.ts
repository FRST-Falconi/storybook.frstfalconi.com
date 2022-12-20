import styled from "styled-components";


export const postContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    border: 1px solid ${({theme}) => theme.colors.borderPrimary};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${({theme}) => theme.colors.shadeWhite};
    padding-top: 24px;
    padding-bottom: 24px;
    
    &>img{
        max-width: 100%;
        max-height: 100%;
    }

`

export const postHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const postTitle = styled.span`
    font-family: 'Work Sans';
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    color: ${({theme}) => theme.colors.primary1};
    margin-top: 32px;
`

export const postDescription = styled.span`
    font-family: 'PT Sans';
    font-weight: 400;
    font-size: 16px;
    text-align: left;
    color: ${({theme}) => theme.colors.neutralsGrey1};
    margin-top: 32px;
`

export const postImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 32px;
    width: 100%;
    object-fit: cover;

    & img{
        max-width: 100%;
        width: 100%;
        max-height: 100%;
    }
`

export const postVideo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 32px;
    width: 100%;
`