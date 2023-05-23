import React from "react"

export function recalcRemain(string, limit) {
    if(string)
        return limit - string.length;
    else
    return limit
};


// function countEmojis(str) {
//     let match;
//     let count = 0;
//     let length = 0;
//     const regex = emojiRegex();
//     while (match = regex.exec(str)) {
//         const emoji = match[0];
//         count++;
//         length += Array.from(emoji).length;
//     }
//     return {count, length};
// }