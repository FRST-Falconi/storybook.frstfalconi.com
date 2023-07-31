import styled, { css } from 'styled-components'

interface IImageBackground {
  active?: boolean
}

interface IContainerThumbnails {
  showSwitchIndividual: boolean
}

export const ContainerThumbnails = styled.div<IContainerThumbnails>`
  width: 180px;
  min-width: 180px;
  height: ${(props) => `${props.showSwitchIndividual ? '352px' : '300px'}`};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  box-sizing: border-box;
  position: relative;
  padding-top: 8px;
  z-index: 9999px;
  user-select: none;
`

export const ContainerButton = styled.div<IImageBackground>`
  position: absolute;
  width: 155px;
  height: 205px;
  margin-top: 24px;
  margin-left: 12px;
  border-radius: 4px;
  z-index: 1;
  background-color: #00000090;

  padding: 0;
  border: none;
  display: ${(props) => `${props.active ? 'flex' : 'none'}`};
  justify-content: center;
  align-items: center;
`
export const Thumbnails = styled.div`
  display: flex;
  justify-content: center;
`

export const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Typography = styled.div`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.shadeBlack};
  white-space: wrap;
  position: absolute;
`
export const IconVertical = styled.div`
  margin-left: 150px;
  margin-top: 10px;
  width: 34px;
  cursor: pointer;
  position: absolute;
`
export const ContainerAtivar = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 45px;
  position: absolute;
`
export const TypographyAtivar = styled.span<IImageBackground>`
  font-family: 'PT Sans';
  font-style: normal;
  font-size: 16px;
  line-height: 21px;
  text-align: right;
  width: 120px;
  color: ${({ theme }) => theme.colors.shadeBlack};
`
/* ################addNew############################ */

export const ContainerThumbnailsAdd = styled.div`
  width: 177px;
  height: 352px;
  border-radius: 8px;
  border: 1px dashed ${({ theme }) => theme.colors.neutralsGrey5};
  background-color: ${({ theme }) => theme.colors.neutralsGrey6};
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const ContainerEllipse = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.neutralsGrey4};
  cursor: pointer;
  padding-top: 5px;
`
export const TypographyAdd = styled.div`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  width: 140px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.neutralsGrey4};
  text-align: center;
  word-wrap: break-all !important;
  white-space: pre-wrap;
`

// container card

export const CardDragAndDrop = styled.div<IImageBackground>`
  display: flex;
  width: 195px;
  min-width: 195px;
  padding: 8px;
  height: 250px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  border-radius: 8px;
  background: #fff;
  user-select: none;
  position: relative;

  &.add {
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
  }

  &.loading {
    gap: 8px;
    justify-content: flex-start;
  }

  > .thumbnails_img {
    width: 100%;
    height: 50%;
    border-radius: 4px;
    object-position: center;
    object-fit: cover;
    width: 100%;
    object-fit: cover;
    filter: ${(props) => `grayscale(${props.active ? '0' : '1'})`};
  }
`

// LOADINGS

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
  z-index: 9999px;
  user-select: none;
  border-radius: 8px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(123, 129, 136, 0) 6.43%, rgba(123, 129, 136, 0.2) 22.38%), #d9d9d9;
  -webkit-animation-duration: 4s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;

  &.loading_img {
    width: 100%;
    height: 50%;
    border-radius: 4px;
  }
  &.loading_text {
    height: 20px;
    width: 100%;
    border-radius: 20px;
  }

  &.loading_button {
    width: 50%;
    align-self: flex-end;
    align-content: flex-end;
    display: inline-block;
    margin-top: 16px;
  }
`
