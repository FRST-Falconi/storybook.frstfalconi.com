import styled, { css } from 'styled-components'
import { VariantColorStyle } from '../hypothesisAndImpediment';

const backgroundColors = {
    hypothesis: {
        prioritize: '#EE9F08',
        owner: '#F9CD5E',
        suggested: '#FFE298',
    },
    impediment: {
        prioritize: '#C198D3',
        owner: '#D9BAE8',
        suggested: '#E6CEF1',
    }
};

export const ContainerArrowButton = styled.div<VariantColorStyle>`
    ${({ type, variant }) => {
        const backgroundColor = backgroundColors[variant][type];
        return css`
            background-color: ${backgroundColor};
        `;
    }}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px 0 0 8px;
`

export const ArrowButton = styled.button`
    border: none;
    background: transparent;
    width: 100%;
    color: #444444;
    cursor: pointer;
    display: flex;
    height: 100%;
    svg: {
    }
    :hover {
        background-color: #2222221A;
    }
`
