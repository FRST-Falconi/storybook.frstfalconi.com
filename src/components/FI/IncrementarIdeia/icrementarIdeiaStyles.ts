import styled, { css } from 'styled-components'

interface PropsComentario {
  activeComentario?: boolean
  error?: boolean
}

export const ContainerComentario = styled.div<PropsComentario>`
  width: 250px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${(props) => (props.activeComentario ? 'flex-start' : 'center')};
  padding: 4px 16px 4px 4px;
  background: #f2f2f2;
  border: ${(props) => (props.activeComentario ? '2px solid #757575' : '1px solid #bdbdbd')};
  border-radius: ${(props) => (props.activeComentario ? '16px' : '100px')};
  order: 1;
  flex-grow: 0;
  padding: 0.5rem;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #222222;

  ${(props) =>
    props.error &&
    css`
      background: #ffe0e0;
      border: 2px solid #c00f00;
    `}

  cursor: pointer;
  :hover {
    border: 1px solid #f26818;
  }
`
export const imagemComentario = styled.div<PropsComentario>`
  ${(props) =>
    props.activeComentario &&
    css`
      padding-top: 0.5rem;
    `}
`

export const IpuntComentario = styled.textarea<PropsComentario>`
  width: 100%;
  background: #f2f2f2;
  height: ${(props) => (props.activeComentario ? '100' : '17px')};
  border: none;
  padding: 0rem 0.5rem 0rem 0.5rem;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #222222;
  overflow: hidden;
  resize: none;

  ${(props) =>
    props.activeComentario &&
    css`
      margin-bottom: 1rem;
      padding-top: 1rem;
    `}

  ${(props) =>
    props.error &&
    css`
      background: #ffe0e0;
    `}
`

export const imagemAndIput = styled.div<PropsComentario>`
  display: flex;
  flex-direction: row;
  ${(props) =>
    !props.activeComentario &&
    css`
      align-items: center;
    `}
`
export const containerCountAndEmojis = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const valueCount = styled.div`
  width: 3rem;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #757575;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
`

export const valueEmoji = styled.div`
  background: green;
  width: 3rem;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
`
export const containerError = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  width: 300px;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
  p {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #923534;
  }
`
