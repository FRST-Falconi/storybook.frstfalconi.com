import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
}

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
