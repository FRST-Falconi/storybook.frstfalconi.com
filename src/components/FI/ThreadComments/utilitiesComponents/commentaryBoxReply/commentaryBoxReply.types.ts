import { OnClickEditButtonParams } from '@components/commentaryBoxV2/utilitiesComponents/inputEdit/inputEdit.types';
import { IComment, ILike, LoggedInUser } from '../../threadComments.types';
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
    onClickLike: (commentId: number) => void;
    onClickUnlike: (commentUuid: string) => void;
    likeButtonText?: string;
    loggedInUser: LoggedInUser;
    likes: ILike[];
}