import {  ReactNode, useState } from 'react'
import * as Styled from './threadComments.styles';
import CommentaryBox from '@components/commentary-box';
import {IThreadComments} from './threadComments.types';
import Avatar from '@components/avatar'


export const ThreadComments = (comment: IThreadComments) => {
    const [activeCommentId, setActiveCommentId] = useState<string | null>();
    const [showAnswers, setShowAnswers] = useState(false);

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
                    styles={{}}
                    onChange={() => {}}
                    hasAnswer={true}
                    textAnswer='Responder'
                    />
                </Styled.CommentaryBoxContainer>
               <Styled.ViewReplysButtonContainer ><span onClick={()=>setShowAnswers(!showAnswers)}>{showAnswers?'Esconder' :'Visualizar'} {comment.listReplyComments.length} respostas</span></Styled.ViewReplysButtonContainer> 

                </div>
                {showAnswers && 
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
                            styles={{}}
                            onChange={() => {}}
                            hasAnswer={true}
                            textAnswer='responder'
                        />
                    </Styled.CommentaryBoxContainer>
                )})}

            </Styled.RepplysContainer>
            }

            </Styled.CommentarysContainer>
   

        </Styled.Container>      
    )
  }
  
  const commentaryBoxProps = {
    
  }