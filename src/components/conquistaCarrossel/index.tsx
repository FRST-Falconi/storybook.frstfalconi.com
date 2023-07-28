import React, { useState, useEffect } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { IConquistaCarrossel } from './conquistaCarrossel'

import ScrollContainer from '@components/scroll-container'
import CardResultConquista from '@components/cards/cardResultConquista'

export default function ConquistaCarrossel({
  onSelected,
  objectCards,
  marginsArrowButton,
  sizeArrowButton,
  horizontalMarginInternScroll,
  positionArrowButton,
  marginTopArrrowButton,
  textMoreDetails,
  onClickAvatar,
  onClickName
}: IConquistaCarrossel) {
  const [itemSelected, setItemSelected] = useState(-1)

  const onItemSelect = (n: number) => {
    setItemSelected(n)
    onSelected(n)
  }
  const [btnViewMore, setBtnViewMore] = useState('')

  useEffect(() => {
    setBtnViewMore(textMoreDetails)
  }, [textMoreDetails])

  function renderCard(item, index) {
    return (
      <CardResultConquista
        key={index}
        textMoreDetails={btnViewMore ? btnViewMore : 'Mais detalhes'}
        description={item.description}
        problemId={item.problemId}
        statusCard={item.statusCard}
        userArea={item.userArea}
        userName={item.userName}
        userAvatar={item.userAvatar}
        onClick={() => onSelected(item.problemId)}
        style={{ marginRight: '24px', whiteSpace: 'pre-wrap' }}
        onClickAvatar={onClickAvatar}
        onClickName={onClickName}
      />
    )
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <ScrollContainer
        stepMove={380}
        isVisibleControlsButtons
        sizeArrowButton={sizeArrowButton}
        marginsArrowButton={marginsArrowButton}
        horizontalMarginInternScroll={horizontalMarginInternScroll}
        positionArrowButton={positionArrowButton ? positionArrowButton : ''}
        marginTopArrrowButton={marginTopArrrowButton ? marginTopArrrowButton : '20px'}
      >
        {objectCards.map(renderCard)}
      </ScrollContainer>
    </ThemeProvider>
  )
}
