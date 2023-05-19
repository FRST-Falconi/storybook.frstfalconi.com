import React from "react"

export function randID() {
    return Math.random()
        .toString(36)
        .substr(2, 9);
};