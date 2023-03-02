import styled from 'styled-components'

export const Container = styled.div`
    padding: 1px 24px 0px 24px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.shadeWhite};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-top: 0px !important;
`

export const infoContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    font-family: 'Work Sans';
    font-size: 16px;
    font-weight: 400;
    padding: 12px;
    padding-top: 24px;
`

export const info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: absolute;
    margin-bottom: 12px;
    ${({theme}) => theme.fonts.textMessageComponentsBodyRegular};
`

export const buttonsContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 16px;
`

export const buttons = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border: none;
    background-color: inherit;
    ${({theme}) => theme.fonts.textMessageComponentsBodyBold};
    color: ${({theme}) => theme.colors.linkOnfocus};
    
    cursor: pointer;
    gap: 8px;

    &:hover{
        color: ${({theme}) => theme.colors.linkHover};
    }

`

export const reviewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 28px;
    ${({theme}) => theme.fonts.textMessageComponentsBodyBold};
`

export const reviewContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin-top: 16px;
    margin-bottom: 32px;
`

export const commentsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 32px;
`

export const comment = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
    margin-top: 28px;
`

export const inputComment = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-top: 12px;
`

export const submitButton = styled.div`
    border: none;
    background: none;
    margin-left: 8px;
`

export const commentList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    margin-top: 16px;
`