import styled from "styled-components";



export const ModalContainer = styled.div`
    position: absolute;
    max-width: 602px;
    min-height: 306px;
    border-radius: 16px;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
    background-image: url('https://cdn-images.frstfalconi.cloud/fundo_laranja.png');
    background-repeat: no-repeat;
    background-position: top -554px right -126px;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
`

export const ModalTitle = styled.p`
    font-weight: 700;
    font-family: 'Work Sans';
    font-size: 20px;
    /* margin-top: 18px; */
    line-height: 26px;
    color: #222222;
`
export const CloseButton = styled.div`

`

export const HorizontalLine = styled.hr`
    border: 1px solid #E0E0E0;
`;

export const ContainerContent = styled.div`
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    flex-direction: column;
    min-height: 200px;
    justify-content: space-between;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
`