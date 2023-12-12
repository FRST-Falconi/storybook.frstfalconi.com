import * as Styled from './comentaryBoxWithAvatar.styles';
import CommentaryBox from '@components/commentary-box';
import {ICommentComentaryBox} from './comentaryBoxWithAvatar.types';
import Avatar from '@components/avatar'

export const CommentaryBoxWithAvatar = ({ commentData, answerButtonText, onClickAnswerButton}: ICommentComentaryBox) => {
    return (
        <Styled.CommentaryBoxContainer>
            <Avatar size='40px' src={commentData.imgProfile}/>
            <CommentaryBox 
                name={commentData.username}
                position={commentData.office}
                value={commentData.text}
                date={commentData.howlongAgo}
                className={'CommentComentaryBox'}
                styles={{width:'100%'}}
                onChange={() => {}}
                hasAnswer={true}
                textAnswer={answerButtonText}
                actionAnswer={()=>onClickAnswerButton(commentData.id)}
            />
        </Styled.CommentaryBoxContainer>
    )
  }
  