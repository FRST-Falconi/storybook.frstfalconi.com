import { User as MentionUser } from '@components/input-comment/types';
import { OnClickEditButtonParams } from "./utilitiesComponents/inputEdit/inputEdit.types";
import { ILike, LoggedInUser } from '@components/FI/ThreadComments/threadComments.types';
export interface ICommentaryBoxV2 {
    userId?: string;
    userName: string;
    userOffice: string;
    userCompany: string;
    imgProfile?: string;

    commentUuid: string,
    commentId: number;
    commentText: string;
    commentTextWithMention?: string;
    howLongAgo: string;
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
    placeHolderText?: string;


    onClickUserInfo?: () => void;
    actionLike?: (commentId: number) => void;
    actionUnlike?: (commentUuid: string) => void;
    actionAnswer?: () => void;
    actionDeleteComment?: (commentId?: string) => void
    actionEditComment?: (props: OnClickEditButtonParams) => void
    getSearchUsers?: (value: string) => MentionUser[],

    styles?: any;
    isAuthor?: boolean;
    isOwnerPost?: boolean;
    idTextComment?: string;
    hasActionToClickOnAvatar: boolean;
    showOptions?: boolean;
    showLikeButton?: boolean;
    likes: ILike[];
    isMainComment?: boolean
    groupUuid?: string,
    loggedInUser: LoggedInUser,

}
