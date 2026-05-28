import styled from 'styled-components';

export const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
`

export const Container = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:100%;
`

export const SpanText = styled.p<{darkMode?: boolean}>`
    color: ${({darkMode}) => darkMode ? '#EBEBEB' : '#000'};
    font-family: PT Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
`

export const ButtonsContainer = styled.div`
    width:175px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-left:auto;
`

export const SaveButton = styled.button<{ $primaryColor: string; disabled?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 16px;
    gap: 8px;
    width: fit-content;
    height: 32px;
    background: ${({ $primaryColor, disabled }) => (disabled ? '#BDBDBD' : $primaryColor)};
    border: 0;
    border-radius: 8px;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    user-select: none;

    &:hover:not(:disabled) {
        filter: brightness(0.9);
    }
`