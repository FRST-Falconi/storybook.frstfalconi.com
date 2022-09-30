import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  position: relative;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Image = styled.img`
  width: 88px;
  height: 120px;
  border-radius: 8px;
  position: absolute;
  left: 0;
  cursor: pointer;
  object-fit: cover;
`
export const Title = styled.text`
  width: 650px;
  margin-left: 102px;
  margin-bottom: 12px;
  color: ${({ theme })=> theme.colors.linkOnfocus};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`
export const Description = styled.text`
  width: 650px;
  margin-left: 102px;
  font-weight: 400;
  font-size: 16px;
  color: #757575;
  display: -webkit-box;
  -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
  -webkit-box-orient: vertical;
  overflow: hidden;
`
