
export function buildStringWithLinkHTML(value:string) {
    let text = value
    const urlRegex = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/ig
    return text = text.replace(urlRegex, function(url) {
        return `<a href="${url}" target="_blank" style="color: #00f; text-decoration: underline">${url}</a>`
    })
}