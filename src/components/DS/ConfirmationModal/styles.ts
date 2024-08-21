import styled from "styled-components";



export const ModalContainer = styled.div`
    position: absolute;
    width: 630px;
    min-height: 473px;
    border-radius: 16px;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
    background-repeat: no-repeat;
    background-position: top -554px right -126px;
    padding-bottom: 24px;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 24px;
    padding-top: 24px;
`

export const ModalTitle = styled.p`
    font-weight: 700;
    font-family: 'Work Sans';
    font-size: 20px;
    /* margin-top: 18px; */
    line-height: 26px;
    color: #222222;
    margin-top: 40px;
    margin-bottom: 16px;
`
export const CloseButton = styled.div`
    width: 16px;
    height: 16px;
    color: #757575;
    cursor: pointer;
`

export const HorizontalLine = styled.hr`
    border: 1px solid #E0E0E0;
`;

export const ContainerContent = styled.div`
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    flex-direction: column;
    min-height: 328px;
    justify-content: space-between;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
`