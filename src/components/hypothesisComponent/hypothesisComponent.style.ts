import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #222222;
`
export const Container = styled.div<{ type: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: PT Sans;
  font-size: 14px;
  border-radius: 8px;
  padding: 0 0 0 16px;
  min-height: 52px;

  ${({ type }) => {
    switch (type) {
      case 'prioritize':
        return css`
          background: #fdae15;
        `
      case 'raised':
        return css`
          background: #f8d784;
        `
      case 'suggested':
        return css`
          background: #cddaef;
        `
      default:
        return ''
    }
  }}
`

export const Title = styled.span`
  font-weight: 700;
  white-space: nowrap;
`

export const Index = styled.span`
  font-weight: 700;
`

export const Separator = styled.div`
  font-weight: bold;
  margin: 0 8px;
`

export const Description = styled.span`
  font-weight: 400;
  padding: 8px 0 8px;
`
export const SplitContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`
export const VoteAvatarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`

export const VoteAvatar = styled.div`
  position: absolute;
`

export const VoteButtonContainer = styled.span<{ type?: string; modeDelete?: boolean; height?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  background: #f9cd5e;
  cursor: pointer;
  ${({ height }) =>
    height > 0 &&
    css`
      height: ${height}px;
    `}

  ${({ type }) => {
    switch (type) {
      case 'prioritize':
        return css`
          background: #dc9100;
        `
      case 'raised':
        return css`
          background: #f9cd5e;
        `
      case 'suggested':
        return css`
          background: #a5c3f2;
        `
      default:
        return ''
    }
  }}
    ${({ modeDelete }) =>
    modeDelete &&
    css`
      background: inherit;
    `}
    border-radius:0 8px 8px 0;
  padding: 0 16px 0 16px;
  min-height: 52px;
  margin-left: 4px;
`
export const VoteCount = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 4px;
  white-space: nowrap;
  width: auto;
`
export const VoteButton = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  width: 100%;
  font-family: PT Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 18.12px;
  text-align: left;
  color: #444444;
  white-space: nowrap;
  width: auto;
`
export const VoteContent = styled.div`
  display: flex;
  div {
    flex-direction: row-reverse;
    display: flex;
    :nth-child(1n) {
      margin-left: -8px;
    }
  }
`
export const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  border: solid 2.5px #fff;
  color: #ffffff;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const VoteListContainer = styled.div<{ showVotes?: boolean }>`
  position: absolute;
  top: calc(100% + 1px);
  right: 0;
  width: 225px;
  max-height: 300px;
  overflow-y: auto;
  padding: 5px 0px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  z-index: 1999;
  display: ${({ showVotes }) => (showVotes ? 'block' : 'none')};
  &::-webkit-scrollbar {
    display: none;
  }
  box-shadow: 0px 15px 20px 0px #22222226;
`

export const VoteListItem = styled.div<{ lastVote?: boolean }>`
  cursor: pointer;
  height: 36px;
  display: flex;
  align-items: center;
  gap: 10px;
  ${({ lastVote }) => lastVote === false && 'border-bottom: solid 1px #ccc;'}
`

export const ContainerModal = styled.div`
  width: 100%;
  h2{
    margin-bottom: 0.4rem;

  }
  p{
    font-weight: 400;
    margin-bottom: 1rem;

  }
`

export const LineModal = styled.div`
  width: 100%;
  border: solid 0.2px #E0E0E0;
  margin-bottom: 1rem;

`
export const ButtonModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  button{
    margin-left: 1rem;
  }

`
