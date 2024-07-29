import styled from 'styled-components'

export const WrapperEmptyState = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 8px;
  min-height: fit-content;
  background-color: ${({ theme }) => theme?.colors.shadeWhite};
  overflow: hidden;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: min-height 0.5s ease-in-out;
  transition: background-color 0.5s ease-in-out;
`

export const ImageEmptyState = styled.img`
  width: 150px;
`

export const LabelEmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: PT Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.7px;
  text-align: center;
  color: #444;
`

export const ButtonCreateAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 34px;
  width: 150px;
  cursor: pointer;
  border-radius: 8px;
  white-space: nowrap;
  padding-left: 2px;
  padding-right: 2px;
  margin: 2px;

  font-family: PT Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 17.6px;
  text-align: left;
  gap: 8px;

  background-color: ${({ theme }) => theme.colors.primary1};
  color:  ${({ theme }) => theme?.colors.shadeWhite}
`
