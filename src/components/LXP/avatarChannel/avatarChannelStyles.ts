import styled, { css } from 'styled-components'

interface AvatarI {
  size?: string
  src?: any
  disabled?: boolean
  color?: string
  image?: any
  variant?: string
  isEdit?: boolean
  isLink?: boolean
}

interface PropsPopOver {
  variant: string
  isEdit?: boolean
}

export const ContainerGeral = styled.div<PropsPopOver>`
  display: flex;
  height: 8.5rem;
  align-content: flex-end;
  &:hover .popOver {
    display: ${(p) => p.isEdit && 'block'};
  }
  &:hover .hide {
    visibility: ${(p) => p.isEdit && 'visible'};
  }
`
export const AvatarChannel = styled.div<AvatarI>`
  width: ${(props) => props.size || '80px'};
  height: ${(props) => props.size || '80px'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${(props) => (props.image ? `url(${props.image})` : '#6a3f86')};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: ${(p) => p.isEdit && '62px'};
  cursor: ${(p) => (p.isEdit || p.isLink ? 'pointer' : 'text')};
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

export const Channel = styled.span<AvatarI>`
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  top: 25px;
  left: 22.4px;
  font-size: 24px;
  color: #ffffff;
  font-family: 'Work Sans';
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`
export const AvatarCircle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  visibility: hidden;
`
export const AvatarCam = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  box-shadow: 0px 18px 40px -15px #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
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

export const ContainerSelectedImage = styled.div`
  margin-top: 60px;
`
