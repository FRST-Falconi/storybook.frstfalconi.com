import React from "react"


export interface IConquistaCarrossel {
    objectCards?: any,
    onSelected?: (n: number) => void,
    marginsArrowButton?: number,
    sizeArrowButton?: number,
    horizontalMarginInternScroll?: string
}
