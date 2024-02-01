import React from 'react'

import { ICommentComentaryBoxReply } from './commentaryBoxReply.types'
import { CommentaryBoxV2 } from '@components/commentaryBoxV2'

export const CommentaryBoxReply = ({
  commentData,
  showMoreButtonText,
  showLessButtonText,
  answerButtonText,
  onClickAnswerButton,
  isAuthor,
  isOwnerPost,
  deleteText,
  editText,
  onClickDelete,
  onClickEdit,
  limitInput,
  cancelButtonText,
  saveButtonText,
  orText,
  limitMessageExceeded,
  placeHolderText,
  getSearchUsers,
  onClickLike,
  onClickUnlike,
  likeButtonText,
  loggedInUser,
  likes
}: ICommentComentaryBoxReply) => {
  return (
    <CommentaryBoxV2
      hasActionToClickOnAvatar={false}
      imgProfile={commentData.user?.avatar}
      loggedInUser={loggedInUser}
      userName={commentData.user?.name}
      userOffice={commentData.user?.role_name}
      userCompany={commentData.user?.company_name}
      commentId={commentData.id}
      commentText={commentData.text}
      commentUuid={commentData.uuid}
      howLongAgo={commentData.howLongAgo}
      showMoreText={showMoreButtonText}
      actionAnswer={() => onClickAnswerButton(commentData.id.toString())}
      showLessText={showLessButtonText}
      answerButtonText={answerButtonText}
      styles={{ marginTop: '0px' }}
      commentTextWithMention={commentData.mentionText}
      isAuthor={isAuthor}
      isOwnerPost={isOwnerPost}
      deleteText={deleteText}
      editText={editText}
      showOptions={isAuthor || isOwnerPost}
      actionDeleteComment={onClickDelete}
      limitInput={limitInput}
      cancelButtonText={cancelButtonText}
      saveButtonText={saveButtonText}
      orText={orText}
      limitMessageExceeded={limitMessageExceeded}
      actionEditComment={onClickEdit}
      placeHolderText={placeHolderText}
      getSearchUsers={getSearchUsers}
      likes={likes}
      actionLike={onClickLike}
      actionUnlike={onClickUnlike}
      showLikeButton={true}
      likeButtonText={likeButtonText}
    />
  )
}
