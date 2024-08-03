import styled, { css } from 'styled-components'
import { VariantColorStyle } from '../hypothesisAndImpediment';


const backgroundColors = {
    prioritize: '#EE9F08',
    raised: '#F1C24A',
    suggested: '#F9DF9F',
};

export const ContainerVoting = styled.div<VariantColorStyle>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 68px;
    width: max-content;
    height: 36px;
    padding: 4px;
    cursor: pointer;
    border-radius: 8px;
    white-space: nowrap;
    ${({ type }) => {
        const backgroundColor = backgroundColors[type];
        return css`
            background-color: ${backgroundColor};
        `;
    }}
`
export const VotingList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        flex-direction: row;
        display: flex;
        :nth-child(n+2){
            margin-left: -8px;
        }
    }

`

export const VotesCount = styled.div`
    margin-left: 4px;
    margin-right: 4px;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }
`

export const ContainerTitleVoting = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 4px;
`

export const TitleVoting = styled.p`
    font-family: PT Sans;
    font-size: 14px;
    font-weight: 700;
    color: #222222;
`