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
    const { t } = useTranslation()

    const OnChangeComment = (e: { target: { value: SetStateAction<string>; }; }) => {
        setCommentData(e.target.value)
    }

    const handleShowReplys = async ()=>{
        setIsLoading(true);
        try {
            onClickShowReplys();
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
                    actionAnswer={()=>handleReplyComment(mainComment.username)}
                    />
                </Styled.CommentaryBoxContainer>
              {listReplyComments?.length>0 && !showAnswers &&
              (<Styled.ViewReplysButtonContainer >
                    <span onClick={()=>handleShowReplys()}>{t('globals.toView')} {listReplyComments.length } {t('globals.replys')} </span>
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
                        limit={800} 
                        remain={800 - commentData.length}
                        showCharacterCounter={true}/>

                        <MiniButton label={ t('globals.publish')} onClick={()=> onClickPublishButton()} variant="primary" styles={{ marginLeft:'auto', marginTop:'15px'}}/>
                </Styled.InputContainer>
               )}
                </div>
                {isLoading && <Loading/> }

                {showAnswers && !isLoading &&(
                <Styled.RepplysContainer>
                {listReplyComments?.map((replyComment)=>{
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
  