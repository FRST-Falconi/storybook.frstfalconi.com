import styled from 'styled-components'

export const ContainerDesafios = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1136px;
`
export const ContainerItemDesafio = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  background-size: 100%;
  background-position: top 5rem;
  background-position: -2rem;
  justify-content: center;
  margin-bottom: 1rem;
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
export const DataTitle = styled.text`
  color: #222;
  text-align: center;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-anchor: middle;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`

export const DataSubTitle = styled.text`
  color: #222;
  text-align: center;
  font-family: Work Sans;
  font-size: 16px; 
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-anchor: middle;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`