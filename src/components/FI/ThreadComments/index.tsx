import { useState } from 'react'
import * as Styled from './threadComments.styles';
import {IThreadComments} from './threadComments.types';
import Loading from '@components/DS/loading';
import { InputReply } from './utilitiesComponents/inputReply';
import { CommentaryBoxWithAvatar } from './utilitiesComponents/comentaryBoxWithAvatar';

export const ThreadComments = ({ mainComment,listReplyComments, onClickShowReplys, placeHolderText, onClickPublishButton, showReplysButtonText, publishButtonText,limitInputs,answerButtonText}: IThreadComments) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [showInputByIdReply, setShowInputByIdReply] = useState<string[]>([]);

    // const OnChangeComment = (e: { target: { value: SetStateAction<string>; }; }) => {
    //     setCommentData(e.target.value);
    //         if(limitInputs ===  e.target.value.length){
    //             console.log("if true")
    //         }else{
    //             console.log("if false")
    //         }
    // }

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
  