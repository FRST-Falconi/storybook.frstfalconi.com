import styled, { css } from 'styled-components'

interface HeaderContentProps {
  img?: any
  zeroHeigthDescription?: boolean
  tmnDescription?: number
  onDisplay?: boolean
  height?: number | string
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
    height: ${(props) => props.height ?? '450px'};
    ${(props) =>
      props.tmnDescription >= 134 &&
      css`
        section {
          visibility: inherit;
        }
      `}
  }

  ${(props) =>
    props.onDisplay
      ? css`
          width: 100%;
        `
      : css`
          width: 0px;
        `}

  @media (max-width: 414px) {
    height: ${(props) => props.height ?? '450px'};
  }
  @media (max-width: 320px) {
    height: ${(props) => props.height ?? '450px'};
  }
`
export const Content = styled.div<HeaderContentProps>`
  width: 100%;
  height: ${(props) => props.height ?? '450px'};
  padding: 64px;
  background: linear-gradient(52deg, #111111 0%, rgba(17, 17, 17, 0) 100%);

  ${(props) =>
    !props.onDisplay &&
    css`
      display: none;
    `}

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

export const Counters = styled.button<{ selected: boolean }>`
  width: 11px;
  height: 11px;
  box-sizing: border-box;
  border-radius: 100%;
  border: none;
  background-color: ${({ selected, theme }) => (selected ? theme.colors.primary1 : theme.colors.neutralsGrey5)};
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  max-width: 60vw;
  margin-top: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 320px) {
    word-break: break-word;
    font-size: 25px;
  }
`

export const Description = styled.div<HeaderContentProps>`
  font-size: 16px;
  font-weight: 400;
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
  display: flex;
  gap: 28px;
  align-items: center;
  cursor: pointer;
  @media (max-width: 414px) {
    flex-direction: column;
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
  button {
    @media (max-width: 320px) {
      font-size: 14px;
    }
  }
`

export const SpaceButtonTopViewMore = styled.section<HeaderContentProps>`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 10px;

  &.open {
    margin-top: -20px;
  }
  &.closed {
    margin-top: 0;
  }

  > span {
    transform: rotate(90deg);

    &.open {
      animation: 0.2s open both;
    }
    &.closed {
      animation: 0.2s closed both;
    }
  }
  a {
    color: #649af3;
    font-weight: 700;
  }

  @keyframes open {
    to {
      transform: rotate(450deg);
    }
  }

  @keyframes closed {
    to {
      transform: rotate(-90deg);
    }
  }
`
export const StyleHeaderInProgress = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`
