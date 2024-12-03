import styled from "styled-components";

export const ArticleContainer = styled('div')`
    width: 450px;
    height: 225px;
    display: flex;
    flex-direction: column;
    gap: 29px;
    padding: 16px;
    border-radius: 12px;
    background-color: #FFFFFF;

    :hover {
        border: 2px solid #757575;
    }

    :focus {
        border: 2px solid #757575;
        background-color: #F7F7F7;
    }
`

export const ArticleContent = styled('div')`
    display: flex;
    flex-direction: column;

    .cardType {
        font-family: 'PT Sans';
        font-size: 12px;
        font-weight: 600;
        line-height: 1.5;
        color: #F18624;
        margin-bottom: 4px;
    }

    .title {
        font-family: 'PT Sans';
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        color: #444444;
        margin-bottom: 10px;
    }

    .description {
        font-family: 'PT Sans';
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4; 
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }

`

export const ArticleFooter = styled('div')`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    .company {
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: 'PT Sans';
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        color: #444444;

        img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
        }
    }

    .cta {
        display: flex;
        gap: 4px;
        font-family: 'PT Sans';
        font-size: 14px;
        font-weight: 600;
        line-height: 1.5;
        color: #444444;
        cursor: pointer;
    }
`