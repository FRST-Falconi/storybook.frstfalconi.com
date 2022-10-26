import styled from 'styled-components'

export const Container = styled.div`
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.shadeWhite};
    
`

export const infoContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    font-family: 'Work Sans';
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 12px;
`

export const info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const buttonsContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    margin-top: 20px;
    cursor: pointer;
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
`

export const commentsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const comment = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
    margin-top: 28px;
`

export const commentList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    margin-top: 16px;
    ${({theme}) => theme.fonts.textMessageComponentsBodyBold};
`