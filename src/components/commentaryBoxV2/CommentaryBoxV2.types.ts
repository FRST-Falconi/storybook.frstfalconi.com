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
    actionEdit?: ()=>void ;
    actionDelete?: ()=>void ;
    editText?: string ;
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

interface ElementsTexts {
    answerButtonText?: string ;
    likeButtonText?:string ;
    editText?: string ;
    deleteText?: string ;
}

interface ElementsActions {
    onClickUserInfo?: () => void ;
    actionLike?: () => void;
    actionEdit?: ()=>void ;
    actionDelete?: ()=>void ;
    actionAnswer?: () => void ;

}