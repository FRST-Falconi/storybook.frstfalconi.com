import React from "react"

interface ICommentaryBox{
    name: string
    className: string
    styles: any
    position: string
    value: string
    date: string
    detectLinks?: boolean
    isMe?: boolean
    isAuthor?: boolean
    isPrivate?: boolean
    like: () => void
    hasAnswer?: boolean
    answer?: () => void
    deleteComment?: () => void
    editComment?: () => void
    makePrivate?: () => void
    updateValue?: (e:string) => void
    onChange: any
    idTextComment?: string
    wasEdited?: boolean
    hasDropdown?: false
}
