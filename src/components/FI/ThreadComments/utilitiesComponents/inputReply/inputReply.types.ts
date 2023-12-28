import {User as MentionUser} from '@components/input-comment/types'

export interface IInputReply {    placeHolderText: string,
    publishButtonText:string,
    onClickPublishButton: (props:onClickPublishButtonParams) => void,
    limitInput:number,
    styles:any,
    idInput:string,
    replyMentionedUser: MentionUser,
    imgProfile?:string,
    getSearchUsers?: (value:string) =>  any,
    parentId?:number,
    handleHiddenInput: (replyId?:string)=> void;
}

interface onClickPublishButtonParams {
    comment: string,
    contentMention: string ,
    mentions: Array<string> ,
    parentId?: number ,
    
}