import styled from 'styled-components'

export const InputContainer = styled.div`
    height: 44px;
    width: 40vw;
    max-width: 700px;
    border-radius: 100px;
    background-color: #444444;
    padding-left: 16px;
    padding-top: 13px;
    padding-bottom: 13px;
    position: relative;
`

export const Input = styled.input`
    font-family: PT Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 18.12px;
    text-align: left;
    color: #f7f9fc;
    width: 80%;
    background-color: #444444;
    border: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 480px) {
        font-size: 12px;
    }
`

export const IconContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        width: 40px;
    }
`
