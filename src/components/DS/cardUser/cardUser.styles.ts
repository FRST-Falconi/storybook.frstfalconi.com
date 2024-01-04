import styled from 'styled-components'

export const UserContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 208px;
    position: relative;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    background:${({ theme }) => theme.colors.shadeWhite};
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    padding-top: 18px;
    padding-left:16px;
    padding-right: 16px;
    padding-bottom: 22px;
`

export const Headers = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;

`
export const InfoBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 8px;
    font-size:12px;
    text-align: center;
    margin-top:14px;
    font-family:PT Sans;
    `
export const InfoDescription = styled.div`
    margin-top:8px;
    font-size:12px;
    text-align:center;
    margin-bottom:3px;
    color:#757575;
`



