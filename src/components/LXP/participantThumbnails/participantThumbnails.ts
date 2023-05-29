import styled, { css } from 'styled-components'

interface HeaderThumbnailsProps {
  img?: any
}

export const CardThumbnails = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: #000;
  width: 11rem;
  margin: 1rem 1.1rem;
  position: relative;
  transition: transform 1s;
  border-radius: 8px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.textMessageComponentsCardTitle.fontFamily};
    font-weight: ${({ theme }) => theme.fonts.textMessageComponentsCardTitle.fontWeight};
    padding-top: 0.5rem;
    font-size: ${({ theme }) => theme.fonts.textMessageComponentsCardTitle.fontSize};
    line-height: 23px;
    word-break: break-word;
    width: 11rem;
    white-space: normal;
    color: ${({ theme }) => theme.fonts.neutralsGrey1};
  }
`

export const ThumbnailHeaderImage = styled.div<HeaderThumbnailsProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 14.9rem;
  flex-direction: column;
  position: relative;
  width: 12rem;
  color: #fff;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`
export const CardThumbnailsHove = styled.div`
  cursor: pointer;
  width: 240px;
  height: 380px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const ThumbnailImageHover = styled.div<HeaderThumbnailsProps>`
  width: 240px;
  height: 140px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.15), 0px 35px 25px -20px rgba(34, 34, 34, 0.2);
`

export const DescriptionThumbnails = styled.div`
  width: 240px;
  height: 250px;
  background-color: #000;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  flex-direction: column;
  /* text-align: justify; */
  margin-top: -1px;
  padding: 16px;

  .title {
    font-family: ${({ theme }) => theme.fonts.textMessageComponentsCardTitle.fontFamily};
    font-weight: ${({ theme }) => theme.fonts.textMessageComponentsCardTitle.fontWeight};
    font-size: ${({ theme }) => theme.fonts.textMessageComponentsCardTitle.fontSize};
    line-height: 23px;
    word-break: break-word;
    white-space: normal;
    color: ${({ theme }) => theme.colors.shadeWhite};
    padding-bottom: 8px;
    width: 220px;
  }
  p {
    color: ${({ theme }) => theme.colors.shadeWhite};
    font-weight: ${({ theme }) => theme.fonts.textMessageComponentsBodyRegular.fontWeight};
    font-size: 13px;
    line-height: 18px;
    /* padding-right: 16px; */
    word-break: break-word;
    font-family: 'PT Sans';
    font-family: ${({ theme }) => theme.fonts.textMessageComponentsBodyRegular.fontFamily};
    white-space: normal;
    overflow: auto;
    padding-right: 8px;
    width: 220px;
  }

  p::-webkit-scrollbar {
  width: 10px;
  }

  /* Track */
  p::-webkit-scrollbar-track {
    background: #88888860;
    border-radius: 10px;
  }

  /* Handle */
  p::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  p::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const ContainerThumbnailResposive = styled.div<HeaderThumbnailsProps>`
  display: flex;
  height: 35vh;
  overflow: hidden;
  max-width: 100%;
  cursor: grab;
  @media (max-width: 414px) {
    height: 45vh;
  }
  @media (max-width: 320px) {
    height: 65vh;
  }
  .motionThumbnails {
    display: flex;
  }
`
