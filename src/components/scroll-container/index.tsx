import React, { useEffect, useState } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './scrollContainerStyles'

import { ArrowScrollLeft, ArrowScrollRight } from '@shared/icons'
import { IScrollContainer } from './scrollContainer'
import { randID } from './scrollContainer.utils'

import { WrapperHorizontal, WrapperContent, ButtonControll, CardTest } from './scrollContainerStyles'

export default function ScrollContainer({
  children,
  type,
  isVisibleControlsButtons,
  positionArrowButton,
  marginTopArrrowButton,
  stepMove,
  className,
  styles,
  sizeArrowButton,
  marginsArrowButton,
  horizontalMarginInternScroll,
  refreshResize,
  widthProtectClick,
  hiddenHorizontalScrollBar,
  colorBackground,
  paddingLeft
}: IScrollContainer) {
  const [actionAreaButtonLeft, setActionAreaButtonLeft] = useState(false)
  const [actionAreaButtonRight, setActionAreaButtonRight] = useState(false)

  const [iDScroll, setIDScroll] = useState(`iDScroll-${randID()}`)

  const [isVisibleArrowButtonLeft, setIsVisibleArrowButtonLeft] = useState(false)
  const [isVisibleArrowButtonRight, setIsVisibleArrowButtonRight] = useState(false)

  const scrollToLeft = () => {
    var objDiv = document.getElementById(iDScroll)
    if (objDiv !== null) {
      objDiv.scrollLeft - stepMove <= 0 ? setIsVisibleArrowButtonLeft(false) : setIsVisibleArrowButtonLeft(true)
      setIsVisibleArrowButtonRight(true)
      objDiv.scrollLeft = objDiv.scrollLeft - stepMove
    }
  }

  const scrollToRight = () => {
    var objDiv = document.getElementById(iDScroll)
    if (objDiv !== null) {
      objDiv.scrollLeft + stepMove <= 0 ? setIsVisibleArrowButtonLeft(false) : setIsVisibleArrowButtonLeft(true)
      objDiv.offsetWidth + objDiv.scrollLeft + stepMove >= objDiv.scrollWidth
        ? setIsVisibleArrowButtonRight(false)
        : setIsVisibleArrowButtonRight(true)
      objDiv.scrollLeft = objDiv.scrollLeft + stepMove
    }
  }

  useEffect(() => {
    var objDiv = document.getElementById(iDScroll)
    if (objDiv && objDiv.clientWidth && objDiv.clientWidth < objDiv.scrollWidth) setIsVisibleArrowButtonRight(true)
    else setIsVisibleArrowButtonRight(false)
  }, [])

  useEffect(() => {
    updateSize()
  }, [refreshResize])

  const updateSize = () => {
    var objDiv = document.getElementById(iDScroll)
    if (objDiv !== null) {
      objDiv.offsetWidth + objDiv.scrollLeft >= objDiv.scrollWidth
        ? setIsVisibleArrowButtonRight(false)
        : setIsVisibleArrowButtonRight(true)
      objDiv.scrollLeft - stepMove <= 0 ? setIsVisibleArrowButtonLeft(false) : setIsVisibleArrowButtonLeft(true)

      if (objDiv && objDiv.clientWidth && objDiv.clientWidth < objDiv.scrollWidth) setIsVisibleArrowButtonRight(true)
      else setIsVisibleArrowButtonRight(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <ThemeProvider theme={FRSTTheme}>
      <div style={{ ...styles, position: 'relative' }} className={className}>
        <WrapperHorizontal>
          {isVisibleControlsButtons && positionArrowButton != 'bottom' && (
            <ButtonArrow
              colorBackground={colorBackground}
              isLeftButton={true}
              onClick={scrollToLeft}
              widthProtectClick={widthProtectClick}
              onActionArea={setActionAreaButtonLeft}
              actionArea={actionAreaButtonLeft}
              sizeButton={sizeArrowButton}
              isVisible={isVisibleArrowButtonLeft}
              margin={marginsArrowButton ? (marginsArrowButton + 50) * -1 + 'px' : '-138px'}
              ArrowScroll={ArrowScrollLeft}
              marginTopArrrowButton={marginTopArrrowButton}
            />
          )}
          <WrapperContent
            id={iDScroll}
            paddingIntern={horizontalMarginInternScroll ? horizontalMarginInternScroll : '150px'}
            hiddenHorizontalScrollBar={hiddenHorizontalScrollBar}
          >
            {children}
          </WrapperContent>
          {isVisibleControlsButtons && positionArrowButton != 'bottom' && (
            <ButtonArrow
              colorBackground={colorBackground}
              isLeftButton={false}
              onClick={scrollToRight}
              widthProtectClick={widthProtectClick}
              onActionArea={setActionAreaButtonRight}
              actionArea={actionAreaButtonRight}
              sizeButton={sizeArrowButton}
              isVisible={isVisibleArrowButtonRight}
              margin={marginsArrowButton ? (marginsArrowButton + 50) * -1 + 'px' : '-138px'}
              ArrowScroll={ArrowScrollRight}
              marginTopArrrowButton={marginTopArrrowButton}
            />
          )}
        </WrapperHorizontal>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          {isVisibleControlsButtons && positionArrowButton == 'bottom' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: marginTopArrrowButton ? marginTopArrrowButton : '5px'
              }}
            >
              <ButtonArrow
                isLeftButton={true}
                onClick={scrollToLeft}
                onActionArea={setActionAreaButtonLeft}
                actionArea={actionAreaButtonLeft}
                sizeButton={sizeArrowButton}
                isVisible={isVisibleArrowButtonLeft}
                margin={marginsArrowButton ? marginsArrowButton + 'px' : '10px'}
                ArrowScroll={ArrowScrollLeft}
                widthProtectClick={widthProtectClick}
                marginTopArrrowButton={marginTopArrrowButton}
              />
              <ButtonArrow
                isLeftButton={false}
                colorBackground={colorBackground}
                onClick={scrollToRight}
                onActionArea={setActionAreaButtonRight}
                actionArea={actionAreaButtonRight}
                sizeButton={sizeArrowButton}
                isVisible={isVisibleArrowButtonRight}
                margin={marginsArrowButton ? marginsArrowButton + 'px' : '10px'}
                ArrowScroll={ArrowScrollRight}
                widthProtectClick={widthProtectClick}
                marginTopArrrowButton={marginTopArrrowButton}
              />
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  )
}

function ButtonArrow({
  isLeftButton,
  onClick,
  onActionArea,
  actionArea,
  sizeButton = 40,
  isVisible,
  margin,
  ArrowScroll,
  marginTopArrrowButton,
  widthProtectClick,
  colorBackground = 'transparent'
}) {
  return (
    <div
      style={{
        height: '100%',
        width: widthProtectClick ? widthProtectClick : 'fit-content',
        zIndex: 10,
        position: 'absolute',
        left: isLeftButton ? 0 : 'none',
        right: !isLeftButton ? 0 : 'none',
        display: 'flex',
        bottom: 0,
        top: 0,
        justifyContent: isLeftButton ? 'flex-start' : 'flex-end',
        alignItems: 'center',
        visibility: isVisible ? 'visible' : 'hidden',
        background: !isLeftButton
          ? `linear-gradient(270deg, ${colorBackground} 15%, rgba(243, 243, 243, 0.00) 100%)`
          : `linear-gradient(90deg, ${colorBackground} 15%, rgba(235, 235, 235, 0.00) 100%)`
      }}
    >
      <ButtonControll
        isLeftButton={isLeftButton}
        onClick={onClick}
        onMouseOver={() => onActionArea(true)}
        onMouseOut={() => onActionArea(false)}
        sizeButton={sizeButton}
        visibility={isVisible ? 'visible' : 'hidden'}
        marginsArrowButton={margin}
        marginTopArrrowButton={marginTopArrrowButton}
      >
        <ArrowScroll
          fill={actionArea ? '#fff' : '#000'}
          height={sizeButton ? (sizeButton / 2.3).toFixed(0).toString() : '34'}
          width={sizeButton ? (sizeButton / 4.3).toFixed(0).toString() : '18'}
        />
      </ButtonControll>
    </div>
  )
}
