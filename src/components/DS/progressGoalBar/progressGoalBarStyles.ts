import styled from 'styled-components'


interface ProgressBarColorProps {
    width: number;
}


export const WrapperProgressGoalBar=styled.div`
    display: flex;
    align-items: center;
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


export const StartIndicator = styled.div<{position: number}>`
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
    left: -13px;
    left: ${({ position }) => position}%;

    z-index: 2;
`;

export const CurrentIndicator = styled.div<{position: number}>`
    width: 26px;
    height: 26px;
    display: flex;
    border-radius: 50%;
    background: #EB903D;
    border: 3px solid #F0B37D;
    position: absolute;
    top: -5px;
    left: calc(${({ position }) => position}% - 16px);
    z-index: 2;
`;

export const EndIndicator = styled.div<{position: number}>`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #757575;
    border: 3px solid #9C9C9C;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    position: relative;
    /* left: calc(346px - 50px); */
    left: calc(${({ position }) => position}% - 50px);
    z-index: 2;
`;


export const ProgressBarColor= styled.div<ProgressBarColorProps>`
    height: 100%;
    background: linear-gradient(90deg, rgba(161,162,171,1) 4%, rgba(251,141,40,1) 80%);
    border-radius: 50px;
    width: ${({ width }) => width}%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
`;