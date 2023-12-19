export interface IComment {
    id: string,
    username: string,
    office:string,
    company: string,
    text:string,
    howLongAgo: string,
    imgProfile?:string,
}

export interface ICommentComentaryBoxReply {
    commentData:IComment,
    answerButtonText: string,
    showMoreButtonText: string,
    showLessButtonText: string,
    onClickAnswerButton: (idReply?:string) => void,
}