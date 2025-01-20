import styled from 'styled-components'
interface IProps {
  selectedItem: boolean
  isOldAccordionList?: boolean
}

export const StylesAccordionList = styled.div<IProps>`
  width: 100%;
  max-width: 371px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border: ${({  isOldAccordionList}) =>  !isOldAccordionList && `1px solid #CFD9E6`};  
  flex-direction: column;
  border-radius: ${({  isOldAccordionList}) =>  !isOldAccordionList && ` 8px 8px 0px 0px`};  
  &.open {
    border-radius: 8px 8px 0px 0px;
    border: ${({ theme, selectedItem, isOldAccordionList}) => selectedItem && isOldAccordionList && `1px solid ${theme.colors.primary1}`};
  }

  .title {
    font-family: 'Work Sans';
    font-weight: ${({ selectedItem, isOldAccordionList }) => (selectedItem && !isOldAccordionList ? '600' : 'normal')};
    ::selection {
      color: inherit;
      background: transparent;
    }
  }

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 19px 24px;
    background-color: ${({ theme }) => theme.colors.shadeWhite}; 
    &.open {
      border-radius: 8px 8px 0px 0px;
    }
    &.closed {
      border-radius: ${({ isOldAccordionList }) => !isOldAccordionList ?  '8px 8px 0px 0px;' : '8px'};
    }
    &:hover {
    background: ${({ isOldAccordionList }) => !isOldAccordionList && `#EDF3F9`};
  }
    cursor: pointer;
    > span {
      &.open {
        animation: 0.2s open both;
      }
      &.closed {
        animation: 0.2s closed both;
      }
    }
  }

  @keyframes open {
    to {
      transform: rotate(90deg);
    }
  }

  @keyframes closed {
    to {
      transform: rotate(-90deg);
    }
  }

  .listContent {
    width: 100%;
    height: auto;
  }
`
