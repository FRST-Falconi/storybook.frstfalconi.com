import styled from "styled-components";

export const CardContainer = styled('div')`
    display: flex;
    gap: 16px;
    background-color: #FFFFFF;
    border-radius: 12px;
    width: 450px;
    height: 120px;
    padding-right: 16px;
    box-sizing: content-box;
    border: 2px solid transparent;
    cursor: pointer;

    :hover {
        border: 2px solid #757575;
    }

    :focus {
        border: 2px solid #757575;
        background-color: #F7F7F7;
    }
`

export const WrapperImage = styled('div')`
    img {
        width: 140px;
        height: 120px;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        object-fit: cover;
    }
`

export const CardInfo = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 12px 0;
    width: 100%;
`

export const DescriptionWrapper = styled('div')`
    height: 61px;
    .title {
        font-family: 'PT Sans';
        font-size: 10px;
        font-weight: 600;
        line-height: 1.5;
        color: #F18624;
        margin-bottom: 4px;
    }

    .description {
        font-family: 'PT Sans';
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: #444444;

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }

`

export const CardFooter = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .company {
        display: flex;
        gap: 8px;
        font-family: 'PT Sans';
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        color: #444444;
        margin: 0;

        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }
    }

    .download {
        display: flex;
        gap: 4px;
        font-family: 'PT Sans';
        font-size: 14px;
        font-weight: 600;
        line-height: 1.5;
        color: #444444;
        cursor: pointer;
        margin: 0;
    }

`