import React from "react"


export interface ILearningSteps {
    title?: string,
    src?: any,
    alt?: string,
    className?: string,
    onSelected?: (n: number) => void,
}
