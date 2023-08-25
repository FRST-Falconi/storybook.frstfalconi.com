import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 270px;
  height: fit-content;
  background: linear-gradient(180deg, #ee4c15 0%, #cc362d 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding-top: 16px;

  > .frame {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    box-sizing: border-box;
    background: #f18624;
    padding: 8px 12px 16px 8px;
    gap: 7.75px;
  }
`
export const Image = styled.img`
  height: 189px;
  width: 100%;
  border-radius: 6.56px;
  object-position: center;
  object-fit: cover;
  box-shadow: 0px 14.760848999023438px 32.801883697509766px -12.300708770751953px #cc362d;
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
`
export const Typography = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.shadeWhite};
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
  text-overflow: ellipsis;
`
export const Select = styled.div`
  background: none;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`
export const ContainerCard = styled.div`
  width: 270px;
  height: 76px;
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
  gap: 8px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralsGrey9};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.neutralsGrey6};
  }

  &:hover .trash {
    display: inline-block;
    /* background-color: red; */
  }
`
export const Thumbnails = styled.div`
  width: 17.29px;
  height: 51px;
  margin-left: -11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.div`
  width: 166px;
  margin-left: 12px;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
  text-overflow: ellipsis;
`
export const IconTrash = styled.div`
  cursor: pointer;
  height: fit-content;
   transition: all 0.2s  ;
  display: none;
  align-self: center;
  align-content: flex-end;
`
// ##############TRILHA##############

export const ContainerTrilha = styled.div`
  width: 270px;
  height: 499px;
  background-color: ${({ theme }) => theme.colors.primary2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const ContainerChoice = styled.div`
  width: 232px;
  height: 75px;
  position: absolute;
  top: 0;
  margin: 20px;
`
export const TypographyChoice = styled.p`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  padding-bottom: 8px;
  white-space: nowrap;
`
export const SelectChoice = styled.select`
  width: 232px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  color: #9c9c9c;
  padding-left: 10px;
`
export const ImageChoice = styled.img`
  width: 232px;
  height: 310px;
  margin-bottom: 70px;
  border-radius: 8px;
  position: absolute;
  object-fit: cover;
  bottom: 0;
`
export const ContentChoice = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  margin-top: 425px;
`
export const OptionChoice = styled.option`
  color: #9c9c9c;
`
