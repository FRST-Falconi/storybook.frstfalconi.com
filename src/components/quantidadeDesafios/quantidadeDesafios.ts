import styled from 'styled-components'
import imgSeta from './imgSetas/Frame_2416.svg'

export const ContainerDesafios = styled.div`
  width: 100%;
  background-image: url(${imgSeta});
  background-repeat: no-repeat;
  padding: 1rem;
  display: flex;
  background-size: 100%;
  background-position: top 5rem;
  background-position: -2rem;
  justify-content: center;
`

export const ItemDesafio = styled.div`
  width: 14%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1.2rem;
  margin-left: 0.1rem;
`

export const QuantidadeDesafio = styled.div`
  width: 85%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  height: 8rem;
  border-radius: 100%;
  border-width: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
  }
`
