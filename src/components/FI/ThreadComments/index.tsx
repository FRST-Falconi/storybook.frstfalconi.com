import { CommentaryBoxV2 } from '@components/commentaryBoxV2'
import { useState } from 'react'
import * as Styled from './threadComments.styles'
import { IThreadComments } from './threadComments.types'
import { CommentaryBoxReply } from './utilitiesComponents/commentaryBoxReply'
import { InputReply } from './utilitiesComponents/inputReply'

export const ThreadComments = ({
  mainComment,
  listReplyComments,
  placeHolderText,
  onClickPublishButton,
  showReplysButtonText,
  publishButtonText,
  limitInputs,
  answerButtonText,
  loggedInUser,
  group_uuid,
  getSearchUsers,
  showMoreButtonText,
  showLessButtonText,
  styles,
  relationToPhaseText,
  limitMessageExceeded,
  size = 5,
  showMoreReplysButtonText,
  isGoalOwner,
  editText,
  deleteText,
  onClickDelete,
  onClickEdit,
  cancelButtonText,
  saveButtonText,
  orText,
  onClickLike,
  onClickUnlike,
  likeButtonText,
  toViewText,
  answersText
}: IThreadComments) => {
  const [showAnswers, setShowAnswers] = useState(false)
  const [showReplysOnClickCounter, setReplysOnClickCounter] = useState(0)
  const [showReplyInput, setShowReplyInput] = useState(false)
  const [visibleReplies, setVisibleReplies] = useState(0)

  const handleLoadMoreReplies = () => {
    if (showReplysOnClickCounter === 0) {
      setVisibleReplies((prevVisibleReplies) => prevVisibleReplies + size)
    }
    setReplysOnClickCounter((prevShowReplysOnClickCounter) => prevShowReplysOnClickCounter + 1)
    if (showReplysOnClickCounter >= 1) {
      setVisibleReplies(listReplyComments.length)
    }
    setShowAnswers(true)
  }

  const handleHiddenInput = () => {
    setShowReplyInput(false)
  }

  const handleCommentReply = () => {
    setShowReplyInput(true)
  }

  const isMainCommentUser = mainComment.user?.uuid === loggedInUser?.id

  return (
    <Styled.Container style={styles}>
      <Styled.CommentarysContainer>
        <div>
          <CommentaryBoxV2
            loggedInUser={loggedInUser}
            hasActionToClickOnAvatar={false}
            imgProfile={mainComment.user?.avatar}
            userId={mainComment.user?.uuid}
            userName={mainComment.user?.name}
            userOffice={mainComment.user?.role_name}
            userCompany={mainComment.user?.company_name}
            commentId={mainComment.id}
            commentText={mainComment.text}
            howLongAgo={mainComment.howLongAgo}
            showMoreText={showMoreButtonText}
            showLessText={showLessButtonText}
            answerButtonText={answerButtonText}
            actionAnswer={handleCommentReply}
            actionDeleteComment={onClickDelete}
            actionEditComment={onClickEdit}
            relationToPhaseText={relationToPhaseText}
            commentTextWithMention={mainComment.mentionText}
            isMainComment
            isAuthor={isMainCommentUser}
            isOwnerPost={isGoalOwner}
            deleteText={deleteText}
            editText={editText}
            showOptions={isMainCommentUser || isGoalOwner}
            commentUuid={mainComment.uuid}
            limitInput={limitInputs}
            groupUuid={group_uuid}
            cancelButtonText={cancelButtonText}
            saveButtonText={saveButtonText}
            orText={orText}
            limitMessageExceeded={limitMessageExceeded}
            placeHolderText={placeHolderText}
            getSearchUsers={getSearchUsers}
            actionLike={onClickLike}
            actionUnlike={onClickUnlike}
            showLikeButton={true}
            likeButtonText={likeButtonText}
            likes={mainComment.likes}
          />

          {listReplyComments.length > visibleReplies && (
            <Styled.ViewReplysButtonContainer id="text-viwMsg">
              <span onClick={handleLoadMoreReplies}>
                {showReplysOnClickCounter === 0 ? showReplysButtonText : showMoreReplysButtonText}
              </span>
            </Styled.ViewReplysButtonContainer>
          )}

          {showReplyInput && (
            <InputReply
              styles={{ marginLeft: '60px' }}
              imgProfile={loggedInUser?.avatar}
              idInput={`idInput-${mainComment.id}`}
              placeHolderText={placeHolderText}
              publishButtonText={publishButtonText}
              limitInput={limitInputs}
              onClickPublishButton={onClickPublishButton}
              getSearchUsers={getSearchUsers}
              replyMentionedUser={mainComment.user}
              parentId={Number(mainComment.id)}
              handleHiddenInput={handleHiddenInput}
              group_uuid={group_uuid}
              limitMessageExceeded={limitMessageExceeded}
            />
          )}
        </div>
        {showAnswers && visibleReplies && (
          <Styled.RepplysContainer style={{ marginTop: '6px' }}>
            {listReplyComments.slice(0, visibleReplies).map((replyComment) => (
              <div key={replyComment.id}>
                <CommentaryBoxReply
                  replies={replyComment?.replies}
                  commentData={replyComment}
                  answerButtonText={answerButtonText}
                  showMoreButtonText={showMoreButtonText}
                  showLessButtonText={showLessButtonText}
                  isAuthor={replyComment.user?.uuid === loggedInUser?.id}
                  isOwnerPost={mainComment.user?.uuid === loggedInUser?.id || isGoalOwner}
                  deleteText={deleteText}
                  editText={editText}
                  onClickDelete={onClickDelete}
                  limitInput={limitInputs}
                  groupUuid={group_uuid}
                  cancelButtonText={cancelButtonText}
                  saveButtonText={saveButtonText}
                  orText={orText}
                  limitMessageExceeded={limitMessageExceeded}
                  onClickEdit={onClickEdit}
                  placeHolderText={placeHolderText}
                  getSearchUsers={getSearchUsers}
                  onClickLike={onClickLike}
                  onClickUnlike={onClickUnlike}
                  likeButtonText={likeButtonText}
                  likes={replyComment.likes}
                  loggedInUser={loggedInUser}
                  isGoalOwner={isGoalOwner}
                  group_uuid={group_uuid}
                  publishButtonText={publishButtonText}
                  onClickPublishButton={onClickPublishButton}
                  mainCommentId={mainComment.id}
                  mainCommentUser={mainComment.user}
                  showReplysButtonText={showReplysButtonText}
                  showMoreReplysButtonText={showMoreReplysButtonText}
                  toViewText={toViewText}
                  answersText={answersText}
                />
              </div>
            ))}
          </Styled.RepplysContainer>
        )}
      </Styled.CommentarysContainer>
    </Styled.Container>
  )
}
