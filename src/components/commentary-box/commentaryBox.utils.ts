import React from "react"

interface IUtilsConvertStringLink {
    value: string
}

export function buildStringWithLinkHTML({ value }: IUtilsConvertStringLink) {
    let text = value
    var urlRegex = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/ig
    return text = text?.replace(urlRegex, function (url) {
        return `<a href="${url}" target="_blank" style="color: #00f; text-decoration: underline">${url}</a>`
    })
}

export function randID() {
    return Math.random()
        .toString(36)
        .substr(2, 9);
};

export function buildShortName(name) {
    const nome = name.replace(/\s+/gi, ' ').trim();

    var array_nome = nome.split(' ');

    if (array_nome.length > 2) {
        return `${array_nome[0]} ${array_nome[array_nome.length - 1]}`;
    } else {
        return name;
    }
}