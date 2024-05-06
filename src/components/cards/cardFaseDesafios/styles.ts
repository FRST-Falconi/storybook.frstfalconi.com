import styled from 'styled-components'

export const Container = styled.div`
  width: 282px !important;
  max-width: 282px !important;
  height: 430px;
  max-height: 430px;
  color: #222222;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  word-break: break-word !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
`

export const PhaseNumber = styled.div`
  background: #fce7d3;
  height: 89.6px;
  width: 91.2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 5px solid #f18624;
  margin-bottom: -1rem;
  padding: 0px 4px 0px 0px;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #f18624;
  height: 45px;
  max-width: 282px;
  border-radius: 8px 8px 0px 0px;
`

export const DescriptionContainer = styled.div`
  padding: 20px;
  gap: 2px;
  max-width: 282px !important;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  word-break: break-word !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  flex-direction: column;
`

export const Description = styled.span`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #f18624;
  max-width: 250px;
  max-height: 70px;
  overflow-y: auto;
  overflow-x: hidden;
  word-break: break-word !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  -webkit-line-clamp: 6 !important;
  -webkit-box-orient: vertical !important;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #fce7d3;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f18624;
    border-radius: 10px;
    border: 2px solid #f0f0f0;
  }
`

export const CardTitlePhase = styled.div`
  display: flex;
  color: #f18624;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.25px;
  width: 100%;
  align-items: center;
  margin-bottom: 9px;
`

export const TitleDescription = styled.span`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 110%;
  color: #444444;
  max-width: 250px;
  word-break: break-word !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
`
export const ViewButton = styled.div`
  display: flex;
  justify-content: center;
  height: 55px;
  padding: 0 35px;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #bdbdbd;
  position: absolute;
  bottom: -1rem;
  width: 100%;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  padding: 0 5px;
  border-radius: 0px 0px 8px 8px;
  background: #f18624;
  color: #fff;
  font-weight: 600;
  font-family: 'PT Sans';
  cursor: pointer;
`

export const HypothesysAndActions = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1.5rem;

  .items {
    display: flex;
    flex-direction: column;
    align-items: center;

    .text-items {
      font-size: 14px;
      font-family: 'PT Sans';
      font-weight: 700;
    }

    .number-items {
      font-size: 40px;
      font-weight: 700;
      color: #475569;
      margin-top: -3px;
    }
  }
`

export const PendingHypotheses = styled.div`
  background: #f8d784;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 28px 9px;
  gap: 11px;
`
