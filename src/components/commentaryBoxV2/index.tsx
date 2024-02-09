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
import { Tooltip } from '@mui/material'

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
  actionUnlike,
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
  onClickUserInfo,
  actionEditComment,
  actionDeleteComment,
  isMainComment,
  hasActionToClickOnAvatar,
  showOptions,
  limitInput = 800,
  saveButtonText,
  cancelButtonText,
  orText,
  groupUuid,
  limitMessageExceeded,
  placeHolderText,
  getSearchUsers,
  likes,
  loggedInUser,
  showInterconnectionLine = false,
  darkMode,
  isLiked,
  totalLikes = 0
}: ICommentaryBoxV2) => {
  const iDCommentPosted = commentId ? commentId.toString() : `IDCommentPosted-${createUUID()}`
  const [isModeEdit, setIsModeEdit] = useState(false)
  const [loadingLike, setLoadingLike] = useState(false)
  const itsLiked = likes?.length > 0 ? likes?.some((like) => like.user_uuid === loggedInUser.id) : isLiked
  const likesCount = likes?.length > 0 ? likes?.length : totalLikes
  const likeId =
    likes?.find((like) => like.user_uuid === loggedInUser.id || like.user?.uuid === loggedInUser.id)?.id || null

  const edit = {
    description: editText,
    startIcon: <EditIcon fill={darkMode ? '#FFFFFF' : "#222"} />,
    onClick: () => setIsModeEdit(true),
    color: darkMode ? '#FFFFFF' : "#222"
  }
  const exclude = {
    description: deleteText,
    startIcon: <TrashIconNew fill={darkMode ? '#FF4D3E' : "#C1341A"} />,
    onClick: () => actionDeleteComment(commentUuid),
    color: darkMode ? '#FF4D3E' : '#C1341A'
  }

  const authorOptions = [edit, exclude]

  const ownerPost = [exclude]

  const handleLike = async () => {
    try {
      setLoadingLike(true)
      await actionLike(commentId)
    } catch (error) {
      console.log('error:', error)
    } finally {
      setLoadingLike(false)
    }
  }

  const handleUnlike = async () => {
    try {
      setLoadingLike(true)
      await actionUnlike(likeId ? likeId : commentId.toString())
    } catch (error) {
      console.log('error:', error)
    } finally {
      setLoadingLike(false)
    }
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
        <div style={{ position: 'relative' }}>
          <Avatar
            size={isMainComment ? '48px' : '32px'}
            src={imgProfile}
            onClick={onClickUserInfo}
            style={{ cursor: hasActionToClickOnAvatar ? 'pointer' : 'default', marginRight: '6px' }}
          />
          {showInterconnectionLine && (
            <div
              style={{
                height: '100%',
                width: '2px',
                position: 'absolute',
                left: '16px',
                top: '40px',
                backgroundColor: '#D1D5DB'
              }}
            />
          )}
        </div>

        {isModeEdit ? (
          <InputEdit
            placeHolderText={placeHolderText}
            commentText={buildStringWithLinkHTML(commentText)}
            commentTextWithMention={commentTextWithMention && buildStringWithLinkHTML(commentTextWithMention)}
            editButtonText={saveButtonText}
            onClickEditButton={actionEditComment}
            limitInput={limitInput}
            cancelButtonText={cancelButtonText}
            orText={orText}
            limitMessageExceeded={limitMessageExceeded}
            commentId={commentId}
            setIsModeEdit={setIsModeEdit}
            group_uuid={groupUuid}
            getSearchUsers={getSearchUsers}
            darkMode={darkMode}
          />
        ) : (
          <Styled.Box id={`comment_${commentUuid}`} darkMode={darkMode}>
            <Styled.UserDataContainer>
              <Styled.FirstChildUserData>
                <Styled.Username darkMode={darkMode}>{userName}</Styled.Username>
                {/* {likesCount > 0 && (
                  <Styled.LikesContainer>
                    <Styled.IconLikeContainer>
                      <IconLikeFilled fill="#fff" stroke="#fff" customColor_1={'#757575'} width="16px" height="16px" />
                    </Styled.IconLikeContainer>
                    <p>{likesCount}</p>
                  </Styled.LikesContainer>
                )} */}
              </Styled.FirstChildUserData>
              <Styled.UserDataLastChild darkMode={darkMode}>
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
                darkMode={darkMode}
              />
              <Styled.ShowMore darkMode={darkMode} isVisible={isEllipsisVisible} onClick={toggleExpand}>
                {isExpanded ? showLessText : showMoreText}
              </Styled.ShowMore>
            </Styled.TextContainer>
          </Styled.Box>
        )}
      </Styled.Container>

      {!isModeEdit && (
        <Styled.InteractiveButtonsContainer style={isMainComment ? { marginLeft: '55px' } : {}}>
          {showLikeButton && (
            <>
              <Tooltip
                title={itsLiked ? 'Remover curtida' : 'Curtir'}
                placement='bottom'
                arrow
                slotProps={{
                    popper: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, 0]
                                }
                            }
                        ],
                    },
                    tooltip: {
                        sx: {
                            backgroundColor: darkMode ? '#323232' : '#FFFFFF',
                            fontFamily: 'PT Sans',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: 1.3,
                            textAlign: 'center',
                            color: darkMode ? '#FFFFFF' : '#757575',
                            border: darkMode ? '1px solid #323232' : '1px solid #BDBDBD',
                            boxShadow: '0px 25px 18px -20px #22222233'
                        }
                    },
                    arrow: {
                        sx:{
                            ":before": {
                                border: darkMode ? '1px solid #323232' : '1px solid #BDBDBD'
                            },
                            color: darkMode ? '#323232' : '#FFFFFF'
                        }
                    }
                }}
              >
                <Styled.FlexButtonContainer
                  onClick={itsLiked ? handleUnlike : handleLike}
                  style={{
                    cursor: loadingLike ? 'not-allowed !important' : 'pointer',
                    pointerEvents: loadingLike ? 'none' : 'auto'
                  }}
                  darkMode={darkMode}
                >
                  {itsLiked ? 
                    <IconLikeFilled customColor_1={darkMode ? '#151515' : '#FFFFFF'} /> 
                    : 
                    <IconLikeLine fill={darkMode ? "#EBEBEB" : "#444"} />
                  }
                  {/* <MiniButton
                    variant="terciary"
                    onClick={() => {}}
                    label={likeButtonText}
                    active={itsLiked}
                    styles={{
                      padding: '0px',
                      cursor: loadingLike ? 'not-allowed !important' : 'pointer',
                      pointerEvents: loadingLike ? 'none' : 'auto'
                    }}
                  /> */}
                </Styled.FlexButtonContainer>
              </Tooltip>
              <span style={{color: itsLiked ? '#F26818' : (darkMode ? "#EBEBEB" : "#444"),
                fontFamily: 'PT Sans',
                fontSize: '14px',
                fontWeight: 700
              }}>
                {likesCount}
              </span>
            </>
          )}

          <MiniButton darkMode={darkMode} variant="terciary" onClick={actionAnswer} label={answerButtonText} styles={{color: darkMode ? '#EBEBEB' : '#444444'}} />
          {showOptions ? (
            isAuthor ? (
              <Styled.MenuMoreContainer darkMode={darkMode} >
                <MenuMore isDarkMode={darkMode} options={authorOptions} style={{}} closeAfterClick={true} isHover={false} />
              </Styled.MenuMoreContainer>
            ) : isOwnerPost ? (
              <Styled.MenuMoreContainer darkMode={darkMode} >
                <MenuMore isDarkMode={darkMode} options={ownerPost} style={{}} closeAfterClick={true} isHover={false} />
              </Styled.MenuMoreContainer>
            ) : (
              <Styled.MenuMoreContainer darkMode={darkMode} >
                <MenuMore isDarkMode={darkMode} options={[]} isHover={false} />
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
