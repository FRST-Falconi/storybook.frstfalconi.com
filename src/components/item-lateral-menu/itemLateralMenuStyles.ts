    import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
}

interface IWrapperItem {
    disabled?: boolean,
    active?: boolean
}

interface IWrapperMainLabel {
    active?: boolean
}

export const WrapperItem = styled.div<IWrapperItem>`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    background: ${({ theme }) =>  theme.colors.shadeWhite};
    border-left: 4px solid ${({ active, theme }) => active ? theme.colors.primary1 : 'transparent'};

    &:hover {
        background: ${({ theme }) =>  theme.colors.neutralsGrey8};
    }
`

export const WrapperMainLabel = styled.span<IWrapperMainLabel>`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: ${({ active }) => active ? '700' : '400'};
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 8px;

    color: ${({ theme, active }) => active ? theme.colors.primary1 : theme.colors.neutralsGrey1};
`

export const WrapperComponent = styled.div<IWrapperMainLabel>`
    display: flex;
    justify-content: center;
    align-items: center;
    
    & > svg {
        width: 24px;
        height: 24px;
        & > path {
            fill: ${({ theme, active }) => active ? theme.colors.primary1 : theme.colors.neutralsGrey1};
        }
    }
`





export const AvatarImg = styled.img<AvatarI>`
    width: ${props => props.size || '120px'};
    height: ${props => props.size || '120px'};
    border-radius: 50%;
    object-fit: cover;

    ${({ disabled }) => disabled === true && `
        filter: grayscale(100%);
    `}
`

export const AvatarWrapper = styled.div<AvatarI>`
    width: ${props => props.size || '120px'};
    height: ${props => props.size || '120px'};
`
