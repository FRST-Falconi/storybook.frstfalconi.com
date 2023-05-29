
import styled from 'styled-components'
import Modal from './../../DS/modal'
import TextField from './../../form-elements/textfield'



export const WrapperContent = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WrapperInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    
    max-height: 40vh;
    overflow: auto;
`

export const CustomTextField = styled(TextField)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`

export const TitleModal = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: ${({theme}) => theme.colors.neutralsGrey1};
    margin-bottom: 16px;

`

export const DesriptionModal = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;

    display: flex;
    align-items: center;
    color: ${({theme}) => theme.colors.neutralsGrey1};
    margin-bottom: 16px;
`

export const CustomTeWrapperInputstField = styled.div``

export const WrapperInputPerson = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin-top: 8px;
    @media (max-width: 800px) {
        gap: 8px;
    }
`

export const ButtonAddNewPerson = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    cursor: pointer;

    height: 48px;
    width: fit-content;
    padding: 14px;
    border: 1px solid ${({theme}) => theme.colors.primary1};
    border-radius: 8px;

    margin-top: 12px;
    white-space: nowrap;

`

export const ButtonRemove = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    cursor: pointer;

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin-top: 18px;
    margin-bottom: 24px;
    color: #444;

    @media (max-width: 500px) {
        font-size: 14px;
    }
`

export const LabelButtonAddPerson = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    display: flex;
    align-items: center;

    color: ${({theme}) => theme.colors.primary1};
    @media (max-width: 500px) {
        font-size: 14px;
      }
`