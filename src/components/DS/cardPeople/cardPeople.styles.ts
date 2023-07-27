import styled from 'styled-components'
import {IPeopleContainer} from './cardPeople'

export const PeopleContainer = styled.div<IPeopleContainer>`
    display: flex;
    flex-direction: column;
    width: 288px;
    height: 142px;
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
    line-height: 18.77px;
    padding-top: 26px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
export const PeopleEmail = styled.div`
    font-size: 12px;
    color: rgba(117, 117, 117, 1);
    font-weight: 500;
    line-height: 14.8px;
    margin-top: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
export const PositionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 17px;
    padding-right: 25px;
    padding-left: 48px
`
export const DataBlock = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    line-height: '16.8px';
    font-weight: 600;
    span{
        font-weight: 400;
    }
`