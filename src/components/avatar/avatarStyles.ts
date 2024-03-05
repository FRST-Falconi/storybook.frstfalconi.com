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
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ disabled }) =>
    disabled === true &&
    `
        filter: grayscale(100%);
    `}

&::after {
    content: "";
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: ${(props) =>
      props.src ? `url(${props.src})` : 'none'};
  }
`

export const AvatarWrapper = styled.div<AvatarI>`
  width: ${(props) => props.size || '120px'};
  height: ${(props) => props.size || '120px'};
  cursor: ${({isActiveClick}) => isActiveClick ? 'pointer' : 'auto'} ;
`
