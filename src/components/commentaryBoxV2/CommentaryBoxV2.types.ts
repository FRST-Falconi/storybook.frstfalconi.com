import { IOptionItem } from "@components/menu-more/menuMore";

export interface ICommentaryBoxV2{
    userId?:string ;
    userName:string ;
    userOffice:string ;
    userCompany:string ;
    imgProfile?:string ;


    commentId:string;
    commentText: string ;
    commentTextWithMention?: string;
    howLongAgo: string ; 
    likesCount?: number ;

    answerButtonText?: string ;
    likeButtonText?:string ;
    editText?: string ;
    deleteText?: string ;
    showMoreText: string;
    showLessText: string ;
    visitProfileText?: string ;
    relationToPhaseText?: string;


    onClickUserInfo?: () => void ;
    actionLike?: (wantToLike:boolean) => void;
    actionAnswer?: () => void ;
    actionDeleteComment?: () => void
    actionEditComment?: () => void

    styles?: any ;
    isAuthor?: boolean ;
    isOwnerPost?: boolean;
    idTextComment?: string ;
    hasActionToClickOnAvatar: boolean;
    showOptions?: boolean ;
    showLikeButton?: boolean;
    itsLiked: boolean ;
    isMainComment?: boolean
}
