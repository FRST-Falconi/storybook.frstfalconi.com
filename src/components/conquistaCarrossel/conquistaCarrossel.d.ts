import React from "react"


export interface IConquistaCarrossel {
    objectCards?: any,
    onSelected?: (n: number) => void,
    marginLeftTitle?: string,
    marginRightClear?: string,
    marginsArrowButton?: number,
    sizeArrowButton?: number,
    widthCard?: string,
    horizontalMarginInternScroll?: string,
}
