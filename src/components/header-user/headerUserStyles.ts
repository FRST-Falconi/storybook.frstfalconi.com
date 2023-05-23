import styled from 'styled-components'



export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    user-select: none;
`;

export const Name = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;

    color:  ${({ theme }) => theme.colors.neutralsGrey1};
`

export const Text = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color:  ${({ theme }) => theme.colors.neutralsGrey3};
`

export const WrapperText = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
`;
