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
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #222222;
  word-break: break-word;

  :hover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 28px 0px;
    background: #fff8e5;
    border: 1px dashed #444444;
    cursor: pointer;
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
