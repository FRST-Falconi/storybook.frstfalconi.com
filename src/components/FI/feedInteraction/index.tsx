import * as Styles from './feedInteractionStyles'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import * as Icons from '@shared/icons'
import { useState } from 'react'
import Rating from '@components/EBR/rating'
import Avatar from '@components/avatar'
import InputComment from '@components/input-comment'
import CommentaryBox from '@components/commentary-box'
import Button from '@components/buttons'

interface IFeedInteraction {
    id: string
    qtdLikes: string
    qtdComments: string
    textLikes: string
    textDeslike: string
    textComments: string
    textAvaluation: string
    textAvaluationTitle: string
    isLiked: boolean
    isChallengeReview ?: boolean
    ratingImpacto?: number
    textImpacto?: string
    ratingRelevancia?: number
    textRelevancia ?: string
    isPostReview ?: boolean
    ratingPostReview ?: number

    textLatestComment ?: string
    userAvatar ?: string 
    userCommentPlaceholder?: string
    latestComment ?: any
    commentList ?: any[]
    textLoadMoreComments ?: string
    textSaveCommentBtn ?: string
    handleSaveCommentBtn ?: () => void

    style ?: React.CSSProperties
    onCommentChange ?: (e) => void
    handleLikeClick ?: () => void
    handleImpactoChange?: any
    handleRelevanciaChange?: any
    handlePostReviewChange ?: any
}

