import { IOptionItem } from "@components/menu-more/menuMore";

export interface ICommentaryBoxV2{
    user : User ;
    comment: Comment;
    texts: Texts;
    actions : Actions;
    options?: IOptionItem[] ;
    styles?: any ;
    detectLinks?: boolean ;
    isAuthor?: boolean ;
    idTextComment?: string ;
    editText?: string ;
    hasActionToClickOnAvatar: boolean;
    showOptions?: boolean ;
    itsLiked: boolean ;
}

export interface User{
    id:string ;
    name:string ;
    office:string ;
    company:string ;
    imgProfile?:string ;
}

interface Comment {
    id:string;
    text: string ;
    date: string ; 
    likesCount?: number ;
}

interface Texts {
    answerButtonText?: string ;
    likeButtonText?:string ;
    editText?: string ;
    deleteText?: string ;
    showMoreText: string;
    showLessText: string ;
}

interface Actions {
    onClickUserInfo?: () => void ;
    actionLike?: (wantToLike:boolean) => void;
    actionEdit?: ()=>void ;
    actionDelete?: ()=>void ;
    actionAnswer?: () => void ;
}

