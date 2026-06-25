import styled from 'styled-components';

export const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
`

export const Container = styled.div`
    display:flex;
    justify-content:center;
`

export const PublishButton = styled.button<{ $primaryColor: string; disabled?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 16px;
    gap: 8px;
    width: fit-content;
    height: 32px;
    margin-left: auto;
    margin-top: 14px;
    background: ${({ $primaryColor, disabled }) => (disabled ? '#BDBDBD' : $primaryColor)};
    border: 0;
    border-radius: 8px;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    font-family: Poppins, sans-serif;
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
