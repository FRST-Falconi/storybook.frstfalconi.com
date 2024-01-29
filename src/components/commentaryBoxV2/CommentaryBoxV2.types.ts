import { onClickEditButtonParams } from "./utilitiesComponents/inputEdit/inputEdit.types";
export interface ICommentaryBoxV2 {
    userId?: string;
    userName: string;
    userOffice: string;
    userCompany: string;
    imgProfile?: string;

    commentUuid: string,
    commentId: string;
    commentText: string;
    commentTextWithMention?: string;
    howLongAgo: string;
    likesCount?: number;
    limitInput?: number;

    answerButtonText?: string;
    likeButtonText?: string;
    editText?: string;
    deleteText?: string;
    showMoreText: string;
    showLessText: string;
    visitProfileText?: string;
    relationToPhaseText?: string;
    saveButtonText?: string;
    cancelButtonText?: string;
    orText?: string;
    limitMessageExceeded?: string;


    actionUserInfo?: () => void;
    actionLike?: (wantToLike: boolean) => void;
    actionAnswer?: () => void;
    actionDeleteComment?: (commentId?: string) => void
    actionEditComment?: (props: onClickEditButtonParams) => void

    styles?: any;
    isAuthor?: boolean;
    isOwnerPost?: boolean;
    idTextComment?: string;
    hasActionToClickOnAvatar: boolean;
    showOptions?: boolean;
    showLikeButton?: boolean;
    itsLiked: boolean;
    isMainComment?: boolean
    groupUuid?: string,

}
