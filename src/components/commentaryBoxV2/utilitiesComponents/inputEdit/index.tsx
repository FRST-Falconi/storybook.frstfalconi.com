import Loading from '@components/DS/loading'
import InputComment from '@components/input-comment'
import { User } from '@components/input-comment/types'
import MiniButton from '@components/mini-button'
import { useRef, useState } from 'react'
import * as Styled from './inputEdit.styles'
import { IInputEdit } from './inputEdit.types'

export const InputEdit = ({
  placeHolderText,
  commentText,
  commentTextWithMention,
  getSearchUsers,
  onClickEditButton,
  limitInput,
  editButtonText,
  cancelButtonText,
  orText,
  limitMessageExceeded,
  commentUUID,
  group_uuid,
  setIsModeEdit
}: IInputEdit) => {
  const [comment, setComment] = useState<string>(commentText)
  const [CaptureFormattedValue, setCaptureFormattedValue] = useState<string>(commentTextWithMention)
  const [captureMentions, setCaptureMentions] = useState<string[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef(null)

  const handlePublish = async () => {
    setIsLoading(true)
    await onClickEditButton({
      commentUuid: commentUUID,
      content: comment,
      contentMention: CaptureFormattedValue,
      mentions: captureMentions
    })
    setIsLoading(false)
    setIsModeEdit(false)
    setComment('')
    setCaptureFormattedValue('')
    setCaptureMentions([])
  }

  let timeout
  const setCommentData = (value: string) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      setComment(value)
    }, 300)
  }

  const handleSearchUsers = async (value: string) => {
    const response = await getSearchUsers(value)
    setUsers(response?.data?.results || response)
  }

  return (
    <Styled.Container>
      <Styled.InputContainer ref={inputRef} style={{ width: '100%' }}>
        <InputComment
          styles={{ width: '100%' }}
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
          group_uuid={group_uuid}
          limitMessageExceeded={limitMessageExceeded}
          initialText={CaptureFormattedValue || comment}
        />
      </Styled.InputContainer>
      <Styled.ButtonsContainer>
        <MiniButton label={cancelButtonText} onClick={() => setIsModeEdit(false)} variant={'secondary'} />

        <Styled.SpanText>{orText}</Styled.SpanText>

        <MiniButton
          disabled={comment.length <= 0 || comment.length > limitInput || isLoading}
          label={editButtonText}
          onClick={() =>
            onClickEditButton({
              commentUuid: commentUUID,
              content: comment,
              contentMention: CaptureFormattedValue,
              mentions: captureMentions
            })
          }
          variant="primary"
          styles={{}}
        />
      </Styled.ButtonsContainer>
      {isLoading && <Loading />}
    </Styled.Container>
  )
}
