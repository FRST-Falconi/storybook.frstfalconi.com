import React from 'react'

import {ICommentComentaryBoxReply} from './commentaryBoxReply.types';
import { CommentaryBoxV2 } from '@components/commentaryBoxV2';

export const CommentaryBoxReply = ({ commentData, showMoreButtonText, showLessButtonText, answerButtonText,onClickAnswerButton
}: ICommentComentaryBoxReply) => {


    return (
        <CommentaryBoxV2                        
        hasActionToClickOnAvatar={false}
        itsLiked={false} userName={commentData.username}
        userOffice={commentData.office} userCompany={commentData.company}
        commentId={commentData.id} commentText={commentData.text} 
        howLongAgo={commentData.howLongAgo} showMoreText={showMoreButtonText} actionAnswer={()=>onClickAnswerButton(commentData.id)}
        showLessText={showLessButtonText} answerButtonText={answerButtonText} styles={{marginTop: '8px'}} />
    )
}
  