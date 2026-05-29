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
import { ThumbsUp } from 'lucide-react'

const DEFAULT_PRIMARY_COLOR = '#FF8A15'

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
  totalLikes = 0,
  showAnswersButton,
  versionFeed,
  primaryColor = DEFAULT_PRIMARY_COLOR,
  unlikedButtonText
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

  const renderMenuMore = () => {
    if (!showOptions) return <div />

    if (isAuthor) {
      return (
        <Styled.MenuMoreContainer darkMode={darkMode}>
          <MenuMore isDarkMode={darkMode} options={authorOptions} style={{}} closeAfterClick={true} isHover={false} />
        </Styled.MenuMoreContainer>
      )
    }

    if (isOwnerPost) {
      return (
        <Styled.MenuMoreContainer darkMode={darkMode}>
          <MenuMore isDarkMode={darkMode} options={ownerPost} style={{}} closeAfterClick={true} isHover={false} />
        </Styled.MenuMoreContainer>
      )
    }

    return (
      <Styled.MenuMoreContainer darkMode={darkMode}>
        <MenuMore isDarkMode={darkMode} options={[]} isHover={false} />
      </Styled.MenuMoreContainer>
    )
  }

  const renderCommentContent = () => (
    <Styled.TextContainer id="textContainerId">
      {versionFeed ? (
        <Styled.FeedText
          $primaryColor={primaryColor}
          style={isExpanded ? { display: 'block' } : { display: '-webkit-box' }}
          id={iDCommentPosted}
          dangerouslySetInnerHTML={{
            __html: buildStringWithLinkHTML(commentTextWithMention ? commentTextWithMention : commentText)
          }}
        />
      ) : (
        <Styled.Text
          $primaryColor={primaryColor}
          style={isExpanded ? { display: 'block' } : { display: '-webkit-box' }}
          id={iDCommentPosted}
          dangerouslySetInnerHTML={{
            __html: buildStringWithLinkHTML(commentTextWithMention ? commentTextWithMention : commentText)
          }}
          darkMode={darkMode}
        />
      )}
      <Styled.ShowMore darkMode={darkMode} isVisible={isEllipsisVisible} onClick={toggleExpand}>
        {isExpanded ? showLessText : showMoreText}
      </Styled.ShowMore>
    </Styled.TextContainer>
  )

  const renderFeedActions = () => (
    <Styled.FeedActions>
      {showLikeButton && (
        <Styled.FeedAction
          $primaryColor={primaryColor}
          type="button"
          onClick={itsLiked ? handleUnlike : handleLike}
          disabled={loadingLike}
        >
          {itsLiked ? unlikedButtonText : likeButtonText}
        </Styled.FeedAction>
      )}
      {showAnswersButton && (
        <Styled.FeedAction $primaryColor={primaryColor} type="button" onClick={actionAnswer}>
          {answerButtonText}
        </Styled.FeedAction>
      )}
      {renderMenuMore()}
    </Styled.FeedActions>
  )

  const renderDefaultActions = () => (
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
                        fontFamily: 'Poppins, sans-serif',
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
            </Styled.FlexButtonContainer>
          </Tooltip>
          <span style={{color: itsLiked ? '#F26818' : (darkMode ? "#EBEBEB" : "#444"),
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 700
          }}>
            {likesCount}
          </span>
        </>
      )}

      {showAnswersButton &&
        <MiniButton darkMode={darkMode} variant="terciary" onClick={actionAnswer} label={answerButtonText} styles={{color: darkMode ? '#EBEBEB' : '#444444'}} />
      }
      {renderMenuMore()}
    </Styled.InteractiveButtonsContainer>
  )

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styled.Container style={{ ...styles }} $versionFeed={versionFeed}>
        <div style={{ position: 'relative' }}>
          <Avatar
            size={versionFeed ? '40px' : isMainComment ? '48px' : '32px'}
            src={imgProfile}
            onClick={onClickUserInfo}
            style={{ cursor: hasActionToClickOnAvatar ? 'pointer' : 'default', marginRight: versionFeed ? '0' : '6px' }}
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
          versionFeed ? (
            <Styled.FeedBody>
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
                primaryColor={primaryColor}
              />
            </Styled.FeedBody>
          ) : (
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
              primaryColor={primaryColor}
            />
          )
        ) : versionFeed ? (
          <Styled.FeedBody>
            <Styled.FeedBubble id={`comment_${commentUuid}`}>
              <Styled.FeedHeader>
                <div>
                  <Styled.FeedAuthor>{userName}</Styled.FeedAuthor>
                  <Styled.FeedTime>                
                    {userOffice && userOffice} {userCompany && `• ${userCompany}`} {howLongAgo && `• ${howLongAgo}`}
                  </Styled.FeedTime>
                </div>
                {likesCount > 0 ? (
                  <Styled.LikeBadge $primaryColor={primaryColor}>
                    <ThumbsUp size={12} fill={primaryColor} color={primaryColor} />
                    {likesCount}
                  </Styled.LikeBadge>
                ) : null}
              </Styled.FeedHeader>
              {relationToPhaseText ? (
                <Styled.FeedRelationText>{relationToPhaseText}</Styled.FeedRelationText>
              ) : null}
              {renderCommentContent()}
            </Styled.FeedBubble>
            {!isModeEdit && renderFeedActions()}
          </Styled.FeedBody>
        ) : (
          <Styled.Box id={`comment_${commentUuid}`} darkMode={darkMode}>
            <Styled.UserDataContainer>
              <Styled.FirstChildUserData>
                <Styled.Username darkMode={darkMode}>{userName}</Styled.Username>
              </Styled.FirstChildUserData>
              <Styled.UserDataLastChild darkMode={darkMode}>
                {userOffice && userOffice} {userCompany && `• ${userCompany}`} {howLongAgo && `• ${howLongAgo}`}
              </Styled.UserDataLastChild>
            </Styled.UserDataContainer>
            {relationToPhaseText && <Styled.RelationContainer>{relationToPhaseText}</Styled.RelationContainer>}
            {renderCommentContent()}
          </Styled.Box>
        )}
      </Styled.Container>

      {!isModeEdit && !versionFeed && renderDefaultActions()}
    </ThemeProvider>
  )
}
