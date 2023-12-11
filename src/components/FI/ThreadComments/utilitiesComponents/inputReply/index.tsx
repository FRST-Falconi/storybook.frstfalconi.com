import { SetStateAction, useState } from 'react'
import InputComment from '@components/input-comment';
import { useTranslation } from 'react-i18next'
import MiniButton from '@components/mini-button';
import * as Styled from './inputReply.styles';
import {IInputReply} from './inputReply.types';


export const InputReply = ({ textPlaceHolder, onClickPublishButton}: IInputReply) => {
    const [commentData, setCommentData] = useState('');

    const { t } = useTranslation();
    const limitInput = 800;

    const OnChangeComment = (e: { target: { value: SetStateAction<string>; }; }) => {
        setCommentData(e.target.value);
    }

    return (
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
  