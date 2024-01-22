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
  box-shadow: 4px 8px 10px 0 #BDBDBD;
 
  ::-webkit-scrollbar {
    width: 28px; 
  }

  ::-webkit-scrollbar-thumb {
    width:10px;
    border: 12px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 9999px;
    background-color:  #757575;
    
  
  }

  ::-webkit-scrollbar-track {
    background-color: inherit; /* Set the color of the scrollbar track */
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
  border-bottom:${({ theme }) =>  `0.5px solid ${theme.colors.neutralsGrey5}`};
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
  white-space: nowrap; 
  overflow: hidden; 
  
`

export const MentionUserName = styled.span`
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  
`

export const MentionSubTitle = styled.div`
  margin-top: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.neutralsGrey3};
  font-weight: 400;
`

export const MentionSubTitleText = styled.span`
  font-size: 12px;
  display:flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
 
`
export const Circle = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.neutralsGrey3};
  color: ${({ theme }) => theme.colors.neutralsGrey3};
  margin: 0 8px;
`
