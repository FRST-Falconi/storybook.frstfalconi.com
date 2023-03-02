import styled, { css } from 'styled-components'

interface HeaderThumbnailsProps {
  img?: any
}

export const Container = styled.div`
  width: 18rem;
  height: 28rem;
  background-color: #000;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  h1 {
    color: #fff;
    margin: 0;
    padding: 1rem;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    word-break: break-word;
  }
  p {
    color: #fff;
    padding: 1rem;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    word-break: break-word;
  }
`

export const HeaderImage = styled.div<HeaderThumbnailsProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 12rem;
  flex-direction: column;
  position: relative;
  width: 100%;
  color: #fff;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 30rem 17rem;
  border-radius: 8px 8px 0px 0px;
`
export const ContainerThumbnails = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: #000;

  h1 {
    margin: 0;
    font-weight: 500;
    padding: 0.5rem 0;
    font-size: 20px;
    line-height: 23px;
    word-break: break-word;
  }
`

export const ThumbnailHeaderImage = styled.div<HeaderThumbnailsProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 15rem;
  flex-direction: column;
  position: relative;
  width: 11rem;
  color: #fff;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 26rem 17rem;
  border-radius: 8px;
`