export default function FeedInteraction ( props : IFeedInteraction ) {
    const [openReview, setOpenReview] = useState(false);
    const [openComments, setOpenComments] = useState(false);
    const [loadCommentsText, setLoadCommentsText] = useState(props.commentList?.length < 2 ? false : true);
    const [showMoreComments, setShowMoreComments] = useState(false);
    const [focusComment, setFocusComment] = useState(false);

    const OnReviewClick = () => {
        setOpenReview(!openReview)
        setOpenComments(false)
    }

    const OnCommentsClick = () => {
        setOpenComments(!openComments)
        setOpenReview(false)
    }

    const OnLoadCommentsClick = () => {
        setLoadCommentsText(false)
        setShowMoreComments(true)
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Container style={{...props.style}}>
                {props.qtdLikes || props.qtdComments ?
                    <Styles.infoContent>
                        {props.qtdLikes ?
                            <Styles.info style={{left: 0}}> <Icons.ThumbsUpCovered /> &nbsp;{props.qtdLikes}</Styles.info>
                            : null
                        }
                        {props.qtdComments ?
                            <Styles.info style={{right: 0}}>{props.qtdComments}</Styles.info>
                            : null
                        }
                    </Styles.infoContent>
                    : null
                }
                <Styles.buttonsContent>
                    {props.isLiked ?
                        <Styles.buttons >
                            <Button startIcon={<Icons.ThumbsUpIcon fill={'currentColor'} />} label={props.textDeslike} variant='link' handleClick={props.handleLikeClick}  />
                        </Styles.buttons>
                        :
                        <Styles.buttons >
                            <Button startIcon={<Icons.ThumbsUpIcon fill={'currentColor'} />} label={props.textLikes} variant='link' handleClick={props.handleLikeClick}  />
                        </Styles.buttons>
                    }
                    <Styles.buttons onClick={OnCommentsClick} style={{color:openComments && FRSTTheme['colors'].linkPressed}}>
                        <Icons.TalkIcon fill={openComments ? FRSTTheme['colors'].linkPressed : FRSTTheme['colors'].linkOnfocus} /> &nbsp;{props.textComments}
                    </Styles.buttons>
                    <Styles.buttons onClick={OnReviewClick} style={{color:openReview && FRSTTheme['colors'].linkPressed}} >
                        <Icons.StarOutlined fill={openReview ? FRSTTheme['colors'].linkPressed : FRSTTheme['colors'].linkOnfocus} /> &nbsp;{props.textAvaluation}
                    </Styles.buttons>
                </Styles.buttonsContent>
                {openReview &&
                    <Styles.reviewContainer>
                        {props.textAvaluationTitle}
                        <Styles.reviewContent>
                            {props.isChallengeReview &&
                                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <Rating isVisibleNumberRating={false} orientation='horizontal' qtdStars={5} sizeStars={20} marginStars={'3.5px'} disabled={false} rating={props.ratingImpacto} handleRating={props?.handleImpactoChange} />
                                    <span>{props.textImpacto}</span>
                                </div>
                            }
                            {props.isChallengeReview &&
                                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: 24}}>
                                    <Rating isVisibleNumberRating={false} orientation='horizontal' qtdStars={5} sizeStars={20} marginStars={'3.5px'} disabled={false} rating={props.ratingRelevancia} handleRating={props?.handleRelevanciaChange} />
                                    <span>{props.textRelevancia}</span>
                                </div>
                            }
                            {props.isPostReview &&
                                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <Rating isVisibleNumberRating={false} orientation='horizontal' qtdStars={5} sizeStars={20} marginStars={'3.5px'} disabled={false} rating={props.ratingPostReview} handleRating={props?.handlePostReviewChange} />
                                </div>
                            }
                        </Styles.reviewContent>
                    </Styles.reviewContainer>
                }
                {openComments &&
                    <Styles.commentsContainer>
                        <Styles.comment onFocus={() => setFocusComment(currentValue => currentValue = true)} >
                            <Avatar size='40px' src={props.userAvatar} />
                            <InputComment styles={{width: '100%'}} 
                                IDInput='userComment' 
                                showCharacterCounter={false} 
                                className='userComment' 
                                hasEmoji={true} 
                                emojiWindowlanguage='pt' 
                                placeholder={props.userCommentPlaceholder? props.userCommentPlaceholder : ''} 
                                onChange={props.onCommentChange}
                            />
                            <Styles.submitButton style={{display: focusComment ? 'block' : 'none'}} >
                                <Button variant='primary' label={props.textSaveCommentBtn} handleClick={props.handleSaveCommentBtn}  />
                            </Styles.submitButton>
                        </Styles.comment>
                        {props.isChallengeReview ?
                            props.latestComment ?
                                <Styles.commentList>
                                    {props.textLatestComment}
                                    <Styles.comment>
                                        <Avatar size='40px' src={props.latestComment.avatar} />
                                        
                                        <CommentaryBox styles={{width: '100%'}}
                                            name={props.latestComment.name}
                                            date={props.latestComment.date}
                                            position={props.latestComment.position}
                                            value={props.latestComment.value}
                                            className={props.latestComment.className}
                                            onChange={props.latestComment.onChange}
                                            actionLike={props.latestComment.actionLike}
                                            textLiked={props.latestComment.textLike}
                                            textUnliked={props.latestComment.textDeslike}
                                            isLiked={props.latestComment.isLiked}
                                            totalLikes={props.latestComment.totalLikes}
                                            hasDropdown={props.latestComment.hasDropdown}
                                            isAuthor={props.latestComment.isAuthor}
                                            isMe={props.latestComment.isMe}
                                            actionDeleteComment={props.latestComment.actionDeleteComment}
                                            actionEditComment={props.latestComment.actionEditComment}
                                            actionAnswer={props.latestComment.actionAnswer}
                                            actionMakePrivate={props.latestComment.actionMakePrivate}
                                            actionUpdateValue={props.latestComment.actionUpdateValue}
                                            detectLinks={props.latestComment.detectLinks}
                                            hasAnswer={props.latestComment.hasAnswer}
                                            isPrivateAuthor={props.latestComment.isPrivateAuthor}
                                            isPrivateMe={props.latestComment.isPrivateMe}
                                            idTextComment={props.latestComment.idTextComment}
                                            textAnswer={props.latestComment.textAnswer}
                                            textCancelButton={props.latestComment.textCancelButton}
                                            textDeleteComment={props.latestComment.textDeleteComment}
                                            textEditComment={props.latestComment.textEditComment}
                                            textEdited={props.latestComment.textEdited}
                                            textMakePrivate={props.latestComment.textMakePrivate}
                                            textMakePublic={props.latestComment.textMakePublic}
                                            textPrivateComment={props.latestComment.textPrivateComment}
                                            textSaveButton={props.latestComment.textSaveButton}
                                            textSaveButtonMobile={props.latestComment.textSaveButtonMobile}
                                            textYou={props.latestComment.textYou}
                                            wasEdited={props.latestComment.wasEdited}
                                        />
                                    </Styles.comment>
                                </Styles.commentList>
                                : null
                            
                            :
                            props.commentList ?
                                <Styles.commentList>
                                    
                                    <Styles.comment>
                                        <Avatar size='40px' src={props.commentList[0].avatar} />
                                        
                                        <CommentaryBox styles={{width: '100%'}}
                                            name={props.commentList[0].name}
                                            date={props.commentList[0].date}
                                            position={props.commentList[0].position}
                                            value={props.commentList[0].value}
                                            className={props.commentList[0].className}
                                            onChange={props.commentList[0].onChange}
                                            actionLike={props.commentList[0].actionLike}
                                            textLiked={props.commentList[0].textLike}
                                            textUnliked={props.commentList[0].textDeslike}
                                            isLiked={props.commentList[0].isLiked}
                                            totalLikes={props.commentList[0].totalLikes}
                                            hasDropdown={props.commentList[0].hasDropdown}
                                            isAuthor={props.commentList[0].isAuthor}
                                            isMe={props.commentList[0].isMe}
                                            actionDeleteComment={props.commentList[0].actionDeleteComment}
                                            actionEditComment={props.commentList[0].actionEditComment}
                                            actionAnswer={props.commentList[0].actionAnswer}
                                            actionMakePrivate={props.commentList[0].actionMakePrivate}
                                            actionUpdateValue={props.commentList[0].actionUpdateValue}
                                            detectLinks={props.commentList[0].detectLinks}
                                            hasAnswer={props.commentList[0].hasAnswer}
                                            isPrivateAuthor={props.commentList[0].isPrivateAuthor}
                                            isPrivateMe={props.commentList[0].isPrivateMe}
                                            idTextComment={props.commentList[0].idTextComment}
                                            textAnswer={props.commentList[0].textAnswer}
                                            textCancelButton={props.commentList[0].textCancelButton}
                                            textDeleteComment={props.commentList[0].textDeleteComment}
                                            textEditComment={props.commentList[0].textEditComment}
                                            textEdited={props.commentList[0].textEdited}
                                            textMakePrivate={props.commentList[0].textMakePrivate}
                                            textMakePublic={props.commentList[0].textMakePublic}
                                            textPrivateComment={props.commentList[0].textPrivateComment}
                                            textSaveButton={props.commentList[0].textSaveButton}
                                            textSaveButtonMobile={props.commentList[0].textSaveButtonMobile}
                                            textYou={props.commentList[0].textYou}
                                            wasEdited={props.commentList[0].wasEdited}
                                        />
                                    </Styles.comment>
                                    {loadCommentsText &&
                                        <span style={{color: FRSTTheme['colors'].linkOnfocus, marginTop: 12, cursor: 'pointer'}} onClick={OnLoadCommentsClick}>{props.textLoadMoreComments}</span>
                                    }
                                    {showMoreComments &&
                                        <Styles.comment>
                                            <Avatar size='40px' src={props.commentList[1].avatar} />
                                            
                                            <CommentaryBox styles={{width: '100%'}}
                                                name={props.commentList[1].name}
                                                date={props.commentList[1].date}
                                                position={props.commentList[1].position}
                                                value={props.commentList[1].value}
                                                className={props.commentList[1].className}
                                                onChange={props.commentList[1].onChange}
                                                actionLike={props.commentList[1].actionLike}
                                                textLiked={props.commentList[1].textLike}
                                                textUnliked={props.commentList[1].textDeslike}
                                                isLiked={props.commentList[1].isLiked}
                                                totalLikes={props.commentList[1].totalLikes}
                                                hasDropdown={props.commentList[1].hasDropdown}
                                                isAuthor={props.commentList[1].isAuthor}
                                                isMe={props.commentList[1].isMe}
                                                actionDeleteComment={props.commentList[1].actionDeleteComment}
                                                actionEditComment={props.commentList[1].actionEditComment}
                                                actionAnswer={props.commentList[1].actionAnswer}
                                                actionMakePrivate={props.commentList[1].actionMakePrivate}
                                                actionUpdateValue={props.commentList[1].actionUpdateValue}
                                                detectLinks={props.commentList[1].detectLinks}
                                                hasAnswer={props.commentList[1].hasAnswer}
                                                isPrivateAuthor={props.commentList[1].isPrivateAuthor}
                                                isPrivateMe={props.commentList[1].isPrivateMe}
                                                idTextComment={props.commentList[1].idTextComment}
                                                textAnswer={props.commentList[1].textAnswer}
                                                textCancelButton={props.commentList[1].textCancelButton}
                                                textDeleteComment={props.commentList[1].textDeleteComment}
                                                textEditComment={props.commentList[1].textEditComment}
                                                textEdited={props.commentList[1].textEdited}
                                                textMakePrivate={props.commentList[1].textMakePrivate}
                                                textMakePublic={props.commentList[1].textMakePublic}
                                                textPrivateComment={props.commentList[1].textPrivateComment}
                                                textSaveButton={props.commentList[1].textSaveButton}
                                                textSaveButtonMobile={props.commentList[1].textSaveButtonMobile}
                                                textYou={props.commentList[1].textYou}
                                                wasEdited={props.commentList[1].wasEdited}
                                            />
                                        </Styles.comment>
                                    }
                                </Styles.commentList>
                                : null
                        }
                        
                        
                    </Styles.commentsContainer>
                }
                    
                
            </Styles.Container>
        </ThemeProvider>
    )
}