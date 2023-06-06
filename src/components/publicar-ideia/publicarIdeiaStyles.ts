import styled from 'styled-components'

interface PropsPublicarideia {
  isErro?: boolean
}

export const PublicarIdeia = styled.div<PropsPublicarideia>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px 24px;
  width: 282px;
  background: ${(props) => (props.isErro ? '#FFE0E0' : '#fff2cc')};
`
export const TextoPublicarIdeia = styled.div<PropsPublicarideia>`
  display: flex;
  align-items: center;
  color: #222222;
  margin-bottom: 24px;
  word-break: break-word;
  cursor: pointer;

  p {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  }
`

export const TextoPublicarIdeiaHouver = styled.div<PropsPublicarideia>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff8e5;
  border: 1px dashed #444444;
  position: relative;
  cursor: pointer;
  margin-bottom: 24px;
  width: 240px;
  padding: 0px;
  h3 {
    position: absolute;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #222222;
    padding: 1rem;
    word-break: break-word;
  }
  p {
    visibility: hidden;
  }
`

export const TextoPublicarIdeiaUser = styled.div<PropsPublicarideia>`
  display: flex;
  align-items: center;
  color: #222222;
  margin-bottom: 24px;
  word-break: break-word;

  p {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  }
`

export const ContainerPublicarIdeia = styled.div<PropsPublicarideia>`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`
export const ContainerEmpresaData = styled.div<PropsPublicarideia>`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  margin-bottom: 24px;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #757575;
`
export const ContainerNomeSobrenome = styled.div<PropsPublicarideia>`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 110%;
  color: #444444;
`

export const ButtonPublicarAndCancelar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  p {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
    color: #000000;
    margin-right: 1rem;
  }
  div {
    margin-right: 1rem;
  }
`

export const TextAreaDigite = styled.textarea<PropsPublicarideia>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;
  width: 242px;
  border: 1px solid #549fe4;
  background: ${(props) => (props.isErro ? '#FFE0E0' : '#fff2cc')};
  margin-bottom: 16px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #222222;
  overflow: hidden;
  resize: none;
`
