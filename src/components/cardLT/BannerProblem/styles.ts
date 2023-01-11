import styled from 'styled-components'

export const SpanHeaderTag = styled.span<{ background: string, color: string }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    gap: 10px;
    position: absolute;
    right: -1px;
    top: -1px;
    background: ${({background}) => background || '#940059'};
    color: ${({color}) => color || '#FFFFFF'};
    border-radius: 0px 0px 0px 8px;
`