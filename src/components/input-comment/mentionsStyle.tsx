import styled from 'styled-components';

export const Container = styled.div<{ hide: boolean; top: string; width?: number; height?: number }>`
  background-color: #ffff;
  display: ${({ hide }) => hide ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: ${({ top }) => top};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? height : 195)}px;
  overflow-y: auto;
  z-index: 100;
  border-radius: 8px;

  &::-webkit-scrollbar {
    width: 5px; 
    margin-right: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #757575;
    border-radius: 6px; 
    
  }

  &::-webkit-scrollbar-track {
    background-color: #fff; /* Set the color of the scrollbar track */
    border-radius: 8px; /* Set the border radius of the scrollbar track */
  }
`

export const InputMention = styled.input``

export const MentionList = styled.div`
  display: flex;
  flex-direction: column;
  height: 195px;
  width: 100%;
`

export const MentionItem = styled.div<{ active?: boolean }>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
  height: 56px;
  border-bottom: 1px solid #BDBDBD;
  &:last-child {
    border-bottom: none; /* Remove the border for the last child */
  }
  &:hover {
    background-color:${({ active }) => active ? '#FCF3EB' : '#F1F5F9'};
  }
  &:focus{
    background-color:${({ active }) => active ? '#FCF3EB' : '#F1F5F9'};
  }
  
  
  
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
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  padding: 0 8px 0 16px;
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
  display:flex;
  align-items: center;
  justify-content: flex-start;
`
export const Circle = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: #757575;
  margin: 0 8px;
`
