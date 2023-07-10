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
    marginsArrowButtonHorizontal,
    marginsArrowButtonVertical,
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
            <div
            style={{
              width: 'fit-content',
              display: 'flex',
              flexDirection: 'row',
              whiteSpace: 'pre-wrap',
              userSelect:'none'
            }}>
              {children}
            </div>
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
                styles={{
                  marginLeft: marginsArrowButtonHorizontal, 
                  marginTop: positionArrowButton == 'top' ? marginsArrowButtonVertical : '0px',
                  marginBottom: positionArrowButton == 'base' ? marginsArrowButtonVertical : '0px',
                }}
              />
              <ButtonControll
                onClick={scrollToRight}
                onClickLongPress={() => onClickLongPress('right')}
                isVisible={isVisibleRight}
                direction="right"
                ArrowScroll={ArrowScrollRight}
                sizeButton={sizeArrowButton}
                styles={{
                  marginRight: marginsArrowButtonHorizontal,
                  marginTop: positionArrowButton == 'top' ? marginsArrowButtonVertical : '0px',
                  marginBottom: positionArrowButton == 'base' ? marginsArrowButtonVertical : '0px',
                }}
              />
            </>
          )}
        </WrapperHorizontal>
      </div>
    </ThemeProvider>
  );

}
