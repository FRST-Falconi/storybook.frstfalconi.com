import styled from 'styled-components'

interface AvatarI {
  size?: string
  src?: any
  disabled?: boolean
  isActiveClick?: boolean
}

export const AvatarImg = styled.img<AvatarI>`
  width: ${(props) => props.size || '120px'};
  height: ${(props) => props.size || '120px'};
  border-radius: 50%;
  object-fit: cover;
  background-image: url('https://cdn-images.frstfalconi.cloud/Avatar_default.png');

  ${({ disabled }) =>
    disabled === true &&
    `
        filter: grayscale(100%);
    `}
`

export const AvatarWrapper = styled.div<AvatarI>`
  width: ${(props) => props.size || '120px'};
  height: ${(props) => props.size || '120px'};
  cursor: ${({isActiveClick}) => isActiveClick ? 'pointer' : 'auto'} ;
`
