import { IUser } from '../../threadComments.types';

export interface IInputReply {    placeHolderText: string,
    publishButtonText:string,
    onClickPublishButton: (props:onClickPublishButtonParams) => void,
    limitInput:number,
    styles:any,
    idInput:string,
    replyMentionedUser: IUser,
    group_uuid: string,
    imgProfile?:string,
    getSearchUsers?: (value:string) =>  any,
    parentId?:number,
    handleHiddenInput: (replyId?:string)=> void;
    limitMessageExceeded?: string;
}

interface onClickPublishButtonParams {
    comment: string,
    contentMention: string ,
    mentions: Array<string> ,
    parentId?: number ,
    
}
