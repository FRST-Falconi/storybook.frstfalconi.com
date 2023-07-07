import styled from 'styled-components'

interface IButtonContoll {
  isLeftButton?: boolean
  sizeButton?: number
  isVisible?: string
  marginsArrowButton?: string
  marginTopArrrowButton?: string
}

const POSITION_ARROW = {
  'top': 'flex-start',
  'mid': 'center',
  'base': 'flex-end',
}

export const WrapperHorizontal = styled.div<{position}>`
  display: flex;
  flex-direction: row;
  align-items: ${({ position }) => (position ? POSITION_ARROW[position] : 'center')};;
  justify-content: center;
  width: 100%;
  height: auto;
`

export const WrapperContent = styled.div<{ 
  paddingInternVertical?: string; 
  paddingInternHorizontal?: string; 
  hiddenHorizontalScrollBar: boolean 
  }>`

  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  overflow-x: ${({ hiddenHorizontalScrollBar }) => (hiddenHorizontalScrollBar ? 'hidden' : 'scroll')};
  overflow-y: hidden;
  white-space: nowrap;
  gap: 24px;

  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-left: ${({ paddingInternHorizontal }) => (paddingInternHorizontal ? paddingInternHorizontal : '150px')};
  padding-right: ${({ paddingInternHorizontal }) => (paddingInternHorizontal ? paddingInternHorizontal : '150px')};
  padding-top: ${({ paddingInternVertical }) => (paddingInternVertical ? paddingInternVertical : '0px')};
  padding-bottom: ${({ paddingInternVertical }) => (paddingInternVertical ? paddingInternVertical : '0px')};
`

export const CardTest = styled.div`
  min-width: 350px;
  min-height: 300px;
  margin: 10px;
  margin-left: 2px;
  margin-right: 2px;
  background-color: #0f0;
  z-index: 1;
  border-radius: 20px;
`
