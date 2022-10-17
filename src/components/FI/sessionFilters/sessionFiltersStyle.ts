import styled, { css } from 'styled-components'

// interface IColorIcon {
//     active: boolean
// }

export const ButtonSessionFilters = styled.button`
    width: 180px;
    height: 72px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 19px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    border-radius: 8px;
    font-family: PT Sans;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.neutralsGrey1};

    

   &:active { 
        color: ${({ theme }) => theme.colors.shadeWhite};
        background-color: ${({ theme }) => theme.colors.primary1};

        & > svg {
            fill: ${({ theme }) => theme.colors.shadeWhite};
        }
    }
`

