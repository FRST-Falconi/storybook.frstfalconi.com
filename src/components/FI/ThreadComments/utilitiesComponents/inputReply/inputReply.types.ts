import {User as MentionUsers} from '@components/input-comment/types'

export interface IInputReply {    placeHolderText: string,
    publishButtonText:string,
    onClickPublishButton: (props:onClickPublishButtonParams) => void,
    limitInput:number,
    styles:any,
    idInput:string,
    replyFor:string,
    imgProfile?:string,
    getSearchUsers?: (value:string) =>  any,
    parentId?:number
}

interface onClickPublishButtonParams {
    content: string,
    contentMention: string ,
    mentions: Array<string> ,
    parentId?: number ;
}