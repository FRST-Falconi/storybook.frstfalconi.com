import styled from 'styled-components'

interface ITextMore {
    disabled?: boolean
    variant?: string
}

export const TextShowMore = styled.div<ITextMore>`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;

    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;

    color: ${({theme, disabled}) => disabled ? theme.colors.disabledLabelGray : theme.colors.neutralsGrey2};

    &:hover {
        color: ${({theme, disabled}) => disabled ? theme.colors.disabledLabelGray : theme.colors.linkOnfocus};
        text-decoration: ${({disabled}) => disabled ? 'none' : 'underline'};
    }
    &:active {
        font-weight: ${({disabled}) => disabled ? '400' : '700'};
    }
`