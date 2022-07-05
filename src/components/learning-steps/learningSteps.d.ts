import React from "react"


export interface ILearningSteps {
    title?: string,
    objectCards?: any,
    onSelected?: (n: number) => void,
    marginLeftTitle?: string,
    marginRightClear?: string,
    marginsArrowButton?: number,
    sizeArrowButton?: number,
    widthCard?: string,
}
