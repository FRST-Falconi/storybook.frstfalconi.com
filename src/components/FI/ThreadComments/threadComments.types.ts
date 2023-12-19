export interface IComment {
    userId:string;
    id: string,
    username: string,
    office:string,
    text:string,
    company:string,
    howLongAgo: string,
    imgProfile?:string,
    listReplyComments?:IComment[]
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
