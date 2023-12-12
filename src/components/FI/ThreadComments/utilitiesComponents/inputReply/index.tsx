import { SetStateAction, useState } from 'react'
import InputComment from '@components/input-comment';
import MiniButton from '@components/mini-button';
import * as Styled from './inputReply.styles';
import {IInputReply} from './inputReply.types';


export const InputReply = ({ placeHolderText, onClickPublishButton, limitInput,publishButtonText,idInput, replyFor}: IInputReply) => {
    const [commentData, setCommentData] = useState(replyFor);

    const OnChangeComment = (e: { target: { value: SetStateAction<string>; }; }) => {
        setCommentData(e.target.value);
    }

    return (
            <Styled.InputContainer>
                <InputComment
                    styles={{width:'100%'}}
                    IDInput={idInput}
                    className='userComment'
                    hasEmoji={true} 
                    emojiWindowlanguage='pt'
                    onChange={OnChangeComment}
                    value={commentData}
                    placeholder={placeHolderText}
                    limit={limitInput} 
                    remain={limitInput - commentData.length}
                    showCharacterCounter={true}/>

                    <MiniButton disabled={commentData.length <= 0} label={publishButtonText} onClick={()=> onClickPublishButton()} variant="primary" styles={{ marginLeft:'auto', marginTop:'15px'}}/>
            </Styled.InputContainer>
    )
  }
  