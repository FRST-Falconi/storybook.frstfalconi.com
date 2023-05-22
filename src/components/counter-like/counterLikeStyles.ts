import styled from 'styled-components'

interface ILike {
    active?: boolean,
    isLiked?: boolean
}

export const WrapperButton = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    cursor: pointer;
    gap: 6px;
`;

export const Counter = styled.div<ILike>`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: ${({isLiked}) => isLiked ? '700' : '400'};
    font-size: 14px;
    line-height: 120%;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${({ theme, active }) => active ? theme.colors.linkOnfocus: theme.colors.neutralsGrey2};

    text-decoration: ${({ active }) => active ? 'underline' : 'none'};
`