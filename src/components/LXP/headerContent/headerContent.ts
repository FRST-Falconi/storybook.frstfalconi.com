import styled, { css } from 'styled-components'

interface HeaderContentProps {
  img?: any
  hgtDesc?: boolean
  tmnDescription?: number
  tmnHeader?: number
  tmnHeaderT?: number
  tmnHeaderM?: number
  tmnHeaderSM?: number
}

export const Container = styled.div`
  ul {
    position: relative;
    top: -2.5rem;
    li {
      button {
        background: ${({ theme }) => theme.colors.neutralsGrey5};
        border-radius: 100%;
        width: 13px;
        height: 13px;
      }
      button::before {
        font-size: 16px;
        line-height: 15px;
        width: 13px;
        height: 13px;
        left: -1px;
        opacity: -2.65;
        color: ${({ theme }) => theme.colors.primary1} !important;
      }
    }
  }
`

export const HeaderImage = styled.div<HeaderContentProps>`
  display: flex;
  justify-content: flex-start;
  height: ${(props) => (props.tmnHeader ? `${props.tmnHeader}vh` : '80vh')};
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;
  color: #fff;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 120rem 40rem;
  ${(props) =>
    props.tmnDescription < 164 &&
    props.tmnHeader >= 80 &&
    css`
      section {
        visibility: hidden;
      }
    `}
  @media (max-width: 834px) {
    height: 44vh;
    height: ${(props) => (props.tmnHeaderT ? `${props.tmnHeaderT}vh` : '44vh')};

    ${(props) =>
      props.tmnDescription < 164 &&
      props.tmnHeaderT <= 44 &&
      css`
        section {
          visibility: inherit;
        }
      `}
  }
  @media (max-width: 414px) {
    height: 65vh;
    height: ${(props) => (props.tmnHeaderM ? `${props.tmnHeaderM}vh` : '65vh')};

    ${(props) =>
      props.tmnDescription < 164 &&
      props.tmnHeaderM <= 65 &&
      css`
        section {
          visibility: inherit;
        }
      `}
  }
  @media (max-width: 320px) {
    height: 87vh;
    height: ${(props) => (props.tmnHeaderSM ? `${props.tmnHeaderSM}vh` : '87vh')};

    ${(props) =>
      props.tmnDescription < 164 &&
      props.tmnHeaderSM <= 87 &&
      css`
        section {
          visibility: inherit;
        }
      `}
  }
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 64px;
  background: linear-gradient(52deg, #111111 0%, rgba(17, 17, 17, 0) 100%);
  @media (max-width: 414px) {
    padding: 2rem;
  }
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
    !props.hgtDesc &&
    css`
      height: 2.5rem;
    `}
  overflow: hidden;
  transition: all 0.9s ease-in-out;
  display: -webkit-box;

  @media (max-width: 834px) {
    max-width: 34rem;
    ${(props) =>
      !props.hgtDesc &&
      css`
        height: 2.5rem;
      `}
  }

  @media (max-width: 414px) {
    word-break: break-word;
    ${(props) =>
      !props.hgtDesc &&
      css`
        height: 2.5rem;
      `}
  }
  @media (max-width: 320px) {
    font-size: 12px;

    ${(props) =>
      !props.hgtDesc &&
      css`
        height: 2.5rem;
      `}
  }
`

export const ContadorConteudo = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-bottom: 82px;
  cursor: pointer;
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
      !props.hgtDesc
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
