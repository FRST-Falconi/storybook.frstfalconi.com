import React from "react"

interface ICommentaryBox{
    name: string
    className: string
    styles: any
    position: string
    value: string
    date: string
    detectLinks?: boolean
    isMe: boolean
    isPrivate: boolean
    like: () => void
    answer: () => void
    deleteComment: () => void
    editComment: () => void
    makePrivate: () => void
    updateValue: (e:string) => void
    onChange: any
    idTextComment?: string
    wasEdited: boolean
}
