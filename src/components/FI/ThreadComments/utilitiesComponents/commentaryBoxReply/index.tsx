import React, { useState } from 'react'

import { ICommentComentaryBoxReply } from './commentaryBoxReply.types'
import { CommentaryBoxV2 } from '@components/commentaryBoxV2'
import { InputReply } from '../inputReply'
import { ViewReplysButtonContainer } from '../../threadComments.styles'

export const CommentaryBoxReply = ({
  commentData,
  showMoreButtonText,
  showLessButtonText,
  answerButtonText,
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
  likes,
  replies = [],
  isGoalOwner,
  group_uuid,
  publishButtonText,
  onClickPublishButton,
  mainCommentUser,
  answersText,
  toViewText
}: ICommentComentaryBoxReply) => {
  const [showAnswers, setShowAnswers] = useState(false)
  const [showReplyInput, setShowReplyInput] = useState(false)

  const handleLoadMoreReplies = () => {
    setShowAnswers(true)
  }

  return (
    <div>
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
        actionAnswer={() => setShowReplyInput(true)}
        showLessText={showLessButtonText}
        answerButtonText={answerButtonText}
        styles={{ marginTop: '16px' }}
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
        showLikeButton={false}
        likeButtonText={likeButtonText}
        showInterconnectionLine={replies.length > 0 && showAnswers}
      />

      {replies.length > 0 && !showAnswers && (
        <ViewReplysButtonContainer style={{ left: '44px' }}>
          <span onClick={handleLoadMoreReplies}>{`${toViewText} ${replies.length} ${answersText}`}</span>
        </ViewReplysButtonContainer>
      )}

      {showReplyInput && (
        <InputReply
          imgProfile={loggedInUser?.avatar}
          styles={{ width: '100%' }}
          idInput={`idInput-${commentData.id}`}
          placeHolderText={placeHolderText}
          publishButtonText={publishButtonText}
          limitInput={limitInput}
          onClickPublishButton={onClickPublishButton}
          replyMentionedUser={mainCommentUser}
          getSearchUsers={getSearchUsers}
          parentId={commentData.id}
          handleHiddenInput={() => setShowReplyInput(false)}
          group_uuid={group_uuid}
          limitMessageExceeded={limitMessageExceeded}
        />
      )}
      {showAnswers &&
        replies?.map((reply, index) => (
          <>
            <CommentaryBoxV2
              styles={{ marginTop: '16px' }}
              key={reply.id}
              userName={reply.user?.name}
              userOffice={reply.user?.role_name}
              userCompany={reply.user?.company_name}
              commentUuid={reply.uuid}
              commentId={reply.id}
              commentText={reply.text}
              commentTextWithMention={reply.mentionText}
              howLongAgo={reply.howLongAgo}
              placeHolderText={placeHolderText}
              cancelButtonText={cancelButtonText}
              saveButtonText={saveButtonText}
              likeButtonText={likeButtonText}
              editText={editText}
              deleteText={deleteText}
              orText={orText}
              limitInput={limitInput}
              showMoreText={showMoreButtonText}
              showLessText={showLessButtonText}
              hasActionToClickOnAvatar={false}
              likes={reply.likes}
              loggedInUser={loggedInUser}
              limitMessageExceeded={limitMessageExceeded}
              showLikeButton={false}
              actionLike={onClickLike}
              actionUnlike={onClickUnlike}
              getSearchUsers={getSearchUsers}
              actionEditComment={onClickEdit}
              actionDeleteComment={onClickDelete}
              isAuthor={reply.user?.uuid === loggedInUser?.id}
              isOwnerPost={isAuthor || isOwnerPost || isGoalOwner}
              showOptions={isAuthor || isOwnerPost || reply.user?.uuid === loggedInUser?.id || isGoalOwner}
              imgProfile={reply.user?.avatar}
              showInterconnectionLine={replies.length != index + 1}
            />
          </>
        ))}
    </div>
  )
}
