import { OnClickEditButtonParams } from '@components/commentaryBoxV2/utilitiesComponents/inputEdit/inputEdit.types';
import { IComment } from '../../threadComments.types';
import { User as MentionUser } from '@components/input-comment/types';


export interface ICommentComentaryBoxReply {
    commentData: IComment,
    answerButtonText: string,
    showMoreButtonText: string,
    showLessButtonText: string,
    editText?: string,
    deleteText?: string,
    onClickAnswerButton: (idReply?: string) => void,
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
    likesCount?: number;
    onClickLike: (commentId: number) => void;
    onClickUnlike: (commentId: number) => void;
    itsLiked: boolean;
    likeButtonText?: string;
}