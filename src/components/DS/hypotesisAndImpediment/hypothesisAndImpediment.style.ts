import styled, { css } from 'styled-components'
import { VariantColorStyle } from './hypothesisAndImpediment';

const backgroundColors = {
    hypothesis: {
        prioritize: '#FAB637',
        raised: '#f8d784',
        suggested: '#FBEECF',
    },
    impediment: {
        prioritize: '#D2ADE3',
        raised: '#E5CBF1',
        suggested: '#EFE1F6',
    }
};

const separatorColors = {
    hypothesis: {
        prioritize: '#CF8E11',
        raised: '#C8A561',
        suggested: '#E1CCA5',
    },
    impediment: {
        prioritize: '#AA83C3',
        raised: '#BF9AD6',
        suggested: '#DAB4EC',
    }
}

export const borderAvatar ={
    hypothesis: {
        prioritize: '#C48000',
        raised: '#EE9F08',
        suggested: '#EE9F08',
    },
    impediment: {
        prioritize: '#AD46FF',
        raised: '#AD46FF',    
        suggested: '#AD46FF',
    }
}

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #222222;
`

export const ContainerHypotheis = styled.div<VariantColorStyle>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: PT Sans;
    font-size: 14px;
    border-radius: 8px;
    /* padding-left: 16px; */
    padding-right: 16px;
    /* padding-top: 10px;
    padding-bottom: 10px; */
    min-height: 52px;

    ${({ type, variant }) => {
        const backgroundColor = backgroundColors[variant][type];
        return css`
            background: ${backgroundColor};
        `;
    }}
`

export const SplitContainerDescription = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
`


export const Separator = styled.div<{ type: string, variant: string }>`
    height: 24px; 
    width: 1px;
    margin-left: 14px;
    margin-right: 14px;
    ${({ type, variant }) => {
        const border = separatorColors[variant][type];
        return css`
            border: 1px solid ${border};
        `;
    }}
`
export const Title = styled.span`
    font-weight: 700;
    white-space: nowrap;
`
export const Description = styled.span`
    font-weight: 400;
    padding: 8px 0 8px;
    width: 100%;
`