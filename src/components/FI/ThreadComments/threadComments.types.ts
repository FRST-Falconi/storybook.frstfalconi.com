import { User as MentionUser } from '@components/input-comment/types';

export interface IComment {
    id: string,
    user: IUser,
    text: string,
    mentionText?:string, 
    howLongAgo: string,
}

export interface IThreadComments {
    mainComment:IComment,
    listReplyComments:IComment[],
    placeHolderText: string,
    answerButtonText: string,
    onClickPublishButton: () => void,
    showReplysButtonText:string,
    publishButtonText:string,
    editText: string,
    deleteText: string,
    limitInputs:number,
    showMoreButtonText: string,
    showLessButtonText: string,
    group_uuid: string,
    loggedUserProfileImg?: string,
    styles: any,
    getSearchUsers?: (value:string) =>  MentionUser[],
    relationToPhaseText?: string,
    size?:number
    showMoreReplysButtonText: string
}

export interface IUser {
    id: number,
    uuid: string,
    name: string,
    role_name: string,
    company_name: string,
    avatar?: string,
}
