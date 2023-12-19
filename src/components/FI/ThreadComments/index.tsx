import { useState } from 'react'
import * as Styled from './threadComments.styles';
import {IThreadComments} from './threadComments.types';
import Loading from '@components/DS/loading';
import { InputReply } from './utilitiesComponents/inputReply';
import { CommentaryBoxWithAvatar } from './utilitiesComponents/comentaryBoxWithAvatar';
import { CommentaryBoxV2 } from '@components/commentaryBoxV2';

export const ThreadComments = ({ mainComment,listReplyComments, onClickShowReplys, placeHolderText, onClickPublishButton, showReplysButtonText, publishButtonText,limitInputs,answerButtonText}: IThreadComments) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [showInputByIdReply, setShowInputByIdReply] = useState<string[]>([]);


    const handleShowReplys = async ()=>{
        setIsLoading(true);

        try { 
            await onClickShowReplys();   
            setShowAnswers(true);
        
        } catch (error) { 
            
        } finally {
          setIsLoading(false);
        }
    }
    
    const handleCommentReply=()=>{
        setShowReplyInput(true);
    }

    const handleCommentReplyReply=(idReply:string)=>{
        setShowInputByIdReply([...showInputByIdReply,idReply]);
    }

    return (
        <Styled.Container>
            <Styled.CommentarysContainer>
                <div>
                    {/* <CommentaryBoxV2 
                        user={{id:mainComment.userId,name:mainComment.username, office: mainComment.office, company: mainComment.company, imgProfile: mainComment.imgProfile}}
                        comment={undefined}
                        texts={{showMoreText: "Ver Mais", showLessText: "Ver Menos"}}
                        actions={undefined}
                        hasActionToClickOnAvatar={false}
                        itsLiked={false} /> */}
                        <CommentaryBoxWithAvatar
                        commentData={mainComment}
                        answerButtonText={answerButtonText}
                        onClickAnswerButton={handleCommentReply}     
                        />
                {listReplyComments?.length>0 && !showAnswers &&
                    (<Styled.ViewReplysButtonContainer >
                        <span onClick={()=>handleShowReplys()}>{showReplysButtonText}</span>
                    </Styled.ViewReplysButtonContainer> 
                    )} 

               {showReplyInput && (
                    <InputReply
                    styles={{width:'100%'}}
                    idInput={`idInput-${mainComment.id}`}
                    placeHolderText={placeHolderText}
                    publishButtonText={publishButtonText}
                    limitInput={limitInputs} 
                    onClickPublishButton={onClickPublishButton}
                    replyFor={mainComment.username}
                    />
               )}
                </div>

                {isLoading && <Loading/> }

                {showAnswers && !isLoading &&(
                <Styled.RepplysContainer>
                {listReplyComments?.map((replyComment)=>{
                    return  (
                        <>
                            <CommentaryBoxWithAvatar
                            commentData={replyComment}
                            answerButtonText={answerButtonText}
                            onClickAnswerButton={handleCommentReplyReply}     
                            />
                    {showInputByIdReply.includes(replyComment.id) &&(
                        <InputReply
                            styles={{width:'100%'}}
                            idInput={`idInput-${replyComment.id}`}
                            placeHolderText={placeHolderText}
                            publishButtonText={publishButtonText}
                            limitInput={limitInputs} 
                            onClickPublishButton={onClickPublishButton}
                            replyFor={replyComment.username}
                        />
                    )
                }
                    </>
                       
                )})}
            </Styled.RepplysContainer>
            )}
            </Styled.CommentarysContainer>
        </Styled.Container>      
    )
  }
  