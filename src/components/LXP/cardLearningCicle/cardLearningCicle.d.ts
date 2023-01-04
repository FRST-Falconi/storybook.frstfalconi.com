import React from "react"

export interface ICardLearningCicle {   
    style?: React.CSSProperties,
    handleClick?: () => void,
}

export interface ITranlateCardLearningCicle extends ICardLearningCicle {
    titleStep1?: string
    titleStep2?: string 
    txtStep2?: string
    titleStep3?: string
    txtStep3?: string
    titleStep4?: string
    txtStep4?: string
}
