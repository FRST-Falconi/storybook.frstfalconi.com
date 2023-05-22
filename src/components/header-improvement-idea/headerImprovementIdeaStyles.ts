import styled from 'styled-components'

interface ILike {
    active?: boolean,
    isLiked?: boolean
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 12px;
    justify-content: center;
    align-items: center;
`;

export const WrapperActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`