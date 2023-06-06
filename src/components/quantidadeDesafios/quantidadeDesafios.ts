import styled from 'styled-components'
import imgSeta from './imgSetas/setasDesafios.svg'

export const ContainerDesafios = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ContainerItemDesafio = styled.div`
  width: 100%;
  background-image: url(${imgSeta});
  background-repeat: no-repeat;
  padding: 1rem;
  display: flex;
  background-size: 100%;
  background-position: top 5rem;
  background-position: -2rem;
  justify-content: center;
  margin-bottom: 1rem;
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
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #222222;
    word-wrap: break-word;
    max-width: 90%;
    word-break: break-all;
  }
  p {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #222222;
  }
`

export const containerTitleDesafio = styled.div`
  width: 100%;
  height: 24px;
  padding: 0 4rem;
  display: flex;
  flex-direction: row;
`

export const TitleDesafiosWhite = styled.div`
  width: 240px;
  height: 24px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1b191a;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 9999;
  margin-right: -2rem;
  margin-left: -2rem;
`
export const TitleDesafiosGrey = styled.div`
  width: 240px;
  height: 24px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;
`
