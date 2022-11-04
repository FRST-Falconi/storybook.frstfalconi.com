import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 445px;
  min-height: 509px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  box-sizing: border-box;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
export const ContainerLogo = styled.div`
  width: 100%;
  min-height: 88px;
  position: absoulte;
  background-color: ${({ theme }) => theme.colors.primary1};
  border-radius: 8px 8px 0px 0px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 82, 71%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerTypography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
  margin-bottom: 20px;
`
export const TypographyWelcome = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.primary1};
`
export const TypographyFill = styled.p`
  font-family: PT Sans;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.neutralsGrey1};
  margin-left: 44px;
  margin-right: 44px;
  margin-bottom: 22px;
`
export const ContainerEmail = styled.div`
  margin-left: 44px;
  margin-right: 44px;
`
export const ContainerButtonLink = styled.div`
  position: absolute;
  right: 0;
  margin-right: 44px;
  margin-top: 23px;
`
export const ContainerPassword = styled.div`
  margin-top: 28px;
  margin-left: 44px;
  margin-right: 44px;
`
export const IconAlert = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding-right: 20px;
  padding-bottom: 140px;
`
export const ContainerConnect = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 44px;
  margin-left: 44px;
  margin-top: 32px;
  margin-bottom: 20px;
`
export const ContainerCheckbox = styled.div`
  cursor: pointer;
  display: flex;
  gap: 8px;
`
export const TypographyConnect = styled.p`
  font-family: PT Sans;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.shadeBlack};
`

// ######################recover####################

export const ContainerRecover = styled.div`
  width: 100%;
  max-width: 445px;
  height: 467px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  box-sizing: border-box;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
export const ContainerLogoRecover = styled.div`
  width: 100%;
  min-height: 88px;
  position: absoulte;
  background-color: ${({ theme }) => theme.colors.primary1};
  border-radius: 8px 8px 0px 0px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerTypographyRecover = styled.div`
  position: absolute;
  margin: 32px 44px 0 44px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const TypographyRecover = styled.p`
  font-family: PT Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.neutralsGrey1};
`
export const ContainerEmailRecover = styled.div`
  margin: 159px 44px 0 44px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const ContainerButtonRecover = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 30px 44px 20px 44px;
`

//#########################NewPassaword#################

export const TypographyNewPassword = styled.p`
  font-family: PT Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.shadeBlack};
  position: absolute;
  margin: 34px 44px 0 44px;
`
export const ContainerPasswordNew = styled.div`
  margin-top: 100px;
  margin-left: 44px;
  margin-right: 44px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

//###############SendComfirmation##############

export const ContainerSendComfirmation = styled.div`
  width: 100%;
  max-width: 445px;
  min-height: 302px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  box-sizing: border-box;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
export const ContainerButtonSendConfirmation = styled.div`
  display: flex;
  justify-content: end;
  margin: 126px 44px 0 0;
`
