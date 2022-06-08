import styled from 'styled-components'

interface ISubtitle {
    disabled?: boolean,
}

export const ButtonCheckmark = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: fit-content;
`;

export const Subtitle = styled.span<ISubtitle>`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;

    margin-top: 8px;

    color: ${(props:any)  => props.disabled ? '#BDBDBD' : '#222222'};
`