import styled from 'styled-components'
import {IAvatarContent} from './admButton'

export const AvatarContent = styled.div<IAvatarContent>`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: ${props => props.background};
    color: rgba(255, 255, 255, 1);
    font-weight:700;
    border: 2px solid rgba(255, 255, 255, 1);
    display: flex;
    justify-content: end;
    padding-right: 6px;
    align-items: center;
    position: relative;
    font-size: 10px;
    font-family:'PT Sans';
    box-sizing: border-box;
`
export const PlusButton = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    vertical-align: center;
    font-size: 13px;
    background-color: rgba(242, 104, 24, 1);
    position: absolute;
    bottom: -2px;
    right: 0px;
    line-height: 13px;
`
export const ImageAvatarContent = styled.div`
    position: absolute;
    bottom: -3px;
    right: 3px;
`