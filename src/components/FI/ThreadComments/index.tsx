import { useState } from 'react'
import * as Styled from './threadComments.styles';
import CommentaryBox from '@components/commentary-box';
import {IThreadComments} from './threadComments.types';
import Avatar from '@components/avatar'
import InputComment from '@components/input-comment';
import { useTranslation } from 'react-i18next'
import Loading from '@components/DS/loading';

export const ThreadComments = (comment: IThreadComments) => {
    const [isLoading, setIsLoading] = useState(false);

    const [showAnswers, setShowAnswers] = useState(false);
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [commentData, setCommentData] = useState('');
    const { t } = useTranslation()

    const OnChangeComment = (e) => {
        setCommentData(e.target.value)
    }

    const handleShowReplys = async ()=>{
        setIsLoading(true);
        try {
            comment.onClickShowReplys();
            await new Promise(resolve => setTimeout(resolve, 3000));
            setShowAnswers(true);
        } catch (error) {return}
        setIsLoading(false);
    }
    
    const handleReplyComment=(replyTo:string)=>{
        if(!commentData.includes(replyTo)){
            setCommentData(replyTo + ' ' + commentData);
        }
        setShowReplyInput(true);
    }

    return (
        <Styled.Container>
            <Styled.CommentarysContainer>
                <div>
                <Styled.CommentaryBoxContainer>
                    <Avatar size='40px' src={comment.mainComment.imgProfile}/>
                    <CommentaryBox 
                    name={comment.mainComment.username}
                    position={comment.mainComment.office}
                    value={comment.mainComment.text}
                    date={comment.mainComment.howlongAgo}
                    className={comment.mainComment.className || 'mainComment'}
                    styles={{width:'100%'}}
                    onChange={() => {}}
                    hasAnswer={true}
                    textAnswer='Responder'
                    actionAnswer={()=>handleReplyComment(comment.mainComment.username)}
                    />
                </Styled.CommentaryBoxContainer>
              {comment?.listReplyComments?.length>0 && !showAnswers &&
              (<Styled.ViewReplysButtonContainer >
                    <span onClick={()=>handleShowReplys()}>{t('globals.toView')} {comment.listReplyComments.length } {t('globals.replys')} </span>
             </Styled.ViewReplysButtonContainer> 
             )} 

               {showReplyInput && (
                <Styled.InputContainer>
                    <InputComment
                        styles={{width:'100%'}}
                        IDInput='userComment' 
                        className='userComment'
                        hasEmoji={true} 
                        emojiWindowlanguage='pt'
                        onChange={OnChangeComment}
                        value={commentData}
                        placeholder={comment.textPlaceHolder || t('globals.typeHere') || ''}
                        limit={800} 
                        remain={800 - commentData.length}
                        showCharacterCounter={true}/>
                </Styled.InputContainer>
               )}
                </div>
                {isLoading && <Loading/> }

                {showAnswers && !isLoading &&(
                <Styled.RepplysContainer>
                {comment.listReplyComments?.map((replyComment)=>{
                    return  (
                    <Styled.CommentaryBoxContainer> 
                        <Avatar size='40px' src={replyComment.imgProfile}/>
                        <CommentaryBox 
                            key={replyComment.id}
                            name={replyComment.username}
                            position={replyComment.office}
                            value={replyComment.text}
                            date={replyComment.howlongAgo}
                            className={replyComment.className || 'ReplyComment'}
                            styles={{width:'100%'}}
                            onChange={() => {}}
                        />
                    </Styled.CommentaryBoxContainer>
                )})}
            </Styled.RepplysContainer>
            )}
            </Styled.CommentarysContainer>
   

        </Styled.Container>      
    )
  }
  