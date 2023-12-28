import React from 'react'

import {ICommentComentaryBoxReply} from './commentaryBoxReply.types';
import { CommentaryBoxV2 } from '@components/commentaryBoxV2';

export const CommentaryBoxReply = ({ commentData, showMoreButtonText, showLessButtonText, answerButtonText,onClickAnswerButton
}: ICommentComentaryBoxReply) => {
    return (
        <CommentaryBoxV2                        
        hasActionToClickOnAvatar={false}
        imgProfile={commentData.user.profile.avatar}
        itsLiked={false} userName={commentData.user.name}
        userOffice={commentData.user.profile.role_name} userCompany={commentData.user.profile.company_name}
        commentId={commentData.id} commentText={commentData.text} 
        howLongAgo={commentData.howLongAgo} showMoreText={showMoreButtonText} actionAnswer={()=>onClickAnswerButton(commentData.id)}
        showLessText={showLessButtonText} answerButtonText={answerButtonText} styles={{marginTop: '8px'}} commentTextWithMention={commentData.mentionText} />
    )
}
  