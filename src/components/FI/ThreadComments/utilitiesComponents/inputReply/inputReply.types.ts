import {User as MentionUsersList} from '@components/input-comment/types'

export interface IInputReply {
    placeHolderText: string,
    publishButtonText:string,
    onClickPublishButton: () => void,
    limitInput:number,
    styles:any,
    idInput:string,
    replyFor:string,
    imgProfile?:string,
    mentionUsers:MentionUsersList
}
