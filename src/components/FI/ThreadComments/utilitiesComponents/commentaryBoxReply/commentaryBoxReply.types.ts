import { OnClickEditButtonParams } from '@components/commentaryBoxV2/utilitiesComponents/inputEdit/inputEdit.types';
import { IComment, ILike, IUser, LoggedInUser } from '../../threadComments.types';
import { User as MentionUser } from '@components/input-comment/types';


export interface ICommentComentaryBoxReply {
    commentData: IComment,
    answerButtonText: string,
    showMoreButtonText: string,
    showLessButtonText: string,
    editText?: string,
    deleteText?: string,
    isAuthor: boolean;
    isOwnerPost: boolean;
    onClickDelete: (commentId: string) => void,
    onClickEdit: (params: OnClickEditButtonParams) => void,
    getSearchUsers?: (value: string) => MentionUser[],
    limitInput?: number,
    groupUuid?: string,
    saveButtonText?: string;
    cancelButtonText?: string;
    orText?: string;
    limitMessageExceeded?: string;
    placeHolderText?: string;
    onClickLike: (commentId: number) => void;
    onClickUnlike: (commentUuid: string) => void;
    likeButtonText?: string;
    loggedInUser: LoggedInUser;
    likes: ILike[];
    replies: IComment[];
    isGoalOwner?: boolean;
    group_uuid: string;
    onClickPublishButton: () => void,
    publishButtonText: string,
    mainCommentId: number,
    mainCommentUser: IUser
    size?: number,
    showReplysButtonText?: string,
    showMoreReplysButtonText?: string,
    toViewText: string,
    answersText: string
}