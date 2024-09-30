import styled, { css } from 'styled-components'
import { VariantColorStyle } from './hypothesisAndImpediment'

const backgroundColors = {
    hypothesis: {
        prioritize: '#FAB637',
        owner: '#f8d784',
        suggested: '#FBEECF'
    },
    impediment: {
        prioritize: '#D2ADE3',
        owner: '#E5CBF1',
        suggested: '#EFE1F6'
    }
}

const separatorColors = {
    hypothesis: {
        prioritize: '#CF8E11',
        owner: '#C8A561',
        suggested: '#E1CCA5'
    },
    impediment: {
        prioritize: '#AA83C3',
        owner: '#BF9AD6',
        suggested: '#DAB4EC'
    }
}

export const borderAvatar = {
    hypothesis: {
        prioritize: '#C48000',
        owner: '#EE9F08',
        suggested: '#EE9F08'
    },
    impediment: {
        prioritize: '#AD46FF',
        owner: '#AD46FF',
        suggested: '#AD46FF'
    }
}

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 56px;
    color: #222222;
    box-sizing: border-box;
`

export const ContainerHypotheis = styled.div<VariantColorStyle>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: PT Sans;
    font-size: 14px;
    border-radius: 8px;

    ${({ type, variant }) => {
        const backgroundColor = backgroundColors[variant][type]
        return css`
            background: ${backgroundColor};
        `
    }}
`

export const SplitContainerDescription = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 16px 10px 0px;
    gap: 16px;
    height: 100%;
    width: 100%;
`

export const Separator = styled.div<{ type: string; variant: string }>`
    height: 24px;
    width: 1px;
    margin-left: 14px;
    margin-right: 14px;
    ${({ type, variant }) => {
        const border = separatorColors[variant][type]
        return css`
            border: 1px solid ${border};
        `
    }}
`
export const Title = styled.span`
    font-weight: 700;
    white-space: nowrap;
`
export const Description = styled.span<{ type: string; variant: string }>`
    font-weight: 400;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: center;
    padding: 6px 16px 6px 16px;

    ${({ type, variant }) => {
        const border = separatorColors[variant][type]
        return css`
            border-left: 1px solid ${border};
        `
    }}
`

export const LimitCharsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 4px;
`

export const LimitCharsExceededMessage = styled.span`
    color: #a50000;
    font-size: 12px;
    margin-left: 5px;
`
