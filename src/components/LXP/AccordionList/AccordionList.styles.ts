import styled from 'styled-components'
interface IProps {
  selectedItem: boolean
}

export const StylesAccordionList = styled.div<IProps>`
  width: 100%;
  max-width: 371px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  &.open {
    border-radius: 8px 8px 8px 8px;
    border: ${({ theme, selectedItem }) => selectedItem && `1px solid ${theme.colors.primary1}`};
  }

  .title {
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
      border-radius: 8px 8px 8px 8px;
      border-bottom: 1px solid #BDBDBD;
    }
    &.closed {
      border-radius: 8px;
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
