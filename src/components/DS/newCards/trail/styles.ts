import styled from "styled-components";

export const TrailCardContainer = styled('div')`
    width: 246px;
    height: 242px;
    padding: 8px 8px 16px 8px;
    border-radius: 12px;
    background: #FFFFFF;
    gap: 8px;
    cursor: pointer;

    :hover {
        border: 2px solid #757575;
    }

    :focus {
        border: 2px solid #757575;
        background-color: #F7F7F7;
    }
`

export const WrapperBanner = styled('div')`
    img {
        width: 230px;
        height: 140px;
        border-radius: 8px;
    }
`

export const CardInfo = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 16px;

    .trailName {
        font-family: 'PT Sans';
        font-size: 14px;
        font-weight: 700;
        line-height: 1.3;
        color: #222222;
    }

    .company {
        display: flex;
        gap: 8px;
        font-family: 'PT Sans';
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        color: #444444;

        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }
    }
`