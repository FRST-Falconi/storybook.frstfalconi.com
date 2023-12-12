export interface IComment {
    id: string,
    username: string,
    office:string,
    text:string,
    howlongAgo: string,
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
    limitInputs:number
}
