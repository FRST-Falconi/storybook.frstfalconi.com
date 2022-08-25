import React from "react"

export interface ICheckbox {
    label?: string,
    isChecked?: boolean,
    alt?: string,
    handleCheck: () => void,
    className?: string,
}
