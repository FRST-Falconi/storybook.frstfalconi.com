import styled from 'styled-components'

interface ILike {
    active?: boolean,
    isLiked?: boolean
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 6px;
`;

export const WrapperValue = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;

    display: flex;
    align-items: center;

    color:  ${({ theme }) => theme.colors.neutralsGrey1};
    margin: 8px;
`;