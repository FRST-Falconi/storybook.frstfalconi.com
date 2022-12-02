import styled from "styled-components"

export const notificationContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 8px;
    width: 375px;
    height: 412px;

    background-color: ${({theme}) => theme.colors.shadeWhite};
`

export const notificationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid ${({theme}) => theme.colors.borderPrimary};
    width: 100%;
`

export const notificationCardList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`