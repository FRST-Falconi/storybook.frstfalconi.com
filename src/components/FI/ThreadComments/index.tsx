import { CommentaryBoxV2 } from '@components/commentaryBoxV2'
import { Fragment, useState } from 'react'
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
  loggedUserProfileImg,
  group_uuid,
  getSearchUsers,
  showMoreButtonText,
  showLessButtonText,
  styles,
  relationToPhaseText,
  limitMessageExceeded,
  size = 5,
  showMoreReplysButtonText
}: IThreadComments) => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [showReplysOnClickCounter, setReplysOnClickCounter] = useState(0);
  const [showReplyInput, setShowReplyInput] = useState(false)
  const [showInputByIdReply, setShowInputByIdReply] = useState<string[]>([])
  const [visibleReplies, setVisibleReplies] = useState(0);

  const handleLoadMoreReplies = () => {
    if (showReplysOnClickCounter === 0) {
      setVisibleReplies((prevVisibleReplies) => prevVisibleReplies + size);
    }
    setReplysOnClickCounter((prevShowReplysOnClickCounter) => prevShowReplysOnClickCounter + 1);
    if (showReplysOnClickCounter >= 1) {
      setVisibleReplies(listReplyComments.length);
    }
    setShowAnswers(true);
  }

  const handleHiddenInput = () => {
    setShowReplyInput(false)
  }

  const handleHiddenInputReply = (idReplyToRemove: string) => {
    setShowInputByIdReply((prevShowInputByIdReply) => prevShowInputByIdReply.filter((id) => id !== idReplyToRemove))
  }

  const handleCommentReply = () => {
    setShowReplyInput(true)
  }

  const handleCommentReplyReply = (idReply: string) => {
    setShowInputByIdReply([...showInputByIdReply, idReply])
  }

  return (
    <Styled.Container style={styles}>
      <Styled.CommentarysContainer>
      <div>
          <CommentaryBoxV2
            hasActionToClickOnAvatar={false}
            imgProfile={mainComment.user?.avatar}
            itsLiked={false}
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
            relationToPhaseText={relationToPhaseText}
            commentTextWithMention={mainComment.mentionText}
            isMainComment
          />

          {listReplyComments.length > visibleReplies && (
            <Styled.ViewReplysButtonContainer>
              <span onClick={handleLoadMoreReplies}>{showReplysOnClickCounter === 0 ? showReplysButtonText : showMoreReplysButtonText}</span>
            </Styled.ViewReplysButtonContainer>
          )}

          {showReplyInput && (
            <InputReply
              styles={{marginLeft:'60px'}}
              imgProfile={loggedUserProfileImg}
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
          <Styled.RepplysContainer>
            {listReplyComments.slice(0, visibleReplies).map((replyComment) => (
              <Fragment key={replyComment.id}>
                <CommentaryBoxReply
                  commentData={replyComment}
                  answerButtonText={''}
                  showMoreButtonText={showMoreButtonText}
                  showLessButtonText={showLessButtonText}
                  onClickAnswerButton={handleCommentReplyReply}
                />
                {showInputByIdReply.includes(replyComment.id) && (
                  <InputReply
                    imgProfile={loggedUserProfileImg}
                    styles={{width: '100%'}}
                    idInput={`idInput-${replyComment.id}`}
                    placeHolderText={placeHolderText}
                    publishButtonText={publishButtonText}
                    limitInput={limitInputs}
                    onClickPublishButton={onClickPublishButton}
                    replyMentionedUser={replyComment.user}
                    getSearchUsers={getSearchUsers}
                    parentId={Number(mainComment.id)}
                    handleHiddenInput={(replyId = replyComment.id) => handleHiddenInputReply(replyId)}
                    group_uuid={group_uuid}
                    limitMessageExceeded={limitMessageExceeded}
                  />
                )}
              </Fragment>
            ))}
          </Styled.RepplysContainer>
        )}
      </Styled.CommentarysContainer>
    </Styled.Container>
  )
}
