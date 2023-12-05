import styled from 'styled-components'

export const Container = styled.div<{ width?: number; height?: number }>`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 35px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? height : 100)}px;
  overflow-y: auto;
  z-index: 100;
  border-radius: 8px;
`

export const InputMention = styled.input``

export const MentionList = styled.div`
  display: flex;
  flex-direction: column;
  height: 56px;
  width: 100%;
`

export const MentionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`

export const MentionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MentionAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const MentionUserContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: baseline;
  flex-direction: column;
  padding: 0 8px;
`

export const MentionUserName = styled.span`
  font-weight: 400;
  font-size: 16px;
`

export const MentionSubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MentionSubTitleText = styled.span`
  width: 400px;
  font-size: 12px;
`
