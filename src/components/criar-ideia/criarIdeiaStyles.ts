import styled from 'styled-components'

interface PropsCriarideia {
  isErro?: boolean
}

export const ButtonCriarIdeia = styled.div`
  width: 282px;
  height: 196px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 24px;
  background: #f7f9fc;
  border: 1px dashed #9c9c9c;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 16px 16px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
  }
  margin-right: 2rem;
`
export const ContainerCriarIdeia = styled.div`
  display: flex;
  flex-direction: row;
`

export const CriarIdeia = styled.div<PropsCriarideia>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px 24px;
  width: 282px;
  background: ${(props) => (props.isErro ? '#FFE0E0' : '#fff2cc')};
`

export const DivisaoTextoEmpresaDate = styled.div`
  width: 2px;
  height: 2px;
  background: #757575;
  margin: 0 0.3rem;
`

export const TextoEmpresaDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #757575;
`
export const NomeUser = styled.div`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 110%;
  color: #444444;
  margin-bottom: 4px;
`

export const ButtonDigiteIdeia = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 28px 40px;
  width: 242px;
  height: 96px;
  border: 1px solid #69a9e1;
  margin-bottom: 24px;
  word-break: break-all;
  cursor: pointer;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #9c9c9c;
  text-align: center;
`

export const TextAreaDigite = styled.textarea<PropsCriarideia>`
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

export const CountCaracter = styled.div`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #757575;
  margin-bottom: 16px;
`

export const ButtonPublicarAndCancelar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const containerError = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
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
