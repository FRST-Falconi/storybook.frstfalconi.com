import * as Styled from './CommentaryBoxV2.styles'
import Avatar from '@components/avatar'
import { ICommentaryBoxV2 } from './CommentaryBoxV2.types'
import { EditIcon, IconLikeFilled, IconLikeLine, TrashIconNew } from '@shared/icons'
import MiniButton from '@components/mini-button'
import MenuMore from '@components/menu-more'
import { buildStringWithLinkHTML, createUUID } from '../../utilityFunctions/'
import { useEffect, useLayoutEffect, useState } from 'react'
import { FRSTTheme } from '../../theme'
import { ThemeProvider } from 'styled-components'
import { InputEdit } from './utilitiesComponents'

export const CommentaryBoxV2 = ({
  userName,
  imgProfile,
  userCompany,
  userOffice,
  showMoreText,
  relationToPhaseText,
  showLessText,
  showLikeButton,
  styles,
  actionLike,
  answerButtonText,
  likeButtonText,
  commentTextWithMention,
  editText,
  deleteText,
  isAuthor,
  isOwnerPost,
  howLongAgo,
  commentId,
  commentUuid,
  commentText,
  actionAnswer,
  actionUserInfo,
  actionEditComment,
  actionDeleteComment,
  isMainComment,
  likesCount,
  hasActionToClickOnAvatar,
  showOptions,
  itsLiked,
  limitInput = 800,
  saveButtonText,
  cancelButtonText,
  orText,
  groupUuid,
  limitMessageExceeded
}: ICommentaryBoxV2) => {
  const iDCommentPosted = commentId ? commentId : `IDCommentPosted-${createUUID()}`
  const [isLiked, setIsLiked] = useState(itsLiked)
  const [isModeEdit, setIsModeEdit] = useState(false)

  const edit = {
    description: editText,
    startIcon: <EditIcon fill="#222" />,
    onClick: () => setIsModeEdit(true)
  }
  const exclude = {
    description: deleteText,
    startIcon: <TrashIconNew fill="#C1341A" />,
    onClick: () => actionDeleteComment(commentUuid),
    color: '#C1341A'
  }

  const authorOptions = [edit, exclude]

  const ownerPost = [exclude]

  const handleLike = () => {
    try {
      actionLike(!isLiked)
    } catch (error) {}

    setIsLiked(!isLiked)
  }

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const [isEllipsisVisible, setIsEllipsisVisible] = useState(false)

  useEffect(() => {
    const textContainer = document.getElementById(iDCommentPosted)
    if (textContainer) {
      setIsEllipsisVisible(textContainer.scrollHeight > textContainer.clientHeight)
    }
  }, [commentText])

  useLayoutEffect(() => {
    const handleResize = () => {
      const textContainer = document.getElementById(iDCommentPosted)
      if (textContainer) {
        setIsEllipsisVisible(textContainer.scrollHeight > textContainer.clientHeight)
      }
    }
    window.addEventListener('resize', handleResize)

    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styled.Container style={{ ...styles }}>
        <Avatar
          size={isMainComment ? '48px' : '32px'}
          src={imgProfile}
          onClick={actionUserInfo}
          style={{ cursor: hasActionToClickOnAvatar ? 'pointer' : 'default', marginRight: '6px' }}
        />
        {isModeEdit ? (
          <InputEdit
            placeHolderText={'teste'}
            commentText={buildStringWithLinkHTML(commentText)}
            commentTextWithMention={commentTextWithMention && buildStringWithLinkHTML(commentTextWithMention)}
            editButtonText={saveButtonText}
            onClickEditButton={actionEditComment}
            limitInput={limitInput}
            cancelButtonText={cancelButtonText}
            orText={orText}
            limitMessageExceeded={limitMessageExceeded}
            commentUUID={commentUuid}
            setIsModeEdit={setIsModeEdit}
            group_uuid={groupUuid}
          />
        ) : (
          <Styled.Box>
            <Styled.UserDataContainer>
              <Styled.FirstChildUserData>
                <Styled.Username>{userName}</Styled.Username>
                {likesCount > 0 && (
                  <Styled.LikesContainer>
                    <Styled.IconLikeContainer>
                      <IconLikeFilled fill="#fff" stroke="#fff" customColor_1={'#757575'} width="16px" height="16px" />
                    </Styled.IconLikeContainer>
                    <p>{likesCount}</p>
                  </Styled.LikesContainer>
                )}
              </Styled.FirstChildUserData>
              <Styled.UserDataLastChild>
                {userOffice && userOffice} {userCompany && `• ${userCompany}`} {howLongAgo && `• ${howLongAgo}`}
              </Styled.UserDataLastChild>
            </Styled.UserDataContainer>
            {relationToPhaseText && <Styled.RelationContainer>{relationToPhaseText}</Styled.RelationContainer>}
            <Styled.TextContainer id="textContainerId">
              <Styled.Text
                style={isExpanded ? { display: 'block' } : { display: '-webkit-box' }}
                id={iDCommentPosted}
                dangerouslySetInnerHTML={{
                  __html: buildStringWithLinkHTML(commentTextWithMention ? commentTextWithMention : commentText)
                }}
              />
              <Styled.ShowMore isVisible={isEllipsisVisible} onClick={toggleExpand}>
                {isExpanded ? showLessText : showMoreText}
              </Styled.ShowMore>
            </Styled.TextContainer>
          </Styled.Box>
        )}
      </Styled.Container>

      {!isModeEdit && (
        <Styled.InteractiveButtonsContainer style={isMainComment ? { marginLeft: '55px' } : {}}>
          {showLikeButton && (
            <Styled.FlexButtonContainer onClick={handleLike}>
              {isLiked ? <IconLikeFilled /> : <IconLikeLine fill="#444" />}
              <MiniButton
                variant="terciary"
                onClick={handleLike}
                label={likeButtonText}
                active={isLiked}
                styles={{ padding: '0px' }}
              />
            </Styled.FlexButtonContainer>
          )}

          <MiniButton variant="terciary" onClick={actionAnswer} label={answerButtonText} />
          {showOptions ? (
            isAuthor ? (
              <Styled.MenuMoreContainer>
                <MenuMore options={authorOptions} style={{}} closeAfterClick={true} isHover={false} />
              </Styled.MenuMoreContainer>
            ) : isOwnerPost ? (
              <Styled.MenuMoreContainer>
                <MenuMore options={ownerPost} style={{}} closeAfterClick={true} isHover={false} />
              </Styled.MenuMoreContainer>
            ) : (
              <Styled.MenuMoreContainer>
                <MenuMore options={[]} isHover={false} />
              </Styled.MenuMoreContainer>
            )
          ) : (
            <div />
          )}
        </Styled.InteractiveButtonsContainer>
      )}
    </ThemeProvider>
  )
}
