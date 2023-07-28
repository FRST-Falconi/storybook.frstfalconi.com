import styled from 'styled-components'
import {ICardPeople, IPeopleContainer, IPositionContainer} from './cardPeople'

export const PeopleContainer = styled.div<IPeopleContainer>`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: 144px;
    border-radius: 12px;
    background: ${({ theme, isChecked }) => isChecked ? '#FDF3E9' : theme.colors.shadeWhite};
    border: 1px solid ${({ theme, isChecked }) => isChecked ? 'rgba(241, 134, 36, 1)' : theme.colors.shadeWhite};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    :hover{
        border: 1px solid rgba(241, 134, 36, 1);
    }
`
export const PeopleInfo = styled.div`
    display: flex;
    flex-direction: row;
`

export const DescriptionPeople = styled.div`
    padding-left: 12px;
`
export const PeopleName = styled.div`
    font-weight: 600;
    max-width: 188px;
    line-height: 18.77px;
    padding-top: 26px;
    padding-right: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    top: 26px;
    left: 100px;
`
export const PeopleEmail = styled.div`
    font-size: 12px;
    color: rgba(117, 117, 117, 1);
    font-weight: 500;
    line-height: 14.8px;
    max-width: 188px;
    margin-top: 4px;
    padding-right: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
export const PositionContainer = styled.div<IPositionContainer>`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    padding-right: 25px;
    padding-left: ${({hiddenCheckbox}) => hiddenCheckbox ? '16' : '48' }px;
    padding-bottom: 24px;
`
export const DataBlock = styled.div`
    display: flex;
    font-size: 14px;
    line-height: 16.8px;
    font-weight: 600;
    margin-top: 4px;
    span{
        font-weight: 400;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 188px;
        padding-right: 2px;
    }
`