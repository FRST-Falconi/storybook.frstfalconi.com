import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.11fr 1fr;
  height: 120px;
  position: relative;
  gap: 16px;
  cursor: pointer;
  box-sizing: border-box;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
export const Image = styled.div`
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const Title = styled.p`
  
  margin-bottom: 12px;
  color: ${({ theme })=> theme.colors.linkOnfocus};
  font-size: 16px;
  font-weight: 700;
`
export const Description = styled.p`
  
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutralsGrey3};
  display: -webkit-box;
  -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const skillSets = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 8px;
  box-sizing: border-box;
  position: absolute;
  bottom: -20px;
  
  font-family: 'PT Sans';
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutralsGrey3};
`

export const skillTag = styled.div`
  display: flex;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.shadeWhite};
  background-color: ${({ theme }) => theme.colors.secondary1};
  padding: 2px 4px;
`