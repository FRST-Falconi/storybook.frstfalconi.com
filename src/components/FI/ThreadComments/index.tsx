import { SetStateAction, useState } from 'react'
import * as Styled from './threadComments.styles';
import CommentaryBox from '@components/commentary-box';
import {IThreadComments} from './threadComments.types';
import Avatar from '@components/avatar'
import InputComment from '@components/input-comment';
import { useTranslation } from 'react-i18next'
import Loading from '@components/DS/loading';
import MiniButton from '../../mini-button/index';

export const ThreadComments = ({ mainComment,listReplyComments, onClickShowReplys, textPlaceHolder, onClickPublishButton}: IThreadComments) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [commentData, setCommentData] = useState('');
    const [showInputByIdReply, setShowInputByIdReply] = useState<string[]>([]);

    const { t } = useTranslation();
    const limitInput = 800;

    const OnChangeComment = (e: { target: { value: SetStateAction<string>; }; }) => {
        setCommentData(e.target.value);

            console.log("limitInput = " + limitInput);
            console.log("commentData = " + e.target.value.length);
            if(limitInput ===  e.target.value.length){
                console.log("if true")
            }else{
                console.log("if false")
            }
    }

    const handleShowReplys = async ()=>{
        setIsLoading(true);

        try {
        onClickShowReplys();
      
          await new Promise(resolve => setTimeout(resolve, 3000));
      
          setShowAnswers(true);
        } catch (error) { 
            
        } finally {
          setIsLoading(false);
        }
    }
    
    const handleCommentReply=(replyTo:string)=>{
        if(!commentData.includes(replyTo)){
            setCommentData(replyTo + ' ' + commentData);
        }
        setShowReplyInput(true);
    }

    const handleCommentReplyReply=(replyTo:string, idReply:string)=>{
        if(!commentData.includes(replyTo)){
            setCommentData(replyTo + ' ' + commentData);
        }
        setShowInputByIdReply([...showInputByIdReply,idReply]);
    }

    return (
        <Styled.Container>
            <Styled.CommentarysContainer>
                <div>
                <Styled.CommentaryBoxContainer>
                    <Avatar size='40px' src={mainComment.imgProfile}/>
                    <CommentaryBox 
                    name={mainComment.username}
                    position={mainComment.office}
                    value={mainComment.text}
                    date={mainComment.howlongAgo}
                    className={mainComment.className || 'mainComment'}
                    styles={{width:'100%'}}
                    onChange={() => {}}
                    hasAnswer={true}
                    textAnswer='Responder'
                    actionAnswer={()=>handleCommentReply(mainComment.username)}
                    />
                </Styled.CommentaryBoxContainer>
              {listReplyComments?.length>0 && !showAnswers &&
              (<Styled.ViewReplysButtonContainer >
                    <span onClick={()=>handleShowReplys()}>{t('globals.toView')}  {listReplyComments.length } {t('globals.replys')} </span>
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
                        placeholder={textPlaceHolder || t('globals.typeHere')}
                        limit={limitInput} 
                        remain={limitInput - commentData.length}
                        showCharacterCounter={true}/>

                        <MiniButton disabled={commentData.length <= 0} label={ t('globals.publish')} onClick={()=> onClickPublishButton()} variant="primary" styles={{ marginLeft:'auto', marginTop:'15px'}}/>
                </Styled.InputContainer>
               )}
                </div>

                {isLoading && <Loading/> }

                {showAnswers && !isLoading &&(
                <Styled.RepplysContainer>
                {listReplyComments?.map((replyComment)=>{
                    return  (
                        <>
             
                    <Styled.CommentaryBoxContainer> 
                        <Avatar size='40px' src={replyComment.imgProfile}/>
                        <CommentaryBox 
                            key={`comentaryBox-${replyComment.id}`}
                            name={replyComment.username}
                            position={replyComment.office}
                            value={replyComment.text}
                            date={replyComment.howlongAgo}
                            className={replyComment.className || 'ReplyComment'}
                            styles={{width:'100%'}}
                            onChange={() => {}}
                            hasAnswer={true}
                            textAnswer='Responder'
                            actionAnswer={()=>handleCommentReplyReply(replyComment.username,replyComment.id)}
                        />
                    </Styled.CommentaryBoxContainer>
                    {showInputByIdReply.includes(replyComment.id) &&(
                    <Styled.InputContainer>
                        <InputComment
                            styles={{width:'100%'}}
                            IDInput='userComment' 
                            className='userComment'
                            hasEmoji={true} 
                            emojiWindowlanguage='pt'
                            onChange={OnChangeComment}
                            value={commentData}
                            placeholder={textPlaceHolder || t('globals.typeHere')}
                            limit={limitInput} 
                            remain={limitInput - commentData.length}
                            showCharacterCounter={true}/>

                            <MiniButton disabled={commentData.length <= 0} label={ t('globals.publish')} onClick={()=> onClickPublishButton()} variant="primary" styles={{ marginLeft:'auto', marginTop:'15px'}}/>
                </Styled.InputContainer>
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
  