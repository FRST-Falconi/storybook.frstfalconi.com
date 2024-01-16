import styled from 'styled-components'
import { Grid, Box, Modal } from '@mui/material'

// <{image, notstarted}>
export const Container = styled(Box)`
    background-color: #FFF;
    width: 488px !important;
    max-width: 80%;
    height: 488px !important;
    max-height: 80%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    position: relative;

    border-radius: 16px;

    font-family: 'Work Sans';
    overflow: hidden;
`
export const Typography = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    /* neutrals/neutral_1 */

    color: ${({ theme }) => theme.colors.neutral_1};
    margin-left: 25px;
`
export const CloseButton = styled.div`
    cursor: pointer;    
    align-self: flex-end;
    width: 20px;
    margin-top: 20px;
    margin-right: 15px;
`

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #BDBDBD;
    padding-bottom: 24px;
`

export const ContentDiv = styled.div`
    width: 100%;
    heigth: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 7px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        background: #0000;
        border-radius: 10px;
        margin: 16px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #BDBDBD; 
        border-radius: 10px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #888; 
    }

`

export const ScrollContentContainer = styled.div`
    position: relative;
`


export const ContentScroll = styled.div`
    width: 100%;
    heigth: fit-content;
`

export const CardItemUser = styled.div`
    width: calc(100% + 10px);
    min-height: 86px;
    border-bottom: 1px solid #BDBDBD;
    padding: 16px;
    padding-left: 24px;

    display: flex;
    flex-direction: row;
`


export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 16px;
`

export const NameUser = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;

    color: #222222;

`

export const PositionUser = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
    /* or 18px */

    display: flex;
    align-items: center;

    /* neutrals/neutral_1 */

    color: #222222;

`

export const OrgUser = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
    /* or 18px */

    /* neutrals/neutral_1 */

    color: #222222;

    max-width: 40ch;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`