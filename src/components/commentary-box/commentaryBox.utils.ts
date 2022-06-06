import React from "react"

interface IUtilsConvertStringLink {
    value: string
}

export function buildStringWithLinkHTML({value}: IUtilsConvertStringLink) {
    let text = value
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=   ~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
    return text = text.replace(urlRegex, function(url) {
        return `<a href="${url}" target="_blank">${url}</a>`
    })
}

export function randID() {
    return Math.random()
        .toString(36)
        .substr(2, 9);
};