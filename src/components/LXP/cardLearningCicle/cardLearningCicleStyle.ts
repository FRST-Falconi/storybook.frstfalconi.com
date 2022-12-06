import styled, { css } from 'styled-components'

interface PropsStyleCardLearningCicle {
  active: boolean
  activeTwo: boolean
  activeThree: boolean
  activeFour: boolean
}

export const Container = styled.div`
  width: 18.5rem;
  height: 27.063rem;
  border-right: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  background-color: #f7f9fc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
`
export const ContainerStepNumbers1 = styled.div<PropsStyleCardLearningCicle>`
  widht: 12.5rem;
  height: 3.875rem;
  display: flex;
  flex-direcitono: row;
  aling-items: center;
  gap: 0.9rem;
  cursor: pointer;

  .step1 {
    font-family: Work Sans;
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0.01em;
    ${(props) =>
      props.active &&
      css`
        color: ${({ theme }) => theme.colors.neutralsGrey2};
      `}
  }  
`
export const ContainerStepNumbers2 = styled.div<PropsStyleCardLearningCicle>`
  widht: 12.5rem;
  display: flex;
  flex-direcitono: row;
  aling-items: center;
  gap: 0.9rem;
  cursor: pointer;

  .step2 {
    font-family: Work Sans;
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.colors.neutralsGrey4};
  }

  .txt2 {
    font-family: PT Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.neutralsGrey2};
    display: none;   
  }  
`
export const ContainerStepNumbers3 = styled.div<PropsStyleCardLearningCicle>`
  widht: 12.5rem;
  display: flex;
  flex-direcitono: row;
  aling-items: center;
  gap: 0.9rem;
  cursor: pointer;

  .step3 {
    font-family: Work Sans;
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.colors.neutralsGrey4};
  }

  .txt3 {
    font-family: PT Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.neutralsGrey2};
    display: none;   
  }
`
export const ContainerStepNumbers4 = styled.div<PropsStyleCardLearningCicle>`
  widht: 12.5rem;
  display: flex;
  flex-direcitono: row;
  aling-items: center;
  gap: 0.9rem;
  cursor: pointer;

  .step4 {
    font-family: Work Sans;
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.colors.neutralsGrey4};
  }
  .txt4 {
    font-family: PT Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.neutralsGrey2};
    display: none;   
  }
`
