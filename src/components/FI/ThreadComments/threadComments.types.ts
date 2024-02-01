import { OnClickEditButtonParams } from '@components/commentaryBoxV2/utilitiesComponents/inputEdit/inputEdit.types';
import { User as MentionUser } from '@components/input-comment/types';

export interface IComment {
    id: number,
    uuid: string,
    user: IUser,
    text: string,
    mentionText?: string,
    howLongAgo: string,
    likes?: ILike[],
}

export interface ILike {
    id: string,
    user_uuid: string,
}

export interface IThreadComments {
    mainComment: IComment,
    listReplyComments: IComment[],
    placeHolderText: string,
    answerButtonText: string,
    onClickPublishButton: () => void,
    onClickDelete: (commentId: string) => void,
    onClickEdit: (params: OnClickEditButtonParams) => void,
    onClickLike: (commentId: number) => void,
    onClickUnlike: (commentId: number) => void,
    showReplysButtonText: string,
    publishButtonText: string,
    editText: string,
    deleteText: string,
    limitInputs: number,
    cancelButtonText: string,
    saveButtonText: string,
    orText: string,
    showMoreButtonText: string,
    showLessButtonText: string,
    group_uuid: string,
    styles: any,
    getSearchUsers?: (value: string) => MentionUser[],
    relationToPhaseText?: string,
    limitMessageExceeded: string,
    size?: number,
    showMoreReplysButtonText: string,
    loggedInUser: LoggedInUser,
    isGoalOwner: boolean
}

export interface IUser {
    id: number,
    uuid: string,
    name: string,
    role_name: string,
    company_name: string,
    avatar?: string,
}

export type LoggedInUser = {
    avatar?: string;
    id: string;
    name?: {
        name: string;
        first_name: string;
        last_name: string;
    };
};
