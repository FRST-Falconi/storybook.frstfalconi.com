import styled from 'styled-components'
import imgFundo from './frstFundo.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 8px;
  width: 282px;
  height: 336px;
  background: rgba(17, 17, 17);
`
export const mask = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: url(${imgFundo});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SrgLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`

export const TitleLogo = styled.div`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 1rem;
`

export const TextCard = styled.div`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 1rem;
  padding: 0 3rem;
  word-break: break-word;
  b {
    color: #f18624;
  }
`
