import styled from 'styled-components'



export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    user-select: none;
`;

export const Name = styled.div<{large}>`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: ${({ large }) => large ? '20px' : '16px'};
    line-height: 110%;

    color:  ${({ theme }) => theme.colors.neutralsGrey1};
`

export const Text = styled.div<{large}>`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: ${({ large }) => large ? '16px' : '12px'};
    line-height: 16px;

    color:  ${({ theme }) => theme.colors.neutralsGrey3};
`

export const WrapperText = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
`;

export const WrapperHandle = styled.div<{large}>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({large}) => large ? '32px' : '20px'};
    width: ${({large}) => large ? '32px' : '20px'};
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    margin-left: 8px;
    margin-bottom: 3px;
    cursor: pointer;
    padding: ${({large}) => large ? '7px' : '5px'};

    &:hover{
        background: rgba(255, 255, 255, 0.7);
    }
`;
