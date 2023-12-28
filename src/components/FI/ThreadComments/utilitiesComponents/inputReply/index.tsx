import { useState, useRef, useEffect } from 'react';
import InputComment from '@components/input-comment';
import MiniButton from '@components/mini-button';
import * as Styled from './inputReply.styles';
import { IInputReply } from './inputReply.types';
import Avatar from '@components/avatar';
import Loading from '@components/DS/loading';
import { User } from '@components/input-comment/types';

export const InputReply = ({
  placeHolderText,
  getSearchUsers,
  onClickPublishButton,
  parentId,
  limitInput,
  publishButtonText,
  replyMentionedUser,
  imgProfile,
  styles,
  handleHiddenInput
}: IInputReply) => {
  const [comment, setComment] = useState<string>('');
  const [CaptureFormattedValue, setCaptureFormattedValue] = useState<string>('');
  const [captureMentions, setCaptureMentions] = useState<string[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target) && comment.length === 0) {
      handleHiddenInput();
    }
  };

  useEffect(() => {   
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [comment, handleHiddenInput]);

  const handlePublish = async () => {
    setIsLoading(true);
    await onClickPublishButton({
      comment,
      contentMention: CaptureFormattedValue,
      mentions: captureMentions,
      parentId
    });
    setIsLoading(false);
    handleHiddenInput();
    setComment('');
    setCaptureFormattedValue('');
    setCaptureMentions([]);
  };

  let timeout;
  const setCommentData = (value: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setComment(value);
    }, 300);
  };

  const handleSearchUsers = async (value: string) => {
    const response = await getSearchUsers(value);
    setUsers(response?.data?.results || response);
  };

  return (
    <Styled.Container>
      <Avatar src={imgProfile} size="32px" style={{ marginTop: '55px', marginRight: '8px' }} />
      <Styled.InputContainer ref={inputRef} style={{ ...styles }}>
        <InputComment
          styles={{ width: '100%', marginTop: '22.5px' }}
          className="userComment"
          onChange={(e: string) => {
            handleSearchUsers(e);
          }}
          value={comment}
          placeholder={placeHolderText}
          limit={limitInput}
          showCharacterCounter={true}
          onContentUnformat={(unformattedValue: string) => setCommentData(unformattedValue)}
          onContentFormat={(formattedValue: string) => setCaptureFormattedValue(formattedValue)}
          onSendMentions={(mentions: string[]) => setCaptureMentions(mentions)}
          users={users}
        />

        <MiniButton
          disabled={comment.length <= 0 || isLoading}
          label={publishButtonText}
          onClick={() => handlePublish()}
          variant="primary"
          styles={{ marginLeft: 'auto', marginTop: '15px' }}
        />
        {isLoading && <Loading />}
      </Styled.InputContainer>
    </Styled.Container>
  );
};