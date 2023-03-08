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
  margin: 1rem 1.5rem;
  position: relative;
  transition: transform 1s;
  border-radius: 8px;

  h1 {
    font-family: 'Work Sans';
    font-weight: 500;
    padding-top: 0.5rem;
    font-size: 20px;
    line-height: 23px;
    word-break: break-word;
    width: 11rem;
    white-space: normal;
    color: ${({ theme }) => theme.colors.neutralsGrey1};
  }

  /* &:hover {
    transform: scale(1.05);
    transition: transform 1s ease;
    margin-right: 2rem;
    margin-left: -5rem;
    z-index: 99999 !important;
    margin-top: -2rem;

    :first-child {
      margin-left: 2rem;
      z-index: 99999 !important;
    }

    .imageThumbnails {
      width: 17.7rem;
      background-size: 17.7rem 24rem;
      background-position: 0rem -6rem;
      z-index: 99999 !important;
    }

    .containerInformationThumbnails {
      display: block;
      z-index: 99999 !important;
    }

    @media (max-width: 834px) {
      transform: scale(1);
      margin-right: 1.5rem;
      margin-left: 1.5rem;
      margin-top: 5rem;

      :first-child {
        margin-right: 1.5rem;
        margin-left: 1.5rem;
        margin-top: 5rem;
      }

      .imageThumbnails {
        width: 12rem;
        background-size: 13rem 17rem;
        background-position: 0rem 0rem;
      }
      .containerInformationThumbnails {
        display: none;
      }
      .scrollThumbnail {
        background: red;
      }
    }
  } */
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
  width: 17rem;
  height: 27.3rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const ThumbnailImageHover = styled.div<HeaderThumbnailsProps>`
  width: 17rem;
  height: 14.9rem;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px 8px 0px 0px;
`

export const DescriptionThumbnails = styled.div`
  width: 17.8rem;
  height: 15.1rem;
  background-color: #000;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  flex-direction: column;
  margin-top: -1px;
  box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.15), 0px 35px 25px -20px rgba(34, 34, 34, 0.2);
  padding: 8px 16px 16px 16px;

  h2 {
    font-family: 'Work Sans';
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    word-break: break-word;
    white-space: normal;
    color: ${({ theme }) => theme.colors.shadeWhite};
    padding-bottom: 8px;
  }
  p {
    color: ${({ theme }) => theme.colors.shadeWhite};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    padding-right: 16px;
    word-break: break-word;
    font-family: 'PT Sans';
    white-space: normal;
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
