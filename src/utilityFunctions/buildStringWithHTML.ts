
export function buildStringWithLinkHTML(value: string) {
    let text = value
    const urlRegex = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/ig
    return text = text?.replace(urlRegex, function (url) {
        return `<a href="${url}" target="_blank" style="color: #0645AD; font-family: Work Sans; font-weight: 400; line-height: 140%;
        font-size: 16px; font-style: normal; text-decoration: underline">${url}</a>`
    })
}