import styled from 'styled-components'
interface IProps {
  selectedItem: boolean
  isOldAccordionList?: boolean
  darkMode?: boolean
}

export const StylesAccordionList = styled.div<IProps>`
  width: 100%;
  max-width: 371px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border: ${({ isOldAccordionList, darkMode }) => !isOldAccordionList && darkMode ? '1px solid #222222' : `1px solid #CFD9E6`};
  border-radius: ${({ isOldAccordionList }) => !isOldAccordionList && `8px 8px 0px 0px`};  
  &.open {
    border-radius: 8px 8px 0px 0px;
    border: ${({ theme, selectedItem, isOldAccordionList }) => selectedItem && isOldAccordionList && `1px solid ${theme.colors.primary1}`};
  }

  .title {
    font-family: 'Work Sans';
    font-weight: ${({ selectedItem, isOldAccordionList }) => (selectedItem && !isOldAccordionList ? '600' : 'normal')};
    color: ${({darkMode}) => darkMode ? '#EBEBEB' : '#343434'};
    ::selection {
      color: inherit;
      background: transparent;
    }
  }

  .header {
    width: 100%;
    display: flex;
    align-items: flex-start; /* Modificado para alinhar verticalmente */
    justify-content: space-between;
    padding: 19px 24px;
    background-color: ${({ theme, darkMode }) => darkMode ? '#323232' : theme.colors.shadeWhite};
    cursor: pointer;
    position: relative; /* Permite a seta ficar fixada à direita */
    
    &.open {
      border-radius: 8px 8px 0px 0px;
    }

    &.closed {
      border-radius: ${({ isOldAccordionList }) => !isOldAccordionList ?  '8px 8px 0px 0px;' : '8px'};
    }

    &:hover {
      background: ${({ isOldAccordionList, darkMode }) => !isOldAccordionList && darkMode ? '#464646' : `#EDF3F9`};
    }

    /* Coloca o título e progress bar em uma coluna */
    .title-container {
      display: flex;
      flex-direction: column; /* Empilha o título e progress bar */
      align-items: flex-start;
    }

    > span {
      position: absolute; /* Posiciona a seta à direita */
      top: 50%; /* Alinha verticalmente */
      right: 24px; /* Ajusta a distância à direita */
      transform: translateY(-50%); /* Ajuste fino no alinhamento vertical */
      
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

export const ContainerComplete = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  gap: 8px;
`

export const CompleteText = styled.p<{darkMode?: boolean}>`
  font-family: 'PT Sans';
  font-size: 12px;
  font-weight: 700;
  color: ${({darkMode}) => darkMode ? '#E0E0E0' : '#444444'};
`
