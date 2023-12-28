import { useState } from 'react'
import * as Styled from './threadComments.styles'
import { IThreadComments } from './threadComments.types'
import Loading from '@components/DS/loading'
import { InputReply } from './utilitiesComponents/inputReply'
import { CommentaryBoxV2 } from '@components/commentaryBoxV2'
import { CommentaryBoxReply } from './utilitiesComponents/commentaryBoxReply'

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
  getSearchUsers,
  showMoreButtonText,
  showLessButtonText,
  styles,
  relationToPhaseText
}: IThreadComments) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showAnswers, setShowAnswers] = useState(false)
  const [showReplyInput, setShowReplyInput] = useState(false)
  const [showInputByIdReply, setShowInputByIdReply] = useState<string[]>([])

  const handleShowReplys = async () => {
    setIsLoading(true)  
    try {
      setShowAnswers(true)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  const handleHiddenInput = ()=>{
    setShowReplyInput(false);
  }

  const handleHiddenInputReply = (idReplyToRemove: string)=>{
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
            imgProfile={mainComment.user.avatar}
            itsLiked={false}
            userId={mainComment.user.uuid}
            userName={mainComment.user.name}
            userOffice={mainComment.user.role_name}
            userCompany={mainComment.user.company_name}
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
              <span onClick={() => handleShowReplys()}>{showReplysButtonText}</span>
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
              replyFor={mainComment.user.name}
              parentId={Number(mainComment.id)}
              handleHiddenInput={handleHiddenInput}
            />
          )}
        </div>

        {isLoading && <Loading />}

        {showAnswers && !isLoading && (
          <Styled.RepplysContainer>
            {listReplyComments?.map((replyComment) => {
              return (
                <>
                  <CommentaryBoxReply
                    commentData={replyComment}
                    answerButtonText={answerButtonText}
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
                      replyFor={replyComment.user.name}
                      getSearchUsers={getSearchUsers}
                      parentId={Number(mainComment.id)}
                      handleHiddenInput={(replyId = replyComment.id)=>handleHiddenInputReply(replyId)}
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
