import styled, { css } from 'styled-components'

interface HeaderContentProps {
  img?: any
  zeroHeigthDescription?: boolean
  tmnDescription?: number
  onDisplay?: boolean
}

export const Container = styled.div`
  display: flex;
  position: relative;
`

export const HeaderImage = styled.div<HeaderContentProps>`
  display: flex;
  justify-content: flex-start;
  height: 200;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  color: #fff;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  ${(props) =>
    props.tmnDescription < 164 &&
    css`
      section {
        visibility: hidden;
      }
    `}
  @media (max-width: 834px) {
    height: 72vh;
    ${(props) =>
      props.tmnDescription >= 134 &&
      css`
        section {
          visibility: inherit;
        }
      `}
  }

  ${(props) =>
    props.onDisplay ?
      css` width: 100%;`
    :
      css` width: 0px;`
  }

  @media (max-width: 414px) {
    height: 65vh;
  }
  @media (max-width: 320px) {
    height: 87vh;
  }
`
export const Content = styled.div<HeaderContentProps>`
  width: 100%;
  height: 100%;
  padding: 64px;
  background: linear-gradient(52deg, #111111 0%, rgba(17, 17, 17, 0) 100%);
  
  ${(props) =>
    !props.onDisplay &&
      css` display: none;`
  }

  @media (max-width: 414px) {
    padding: 2rem;
  }
`

export const ListCounters = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  position: absolute;
  margin-bottom: 36px;
  bottom: 0;
  right: 50%;

`

export const Counters = styled.button<{selected : boolean}>`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border-radius: 100%;
  border: none;
  background-color: ${({selected, theme}) => selected ? theme.colors.primary1 : theme.colors.neutralsGrey5 };
`

export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  max-width: 40rem;
  @media (max-width: 320px) {
    word-break: break-word;
    font-size: 25px;
  }
`

export const Description = styled.div<HeaderContentProps>`
  font-size: 16px;
  font-weight: 400;
  margin-top: 32px;
  max-width: 44rem;
  height: fit-content;
  ${(props) =>
    !props.zeroHeigthDescription &&
    css`
      height: 2.4rem;
    `}
  overflow: hidden;
  transition: all 0.9s ease-in-out;
  display: -webkit-box;

  @media (max-width: 834px) {
    max-width: 34rem;
    ${(props) =>
      !props.zeroHeigthDescription &&
      css`
        height: 2.4rem;
      `}
  }

  @media (max-width: 414px) {
    word-break: break-word;
    ${(props) =>
      !props.zeroHeigthDescription &&
      css`
        height: 2.4rem;
      `}
  }
  @media (max-width: 320px) {
    font-size: 12px;
    ${(props) =>
      !props.zeroHeigthDescription &&
      css`
        height: 2.4rem;
      `}
  }
`

export const SpaceProgressAndButton = styled.div`
  margin-top: 68px;
  display: flex;
  margin-bottom: 2rem;
  cursor: pointer;
  @media (max-width: 414px) {
    flex-direction: column;
    margin-top: 40px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`
export const SpaceButtonLeft = styled.div`
  margin-left: 24px;
  margin-bottom: 2rem;

  @media (max-width: 414px) {
    margin-left: 0;
    margin-top: 1rem;
  }
  button {
    @media (max-width: 320px) {
      font-size: 14px;
    }
  }
`
export const SpaceButtonTop = styled.div`
  margin-top: 48px;
  margin-bottom: 2rem;
  button {
    @media (max-width: 320px) {
      font-size: 14px;
    }
  }
`

export const SpaceButtonTopViewMore = styled.section<HeaderContentProps>`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  cursor: pointer;
  svg {
    rotate: 269deg;
    margin-top: 0.2rem;
    margin-left: 0.5rem;
    ${(props) =>
      !props.zeroHeigthDescription
        ? css`
            transform: rotate(3.142rad);
            transition: transform 0.5s;
          `
        : css`
            transform: rotate(360deg);
            transition: transform 0.5s;
          `}
  }
  a {
    color: #649af3;
    font-weight: 700;
  }
`
