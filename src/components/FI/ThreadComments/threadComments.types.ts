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
    onClickShowReplys: ()  => void,
    showReplysButtonText:string,
    publishButtonText:string,
    limitInputs:number,
    showMoreButtonText: string,
    showLessButtonText: string,
    loggedUserProfileImg?: string
}

export interface IUser {
    uuid: string,
    name: string,
    role_name: string,
    company_name: string,
    avatar?: string,
}