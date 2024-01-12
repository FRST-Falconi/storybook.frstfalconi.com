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
  loggedUserProfileImg,
  group_uuid,
  getSearchUsers,
  showMoreButtonText,
  showLessButtonText,
  styles,
  relationToPhaseText,
  limitMessageExceeded
}: IThreadComments) => {
  const [showAnswers, setShowAnswers] = useState(false)
  const [showReplyInput, setShowReplyInput] = useState(false)
  const [showInputByIdReply, setShowInputByIdReply] = useState<string[]>([])

  const handleHiddenInput = () => {
    setShowReplyInput(false);
  }

  const handleHiddenInputReply = (idReplyToRemove: string) => {
    setShowInputByIdReply(prevShowInputByIdReply =>
      prevShowInputByIdReply.filter(id => id !== idReplyToRemove)
    );
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
            styles={{ marginBottom: '8px' }}
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
            showLikeButton={false}
            actionAnswer={handleCommentReply}
            relationToPhaseText={relationToPhaseText}
            commentTextWithMention={mainComment.mentionText}
          />

          {listReplyComments?.length > 0 && !showAnswers && (
            <Styled.ViewReplysButtonContainer>
              <span onClick={() => setShowAnswers(true)}>{showReplysButtonText}</span>
            </Styled.ViewReplysButtonContainer>
          )}

          {showReplyInput && (
            <InputReply
              styles={{ width: '100%', marginTop: '24px' }}
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

        {showAnswers && (
          <Styled.RepplysContainer>
            {listReplyComments?.map((replyComment) => {
              return (
                <>
                  <CommentaryBoxReply
                    commentData={replyComment}
                    // answerButtonText={answerButtonText}
                    answerButtonText={''}
                    showMoreButtonText={showMoreButtonText}
                    showLessButtonText={showLessButtonText}
                    onClickAnswerButton={handleCommentReplyReply}
                  />
                  {showInputByIdReply.includes(replyComment.id) && (
                    <InputReply
                      imgProfile={loggedUserProfileImg}
                      styles={{ width: '100%', marginTop: '24px' }}
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
                </>
              )
            })}
          </Styled.RepplysContainer>
        )}
      </Styled.CommentarysContainer>
    </Styled.Container>
  )
}
