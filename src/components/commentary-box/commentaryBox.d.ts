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
    actionLike?: () => void
    isLiked?: boolean
    totalLikes?: number
    hasAnswer?: boolean
    actionAnswer?: () => void
    actionDeleteComment?: () => void
    actionEditComment?: () => void
    actionMakePrivate?: () => void
    actionUpdateValue?: (e:string) => void
    onChange: any
    idTextComment?: string
    wasEdited?: boolean
    hasDropdown?: boolean
    textSaveButton ?: string
    textSaveButtonMobile ?: string
    textCancelButton ?: string
    textYou?: string
    textPrivateComment?: string
    textEdited?: string
    textLiked?: string
    textUnliked?: string
    textAnswer?: string
    textMakePrivate?: string
    textMakePublic?: string
    textEditComment?: string
    textDeleteComment?: string
    isPrivateMe?: boolean
    isPrivateAuthor?: boolean

    onClickUserInfo?: () => void
}
