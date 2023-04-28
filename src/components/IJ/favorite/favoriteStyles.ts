import styled from 'styled-components'

export const SFavorite = styled.div`
  padding: 12px 20px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  cursor: pointer;

  &.disable {
    cursor: not-allowed;
  }
`
