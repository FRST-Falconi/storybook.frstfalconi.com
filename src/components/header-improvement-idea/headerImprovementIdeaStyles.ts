import styled from 'styled-components'

interface ILike {
    active?: boolean,
    isLiked?: boolean
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const WrapperActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
`