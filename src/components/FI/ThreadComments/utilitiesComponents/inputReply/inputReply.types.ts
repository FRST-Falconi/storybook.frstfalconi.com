import {User as MentionUsers} from '@components/input-comment/types'

export interface IInputReply {    placeHolderText: string,
    publishButtonText:string,
    onClickPublishButton: () => void,
    limitInput:number,
    styles:any,
    idInput:string,
    replyFor:string,
    imgProfile?:string,
    getSearchUsers?: (value:string) =>  MentionUsers[]
}