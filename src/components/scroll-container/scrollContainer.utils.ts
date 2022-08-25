import React from "react"

interface IUtilsConvertStringLink {
    value: string
}

export function randID() {
    return Math.random()
        .toString(36)
        .substr(2, 9);
};