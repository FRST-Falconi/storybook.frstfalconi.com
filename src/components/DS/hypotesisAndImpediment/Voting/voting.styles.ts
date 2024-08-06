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

export const ContainerListUsers = styled.div`
    min-width: 225px;
    height: 192px;
    background: #FFFFFF;
    padding-top: 12px; 
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 8px 0px;
    padding-right: 8px;
    padding-bottom: 12px;

`
export const ContainerScroll = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    width: 100%;

    ::-webkit-scrollbar {
        width: 3px; /* Largura da barra de rolagem */
        height: 25px;
    }

    ::-webkit-scrollbar-thumb {
        background: #757575; /* Cor da parte deslizante da barra de rolagem */
        border-radius: 15px;
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

export const VoterItem = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: calc(100% + 8px);

    border-bottom: 1px solid #EBEBEB;
    &:last-child {
        border-bottom: none;
    }

`;

export const VoterName = styled.span`
    font-size: 14px;
    color: #333;
`;