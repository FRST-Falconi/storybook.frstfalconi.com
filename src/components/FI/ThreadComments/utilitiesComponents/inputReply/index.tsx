import { useState } from 'react'
import InputComment from '@components/input-comment'
import MiniButton from '@components/mini-button'
import * as Styled from './inputReply.styles'
import { IInputReply } from './inputReply.types'
import Avatar from '@components/avatar'
import { User } from '@components/input-comment/types'

export const InputReply = ({
  placeHolderText,
  getSearchUsers,
  onClickPublishButton,
  parentId,
  limitInput,
  publishButtonText,
  replyFor,
  imgProfile,
  styles
}: IInputReply) => {
  const [comment, setComment] = useState<string>('')
  const [CaptureFormattedValue, setCaptureFormattedValue] = useState<string>('')
  const [captureMentions, setCaptureMentions] = useState<string[]>([])
  const [users, setUsers] = useState<User[]>([])

  const handlePublish = async () => {
    console.log(comment);
    console.log(parentId)
    await onClickPublishButton({
      comment,
      contentMention: CaptureFormattedValue,
      mentions: captureMentions,
      parentId: parentId
    });
    setComment('')
    setCaptureFormattedValue('')
    setCaptureMentions([])
  }

  let timeout
  const setCommentData = (value: string) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      setComment(value)
    }, 500)
  }

  const handleSearchUsers = async (value: string) => {
    const response = await getSearchUsers(value)
    setUsers(response.data.results)
  }

  return (
    <Styled.Container>
      <Avatar src={imgProfile} size="32px" style={{ marginTop: '55px', marginRight: '8px' }} />
      <Styled.InputContainer style={{ ...styles }}>
        <InputComment
          styles={{ width: '100%', marginTop: '22.5px' }}
          className="userComment"
          onChange={(e: string) => {
            handleSearchUsers(e)
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
          disabled={comment.length <= 0}
          label={publishButtonText}
          onClick={() => handlePublish()}
          variant="primary"
          styles={{ marginLeft: 'auto', marginTop: '15px' }}
        />
      </Styled.InputContainer>
    </Styled.Container>
  )
}
