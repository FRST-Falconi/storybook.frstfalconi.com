export interface ICommentaryBoxV2{
    name: string
    imgProfile: string,
    styles: any
    value: string
    date: string
    detectLinks?: boolean
    isAuthor?: boolean
    isLiked?: boolean
    totalLikes?: number
    hasAnswer?: boolean
    actionLike?: () => void
    actionAnswer?: () => void
    actionDeleteComment?: () => void
    actionEditComment?: () => void
    actionUpdateValue?: (e:string) => void
    idTextComment?: string
    wasEdited?: boolean
    hasDropdown?: boolean
    textSaveButton ?: string
    textCancelButton ?: string
    textEdited?: string
    textLiked?: string
    textUnliked?: string
    textAnswer?: string
    textMakePublic?: string
    textEditComment?: string
    textDeleteComment?: string
    showStatusLike?: boolean
    onClickUserInfo?: () => void
}
