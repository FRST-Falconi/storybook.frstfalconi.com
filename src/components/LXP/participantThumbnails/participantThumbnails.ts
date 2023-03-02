import styled, { css } from 'styled-components'

interface HeaderThumbnailsProps {
  img?: any
}

export const Container = styled.div`
  width: 30vw;
  height: 90vh;
  background-color: #ffff;
  border-radius: 8px;
`

export const HeaderImage = styled.div<HeaderThumbnailsProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 17rem;
  flex-direction: column;
  position: relative;
  width: 100%;
  color: #fff;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 35rem 17rem;
  border-radius: 0px 8px 0px 0px;
`

export const ContainerDescriptionVideo = styled.div`
  width: 30vw;
  height: 51.2vh;
  background-color: #000;
  border-radius: 0px 0px 8px 8px;

  h1 {
    color: #fff;
    margin: 0;
    padding: 1rem;
  }
`
export const ButtonsVideo = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem;
  flex-direction: row;
  justify-content: flex-end;
  a {
    padding: 0.5rem;
  }
`
