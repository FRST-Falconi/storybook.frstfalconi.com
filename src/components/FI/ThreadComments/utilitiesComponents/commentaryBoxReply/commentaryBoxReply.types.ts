import {IComment} from '../../threadComments.types';

export interface ICommentComentaryBoxReply {
    commentData:IComment,
    answerButtonText: string,
    showMoreButtonText: string,
    showLessButtonText: string,
    editText?: string,
    deleteText?: string,
    onClickAnswerButton: (idReply?:string) => void,
    isAuthor: boolean;
    isOwnerPost:boolean;
}