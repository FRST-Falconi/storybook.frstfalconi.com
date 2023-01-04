import { url } from 'inspector'
import styled, { css } from 'styled-components'

interface AvatarI {
  size?: string
  src?: any
  disabled?: boolean
  color?: string
  variant?: string
}

interface AvatarImage {
  size?: string
  src?: any
  disabled?: boolean
  image: any
  variant?: string
}

interface PropsPopOver {
  variant: string
}

export const ContainerGeral = styled.div<PropsPopOver>`
  display: flex;
  height: 8.5rem;
  align-content: flex-end;
  &:hover .popOver {
    display: block;
  }
  &:hover .hide {
    display: block;
  }
`
export const AvatarChannel = styled.div<AvatarI>`
  width: ${(props) => props.size || '80px'};
  height: ${(props) => props.size || '80px'};
  border-radius: 50%;
  background-color: ${(props) => props.color || '#6a3f86'};
  position: relative;
  margin-top: ${(props) => (props.variant === 'lowLeft' || props.variant === 'lowRight' ? '62px' : '0px')};
  cursor: pointer;
  ${(props) =>
    props.variant === 'sideRight' &&
    css`
      margin-left: 8.5rem;
    `}

  img {
    border-radius: 50%;
  }

  ${({ disabled }) =>
    disabled === true &&
    `
        filter: grayscale(100%);
    `}
`
export const AvatarChannelImage = styled.div<AvatarImage>`
  width: ${(props) => props.size || '80px'};
  height: ${(props) => props.size || '80px'};
  border-radius: 50%;
  background-image: ${(props) => `url(${props.image})`  };
  background-repeat: no-repeat;
  background-size: ${(props) => props.size || '80px'};
  position: relative;
  margin-top: ${(props) => (props.variant === 'lowLeft' || props.variant === 'lowRight' ? '62px' : '0px')};
  cursor: pointer;
  ${(props) =>
    props.variant === 'sideRight' &&
    css`
      margin-left: 8.5rem;
    `}

  img {
    border-radius: 50%;
  }

  ${({ disabled }) =>
    disabled === true &&
    `
        filter: grayscale(100%);
    `}
`
export const Channel = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  top: 25px;
  left: 25px;
  font-size: 24px;
  color: #ffffff;
  font-family: 'Work Sans';
  font-weight: 700;
  line-height: 130%;
`
export const AvatarCircle = styled.div<AvatarI>`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  position: absolute;
  margin: 26.25% 25% 26.25% 25%;
  box-shadow: 0px 18px 40px -15px #d3d3d3;
  display: none;
`
export const AvatarCam = styled.div<AvatarI>`
  width: 33px;
  height: 31px;
  position: absolute;
  margin: 15% 9% 12.5% 18%;
`
export const ContainerPopOver = styled.div<PropsPopOver>`
  white-space: nowrap;
  font-size: 16px;
  display: none;
  width: 120px;
  position: absolute;
  margin-top: 0;
  font-family: 'PT Sans';
  font-weight: 400;
  ${(props) =>
    (props.variant === 'upLeft' || props.variant === 'upRight') &&
    css`
      margin-top: 7rem;
    `}

  ${(props) =>
    props.variant === 'sideLeft' &&
    css`
      margin-top: 1rem;
      margin-left: 6rem;
    `}

    ${(props) =>
    props.variant === 'sideRight' &&
    css`
      margin-top: 1rem;
    `}
`
