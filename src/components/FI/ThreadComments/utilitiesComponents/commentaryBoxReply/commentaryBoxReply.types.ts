import {IComment} from '../../threadComments.types';

export interface ICommentComentaryBoxReply {
    commentData:IComment,
    answerButtonText: string,
    showMoreButtonText: string,
    showLessButtonText: string,
    onClickAnswerButton: (idReply?:string) => void,
    isAuthor: boolean;
    isOwnerPost:boolean;
}