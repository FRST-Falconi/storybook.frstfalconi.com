import styled from 'styled-components'

export const cardWrapper = styled('div')`
    width: 404px;
    height: 266px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 12px;
    overflow: hidden;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 0px #00000026;
    scroll-margin-top: 150px;
    border: 2px solid transparent;

    :hover,
    :focus {
        border: 2px solid #757575;
    }

`
export const cardContentWrapper = styled('div')`
    display: flex;
    height: 100%;
    flex-direction: row;
    border-radius: 12px;
    padding: 0px 12px 30px 12px;
`

export const tagTypeChallenge = styled('div')<({isIterator})>`
    width: 100%;
    height: 34px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    padding: 0px 12px 0px 12px;
    background-color: ${({isIterator}) => isIterator ? "#6A7B8A" : "#CBDCF1"};
    border-bottom: 4px solid ${({isIterator}) => isIterator ? "#92A5BB" : "#B1C8E4"};
`

export const labelTypeChallenge = styled('div')<({isIterator})>`
    font-family: Work Sans;
    font-size: 11.5px;
    font-weight: 600;
    text-align: left;
    margin-top: 2px;

    color: ${({isIterator}) => isIterator ? "#F8FAFC" : "#334155"};
`

export const checkboxWrapper = styled('div')<({selected})>`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: ${({selected}) => selected ? "7px" : "10px"};
    width: 22px;
    margin-right: 4px;
`

export const contentWrapper = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
`

export const headerContent = styled('div')`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const userInfo = styled('div')`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
`

export const namePositionInfo = styled('div')`
    display: flex;
    flex-direction: column;

    h6 {
        font-family: 'PT Sans';
        font-size: 0.875rem;
        line-height: 1.1;
        font-weight: 700;
        color: #222222;
        width: 230px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    p {
        font-family: 'PT Sans';
        font-size: 0.75rem;
        line-height: 1.1;
        font-weight: 400;
        color: #757575;
        width: 230px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`

export const contentDescription = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: calc(100% - 24px);
    margin-top: 8px;

    h6 {
        font-family: 'Work Sans';
        font-size: 0.875rem;
        line-height: 1.17;
        font-weight: 600;
        color: #F26818;
    }

    p {
        font-family: 'Work Sans';
        font-size: 1rem;
        line-height: 1.17;
        font-weight: 600;
        color: #444444;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
    }
`

export const contentAvaluation = styled('div')`
    display: flex;
    gap: 16px;
`

export const avaluation = styled('div')`
    display: flex;

    p {
        font-family: 'PT Sans';
        font-size: 0.875rem;
        line-height: 1.3;
        font-weight: 400;
        color: #222222;
    }
`

export const contentUpdatedChallenge = styled('div')`
    width: calc(100% - 24px);
    padding: 4px 12px;
    border-radius: 50px;

    p {
        font-family: 'PT Sans';
        font-size: 0.875rem;
        line-height: 1.3;
        font-weight: 400;
        color: #222222;
    }
`
export const wrapperStepTag = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: flex-end;
`

export const wrapperRating= styled.div`
    height: fit-content;
    display: flex;
    flex-direction: row;
    gap: 12px;
`
export const rating= styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 8px;
    
    font-family: PT Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 18.12px;
    text-align: center;

`

export const wrapperResults = styled.div`
    height: 100%;
    transform: scale(0.94);
    transform-origin: top left;
    display: flex;
    align-items: flex-end;
    padding-bottom: 30px;
`