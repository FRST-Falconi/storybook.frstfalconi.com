import { SetStateAction, useState } from 'react'
import InputComment from '@components/input-comment';
import MiniButton from '@components/mini-button';
import * as Styled from './inputReply.styles';
import {IInputReply} from './inputReply.types';
import Avatar from '@components/avatar';


export const InputReply = ({ placeHolderText, onClickPublishButton, limitInput,publishButtonText, replyFor,imgProfile, styles, mentionUsers}: IInputReply) => {
    const [commentData, setCommentData] = useState(replyFor);
    const OnChangeComment = (text: string) => {
        setCommentData(text);
    }

    const [captureUnformattedValue, setCaptureUnformattedValue] = useState<string>("");
    const [CaptureFormattedValue, setCaptureFormattedValue] = useState<string>("");
    const [captureMentions, setCaptureMentions] = useState<string[]>();

    const handlePublish = () =>{
        console.log(captureUnformattedValue);
        console.log(CaptureFormattedValue);
        console.log(captureMentions);
        onClickPublishButton();
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
                    showCharacterCounter={true} users={mentionUsers}
                    onContentUnformat={((unformattedValue: string) => setCaptureUnformattedValue(unformattedValue))}
                    onContentFormat={((formattedValue: string) => setCaptureFormattedValue(formattedValue))}
                    onSendMentions={(mentions: string[]) => setCaptureMentions(mentions)}
                    />

                    <MiniButton disabled={captureUnformattedValue.length <= 0} label={publishButtonText} onClick={()=> handlePublish()} variant="primary" styles={{ marginLeft:'auto', marginTop:'15px'}}/>
            </Styled.InputContainer>
        </Styled.Container>

    )
  }
  