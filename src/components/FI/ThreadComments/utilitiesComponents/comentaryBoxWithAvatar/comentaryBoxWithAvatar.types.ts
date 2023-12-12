export interface IComment {
    id: string,
    username: string,
    office:string,
    text:string,
    howlongAgo: string,
    imgProfile?:string,
}

export interface ICommentComentaryBox {
    commentData:IComment,
    answerButtonText: string,
    onClickAnswerButton: (idReply?:string) => void,
}
