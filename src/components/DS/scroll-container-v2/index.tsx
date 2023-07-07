import React, { useEffect, useState, useRef } from 'react'
import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './scrollContainerStyles'

import { ArrowScrollLeft, ArrowScrollRight } from '@shared/icons'
import { IScrollContainer } from './scrollContainer'

import { WrapperHorizontal, WrapperContent, CardTest } from './scrollContainerStyles'
import { ButtonControll } from './ButtonControl'

import { useScroll } from './useScroll'


export default function ScrollContainer(props) {
  const {
    children,
    isVisibleControlsButtons,
    stepMove,
    horizontalMarginInternScroll,
    verticalMarginInternScroll,
    marginsArrowButton,
    positionArrowButton,
    className,
    styles,
    sizeArrowButton,
    hiddenHorizontalScrollBar,
  } = props

  const {
    scrollToLeft,
    scrollToRight,
    onClickLongPress,
    isVisibleLeft,
    isVisibleRight,
    scrollRef
  } = useScroll(stepMove)

  return (
    <ThemeProvider theme={FRSTTheme}>
      <div style={{ position: 'relative' }} className={className}>
        <WrapperHorizontal
          position={positionArrowButton}
          style={{ ...styles}}
        >
          <WrapperContent
            ref={scrollRef}
            paddingInternHorizontal={horizontalMarginInternScroll}
            paddingInternVertical={verticalMarginInternScroll}
            hiddenHorizontalScrollBar={hiddenHorizontalScrollBar}
          >
            {children}
          </WrapperContent>
          {isVisibleControlsButtons && (
            <>
              <ButtonControll
                onClick={scrollToLeft}
                onClickLongPress={() => onClickLongPress('left')}
                isVisible={isVisibleLeft}
                direction="left"
                ArrowScroll={ArrowScrollLeft}
                sizeButton={sizeArrowButton}
                styles={{marginLeft: marginsArrowButton}}
              />
              <ButtonControll
                onClick={scrollToRight}
                onClickLongPress={() => onClickLongPress('right')}
                isVisible={isVisibleRight}
                direction="right"
                ArrowScroll={ArrowScrollRight}
                sizeButton={sizeArrowButton}
                styles={{marginRight: marginsArrowButton}}
              />
            </>
          )}
        </WrapperHorizontal>
      </div>
    </ThemeProvider>
  );

}
