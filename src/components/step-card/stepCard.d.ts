import React from "react"

export interface IStepCard {
    title?: string,
    onClick: () => any,
    numberPeople?: number,
    className?: string,
    textButtonMore?: string,
    active?: boolean,
    src?: any,
    width?: string,
}
