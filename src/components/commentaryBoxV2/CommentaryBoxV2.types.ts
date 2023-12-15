export interface ICommentaryBoxV2{
    user : User ;
    comment: Comment;
    styles?: any ;
    detectLinks?: boolean ;
    isAuthor?: boolean ;
    actionAnswer?: () => void ;
    answerButtonText?: string ;
    likeButtonText?:string ;
    idTextComment?: string ;
    onClickUserInfo?: () => void ;
    actionLike?: () => void;
    hasActionToClickOnAvatar: boolean;
}

export interface User{
    id:string ;
    name:string ;
    office:string ;
    company:string ;
    imgProfile?:string ;
}

interface Comment {
    text: string ;
    date: string ; 
    likesCount?: number ;
}