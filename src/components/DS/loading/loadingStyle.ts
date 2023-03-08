import styled, {css} from "styled-components"

export const container = styled.div<{textPosition: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({textPosition}) => textPosition === 'left' ? 'row-reverse' 
        : textPosition === 'right' ? 'row'
        : textPosition === 'top' ? 'column-reverse'
        : textPosition === 'bottom' ? 'column'
        : null
    };
    position: relative;
    width: auto;
    gap: 8px;
    padding: 16px;
`

export const loader = styled.div`
    
    svg {
        animation: load 1.5s infinite linear;
        
        @keyframes load {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`

export const loadText = styled.p`
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`