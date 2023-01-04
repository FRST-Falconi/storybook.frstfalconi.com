import { style } from "@mui/system";
import styled from "styled-components";

export const containerList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    padding: 8px;
    
`

export const titleList = styled.span`
    font-family: 'PT Sans';
    font-weight: 400;
    font-size: 16px;
    color: ${({theme}) => theme.colors.neutralsGrey1};
`

export const listContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    flex-direction: column;
`

export const itemList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    gap: 8px;

    font-family: 'PT Sans';
    font-weight: 400;
    font-size: 14px;
    color: ${({theme}) => theme.colors.neutralsGrey1};
`

export const viewMoreContent = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    width: 100%;
    user-select: none;
`