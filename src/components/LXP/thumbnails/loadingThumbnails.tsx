import React from 'react'
import * as Styles from './thumbnailsStyle'
import HeaderVectorElipses from './headerVectorElipses'
export const LoadingThumbnails = ({ provided }) => {
  return (
    <Styles.CardDragAndDrop className="loading">
      <HeaderVectorElipses provided={provided} direction='row'/>
      <Styles.LoadingContainer className="loading_img"></Styles.LoadingContainer>
      <Styles.LoadingContainer className="loading_text"></Styles.LoadingContainer>
      <Styles.LoadingContainer className="loading_text loading_button"></Styles.LoadingContainer>
    </Styles.CardDragAndDrop>
  )
}
