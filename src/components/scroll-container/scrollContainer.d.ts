import React from "react"

export interface IScrollContainer {
    children?: any,
    type?: string,
    stepMove?: number,
    isVisibleControlsButtons?: boolean,
    handleClick?:() => void, 
    className?: string,
    styles?: any,
    sizeArrowButton?: number,
    marginsArrowButton?: number,
    horizontalMarginInternScroll?: string,
    positionArrowButton?: string,
}
