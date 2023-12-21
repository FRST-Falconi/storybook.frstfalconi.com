import { SetStateAction, useState } from 'react'
import InputComment from '@components/input-comment';
import MiniButton from '@components/mini-button';
import * as Styled from './inputReply.styles';
import {IInputReply} from './inputReply.types';
import Avatar from '@components/avatar';


export const InputReply = ({ placeHolderText, onClickPublishButton, limitInput,publishButtonText, replyFor,imgProfile, styles, mentionUsers}: IInputReply) => {
    const [commentData, setCommentData] = useState(replyFor);
    const OnChangeComment = (e: any) => {
        setCommentData(e.target.value);
    }

    return (
        <Styled.Container>
            <Avatar src={imgProfile} size='32px' style={{marginTop:'55px', marginRight:'8px'}}/>
            <Styled.InputContainer style={{...styles}}>
                <InputComment
                    styles={{ width: '100%', marginTop: '22.5px' }}
                    className='userComment'
                    onChange={OnChangeComment}
                    placeholder={placeHolderText}
                    limit={limitInput}
                    showCharacterCounter={true} users={mentionUsers}/>

                    <MiniButton disabled={commentData.length <= 0} label={publishButtonText} onClick={()=> onClickPublishButton()} variant="primary" styles={{ marginLeft:'auto', marginTop:'15px'}}/>
            </Styled.InputContainer>
        </Styled.Container>

    )
  }
  