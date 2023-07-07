// @ts-nocheck
import React, { useEffect, useState, useRef } from 'react'

export const useScroll = (stepMove) => {
    const scrollRef = useRef()
    const [isVisibleLeft, setIsVisibleLeft] = useState(false)
    const [isVisibleRight, setIsVisibleRight] = useState(false)
  
    const scrollToLeft = () => {
      const scrollElement = scrollRef.current
      scrollElement.scrollLeft - stepMove <= 0 ? setIsVisibleLeft(false) : setIsVisibleLeft(true)
      setIsVisibleRight(true)
      scrollElement.scrollLeft = scrollElement.scrollLeft - stepMove
    }
  
    const scrollToRight = () => {
      const scrollElement = scrollRef.current
      scrollElement.scrollLeft + stepMove <= 0 ? setIsVisibleLeft(false) : setIsVisibleLeft(true)
      scrollElement.offsetWidth + scrollElement.scrollLeft + stepMove >= scrollElement.scrollWidth
        ? setIsVisibleRight(false)
        : setIsVisibleRight(true)
      scrollElement.scrollLeft = scrollElement.scrollLeft + stepMove
    }

    const onClickLongPress = (direction) => {
        let stepMoveLocal = 999999;
        if(direction == 'right') {
            const scrollElement = scrollRef.current
            scrollElement.scrollLeft + stepMoveLocal <= 0 ? setIsVisibleLeft(false) : setIsVisibleLeft(true)
            scrollElement.offsetWidth + scrollElement.scrollLeft + stepMoveLocal >= scrollElement.scrollWidth
              ? setIsVisibleRight(false)
              : setIsVisibleRight(true)
            scrollElement.scrollLeft = scrollElement.scrollLeft + stepMoveLocal
        } else {
            const scrollElement = scrollRef.current
            scrollElement.scrollLeft - stepMoveLocal <= 0 ? setIsVisibleLeft(false) : setIsVisibleLeft(true)
            setIsVisibleRight(true)
            scrollElement.scrollLeft = scrollElement.scrollLeft - stepMoveLocal
        }
    }
  
    useEffect(() => {
      const scrollElement = scrollRef.current
      if (scrollElement && scrollElement.clientWidth && scrollElement.clientWidth < scrollElement.scrollWidth) setIsVisibleRight(true)
      else setIsVisibleRight(false)
    }, [])
  
    useEffect(() => {
      const scrollElement = scrollRef.current
      scrollElement.offsetWidth + scrollElement.scrollLeft >= scrollElement.scrollWidth
        ? setIsVisibleRight(false)
        : setIsVisibleRight(true)
      scrollElement.scrollLeft - stepMove <= 0 ? setIsVisibleLeft(false) : setIsVisibleLeft(true)
  
      if (scrollElement && scrollElement.clientWidth && scrollElement.clientWidth < scrollElement.scrollWidth) setIsVisibleRight(true)
      else setIsVisibleRight(false)
    }, [stepMove])
  
    useEffect(() => {
      const updateSize = () => {
        const scrollElement = scrollRef.current
        if (scrollElement.offsetWidth + scrollElement.scrollLeft >= scrollElement.scrollWidth)
          setIsVisibleRight(false)
        else setIsVisibleRight(true)
        scrollElement.scrollLeft - stepMove <= 0 ? setIsVisibleLeft(false) : setIsVisibleLeft(true)
  
        if (scrollElement && scrollElement.clientWidth && scrollElement.clientWidth < scrollElement.scrollWidth) setIsVisibleRight(true)
        else setIsVisibleRight(false)
      }
      window.addEventListener('resize', updateSize)
      return () => window.removeEventListener('resize', updateSize)
    }, [stepMove])
  
    return {
      scrollToLeft,
      scrollToRight,
      onClickLongPress,
      isVisibleLeft,
      isVisibleRight,
      scrollRef
    }
  }