import React from "react"


export interface ILearningSteps {
    title?: string,
    objectCards?: any,
    onSelected?: (n: number) => void,
}
