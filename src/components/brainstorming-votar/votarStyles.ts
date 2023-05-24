import styled, { css } from 'styled-components'

interface PropsVotar {
  user: string
}

export const ContainerVotar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ButtonVotar = styled.button`
  display: flex;
  height: 32px;
  width: 68px;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  position: absolute;
  width: 68px;
  border-radius: 8px;
  font-family: 'PT Sans';
  background: transparent;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  border: none;
  color: #444444;
  cursor: pointer;
  margin-right: 1rem;

  :hover {
    background: #f2f2f2;
  }
  :active {
    color: #f26818;
    svg {
      fill: #f26818;
      path {
        stroke: #ffff;
      }
      path :nth-child(3) {
        stroke: blue;
      }
    }
  }
  svg {
    margin-right: 4px;
  }
`

export const DivSeparador = styled.div`
  margin-left: 4rem;
  width: 24px;
  height: 0px;
  border: 0.5px solid #bdbdbd;
  transform: rotate(-90deg);
`

export const QuantidadeVotos = styled.div<PropsVotar>`
  display: flex;
  flex-direction: row;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #444444;
  margin: 0;

  ${(props) =>
    props.user === 'userAutor' &&
    css`
      margin-left: 0.5rem;
    `}
`
