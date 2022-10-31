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

    style ?: React.CSSProperties
    onCommentChange ?: () => void
    handleLikeClick ?: () => void
    handleImpactoChange?: any
    handleRelevanciaChange?: any
    handlePostReviewChange ?: any
}

export default function FeedInteraction ( props : IFeedInteraction ) {
    const [isLiked, setIsLiked] = useState(props.isLiked);
    const [openReview, setOpenReview] = useState(false);
    const [openComments, setOpenComments] = useState(false);
    const [loadCommentsText, setLoadCommentsText] = useState(props.commentList?.length < 2 ? false : true);
    const [showMoreComments, setShowMoreComments] = useState(false);


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
                <Styles.infoContent>
                    <Styles.info> <Icons.ThumbsUpCovered /> &nbsp;{props.qtdLikes}</Styles.info>
                    <Styles.info>{props.qtdComments}</Styles.info>
                </Styles.infoContent>
                <Styles.buttonsContent>
                    {isLiked ?
                        <Styles.buttons >
                            <Button startIcon={<Icons.ThumbsUpIcon fill={'currentColor'} />} label={props.textDeslike} variant='link' handleClick={props.handleLikeClick}  />
                        </Styles.buttons>
                        :
                        <Styles.buttons onClick={props.handleLikeClick}>
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
                                    <Rating isVisibleNumberRating={false} orientation='horizontal' qtdStars={5} sizeStars={20} marginStars={'3.5px'} disabled={false} rating={props.ratingImpacto} handleRating={props.handleImpactoChange} />
                                    <span>{props.textImpacto}</span>
                                </div>
                            }
                            {props.isChallengeReview &&
                                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: 24}}>
                                    <Rating isVisibleNumberRating={false} orientation='horizontal' qtdStars={5} sizeStars={20} marginStars={'3.5px'} disabled={false} rating={props.ratingRelevancia} handleRating={props.handleRelevanciaChange} />
                                    <span>{props.textRelevancia}</span>
                                </div>
                            }
                            {props.isPostReview &&
                                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <Rating isVisibleNumberRating={false} orientation='horizontal' qtdStars={5} sizeStars={20} marginStars={'3.5px'} disabled={false} rating={props.ratingPostReview} handleRating={props.handlePostReviewChange} />
                                </div>
                            }
                        </Styles.reviewContent>
                    </Styles.reviewContainer>
                }
                {openComments &&
                    <Styles.commentsContainer>
                        <Styles.comment>
                            <Avatar size='40px' src={props.userAvatar} />
                            <InputComment styles={{width: '100%', height: 48}} 
                                IDInput='userComment' 
                                showCharacterCounter={false} 
                                className='userComment' 
                                hasEmoji={true} 
                                emojiWindowlanguage='pt' 
                                placeholder={props.userCommentPlaceholder? props.userCommentPlaceholder : ''} 
                                onChange={props.onCommentChange}
                            />
                        </Styles.comment>
                        {props.isChallengeReview ?
                            <Styles.commentList>
                                {props.textLatestComment}
                                <Styles.comment>
                                    <Avatar size='40px' src={props.latestComment.avatar} />
                                    
                                    <CommentaryBox styles={{width: '100%'}}
                                        name={props.latestComment.name}
                                        date={props.latestComment.date}
                                        position={props.latestComment.position}
                                        value={props.latestComment.value}
                                        className='latestComment'
                                        onChange={props.latestComment.onChange}
                                        actionLike={props.latestComment.handleLike}
                                        textLiked={props.latestComment.textLike}
                                        textUnliked={props.latestComment.textDeslike}
                                        isLiked={props.latestComment.isLiked}
                                    />
                                </Styles.comment>
                            </Styles.commentList>
                            :
                            <Styles.commentList>
                                
                                <Styles.comment>
                                    <Avatar size='40px' src={props.commentList[0].avatar} />
                                    
                                    <CommentaryBox styles={{width: '100%'}}
                                        name={props.commentList[0].name}
                                        date={props.commentList[0].date}
                                        position={props.commentList[0].position}
                                        value={props.commentList[0].value}
                                        className='latestComment'
                                        onChange={props.commentList[0].onChange}
                                        actionLike={props.commentList[0].handleLike}
                                        textLiked={props.commentList[0].textLike}
                                        textUnliked={props.commentList[0].textDeslike}
                                        isLiked={props.commentList[0].isLiked}
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
                                            className='secondToLastComment'
                                            onChange={props.commentList[1].onChange}
                                            actionLike={props.commentList[1].handleLike}
                                            textLiked={props.commentList[1].textLike}
                                            textUnliked={props.commentList[1].textDeslike}
                                            isLiked={props.commentList[1].isLiked}
                                        />
                                    </Styles.comment>
                                }
                            </Styles.commentList>
                        }
                        
                        
                    </Styles.commentsContainer>
                }
                    
                
            </Styles.Container>
        </ThemeProvider>
    )
}