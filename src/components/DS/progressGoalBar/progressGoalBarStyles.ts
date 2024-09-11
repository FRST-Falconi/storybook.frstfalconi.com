import styled from 'styled-components'
import { CurrentVariant, CurrentVariantValue } from './useProgressGoalBar';


interface ProgressBarColorProps {
    width: number;
    isGoalExceeded: boolean
}


export const WrapperProgressGoalBar = styled.div`
    display: flex;
    flex-direction: column;
`


export const ProgressGoalBarContainer = styled.div`
    width: 346px;
    background-color:#D7D7D7;
    height: 16px;
    border-radius: 50px;
    position: relative;
    display: flex;
    align-items:center;
    z-index: 0;
`


export const StartIndicator = styled.div<{ position: number }>`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #8D8E96;
    border: 3px solid #BFBFC4       ;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    position: relative;
    left: calc(${({ position }) => position}% ${({ position }) => position && '- 26px'});
    z-index: 2;
`;

export const CurrentIndicator = styled.div<{ position: number, status: CurrentVariantValue }>`
    width: 26px;
    height: 26px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background: ${({ status }) => {
        switch (status) {
            case CurrentVariant.Star:
                return '#FDB437'; // Cor para quando a meta é excedida
            case CurrentVariant.Warning:
                return '#C03535'; // Cor não saiu do lugar ou diminuiu o atual
            case CurrentVariant.Normal:
            default:
                return '#EB903D'; // Cor padrão
        }
    }};
    border: ${({ status }) => {
        switch (status) {
            case CurrentVariant.Star:
                return '3px solid #FED182'; // Borda para quando a meta é excedida
            case CurrentVariant.Warning:
                return '3px solid #E25454'; // Cor não saiu do lugar ou diminuiu o atual
            case CurrentVariant.Normal:
            default:
                return '3px solid #F0B37D'; // Borda padrão
        }
    }};
    position: absolute;
    top: -5px;
    left: calc(${({ position }) => position}% ${({ position }) => position && '- 16px'});
    z-index: 2;
`;

export const EndIndicator = styled.div<{ position: number, isGoalReached: boolean, isGoalExceeded: boolean }>`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${({ isGoalReached, isGoalExceeded }) => isGoalReached || isGoalExceeded ? '#F18624' : '#757575'};
    border: ${({ isGoalReached, isGoalExceeded }) => isGoalReached || isGoalExceeded ? '3px solid #FFA24C' : '3px solid #9C9C9C'};
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    position: relative;
    /* left: calc(346px - 50px); */
    left: calc(${({ position }) => position}% - 52px);
    z-index: 2;
`;


export const ProgressBarColor = styled.div<ProgressBarColorProps>`
    height: 100%;
    background: ${({ isGoalExceeded }) =>
        isGoalExceeded
            ? 'linear-gradient(90deg, rgba(161,162,171,1) 4%, rgba(251,141,40,1) 60%, rgba(255,215,0,1) 100%)'
            : 'linear-gradient(90deg, rgba(161,162,171,1) 4%, rgba(251,141,40,1) 4%)'};
    border-radius: 50px;
    width: ${({ width }) => width}%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
`;

export const TextUP = styled.div`
    font-size: 14px;
    font-family: 'Work Sans';
    font-style: italic;
    font-weight: 500;
    color: #444444;
    margin-bottom: 24px;
`

export const IndicatorText = styled.div<{ position: number }>`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 100%; /* Ajuste conforme necessário */
    left: calc(${({ position }) => position}% ${({ position }) => position && '- 30px'}); /* Posiciona o texto com base na posição do indicador */
    margin-top: 8px; /* Espaço entre o indicador e o texto */
    font-size: 12px; /* Tamanho da fonte */
    color: #333; /* Cor do texto */
    white-space: nowrap; /* Impede quebra de linha */

`;
