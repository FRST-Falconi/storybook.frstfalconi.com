import styled from 'styled-components'

export const Container = styled.div<{width?: string; height?:string}>`
    display:flex;
    width: ${({width}) => width ? width  : "100%"};
    height: ${({height}) => height ? height  : "auto"};
    min-height: 20px
    background-color:green;
`;

export const Box = styled.div<{width?: string; height?:string}>`
    width: ${({width}) => width ? width  : "100%"};
    height: ${({height}) => height ? height  : "auto"};
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 6px;
    border-radius: 0px 16px 16px 16px;
    background-color: #f2f2f2 ;
`;

export const UserDataContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    heigth: 34px;
    margin-bottom: 8px;
`

export const FirstChildUserData = styled.div`
    display:flex;
    justify-content: space-between;
 `

export const LastChildUserData = styled.div`
    display:flex;
    color: #757575;
    font-family: PT Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const LikesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: #444;
    font-family: PT Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
`

export const IconLikeContainer = styled.div`
    padding: 4px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #757575;
`

export const InteractiveButtonsContainer = styled.div`
    display:flex;
    gap:7px;
    margin-top: 4px;
    margin-left: 44px;
    aling-items:center;
    color: #444;
    font-family: PT Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    & > *:last-child {
        height:24px;
        transform: rotate(90deg);
      }
`

export const FlexButtonContainer = styled.div<IButton>`
    cursor: pointer;
    display: flex;
    gap: 4px;


`

interface IButton {
    disabled?: boolean
}