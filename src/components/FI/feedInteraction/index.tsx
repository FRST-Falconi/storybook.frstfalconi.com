import * as Styles from './feedInteractionStyles'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import * as Icons from '@shared/icons'
import { useState } from 'react'
import Rating from '@components/EBR/rating'
import Avatar from '@components/avatar'
import InputComment from '@components/input-comment'
import CommentaryBox from '@components/commentary-box'

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

export function RocketFilled() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2815_4879)">
          <rect width="24" height="24" fill="white"/>
          <path d="M7.5 6.3125L12 1.5L16.5 6.3125V18H7.5V6.3125Z" fill="#0645AD" stroke="#0645AD" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M16.5 18H21C20.1 12.8571 18 12 16.5 12V18Z" fill="#0645AD" stroke="#0645AD" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M7.5 18H3C3.9 12.8571 6 12 7.5 12V18Z" fill="#0645AD" stroke="#0645AD" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M15.4186 20.0076C15.6225 20.0386 15.8298 19.992 16.0094 19.8756C16.31 19.6853 16.4965 19.3203 16.5 18.9242C16.5 18.5165 16.2996 18.1747 15.9956 18H8.00442C7.70384 18.1709 7.5 18.5126 7.5 18.9242C7.5 19.3164 7.68657 19.6775 7.98714 19.8717C8.16589 19.9873 8.37311 20.035 8.57793 20.0076L9.25163 19.9105L9.34837 20.6677C9.53493 22.1394 10.675 23.25 11.9983 23.25C13.3215 23.25 14.4616 22.1394 14.6482 20.6677L14.7449 19.9144L15.4186 20.0076Z" fill="#0645AD" stroke="#0645AD" stroke-width="1.5" stroke-linejoin="round"/>
          <rect x="-1395" y="-551" width="11996" height="6456" stroke="#0038FF" stroke-width="50"/>
          <path d="M11.2929 8.95711C11.1054 8.76957 11 8.51522 11 8.25C11 7.98478 11.1054 7.73043 11.2929 7.54289C11.4804 7.35536 11.7348 7.25 12 7.25C12.2652 7.25 12.5196 7.35536 12.7071 7.54289C12.8946 7.73043 13 7.98478 13 8.25C13 8.51522 12.8946 8.76957 12.7071 8.95711C12.5196 9.14464 12.2652 9.25 12 9.25C11.7348 9.25 11.4804 9.14464 11.2929 8.95711Z" fill="white" stroke="white"/>
        </g>
        <defs>
          <clipPath id="clip0_2815_4879">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
  
    )
  }

export default function FeedInteraction ( props : IFeedInteraction ) {
    const [isLiked, setIsLiked] = useState(props.isLiked);
    const [openReview, setOpenReview] = useState(false);
    const [openComments, setOpenComments] = useState(false);
    const [loadCommentsText, setLoadCommentsText] = useState(props.commentList?.length < 2 ? false : true);
    const [showMoreComments, setShowMoreComments] = useState(false);

    const OnLikeClick = () => {
        setIsLiked(!isLiked)
        props.handleLikeClick
    }

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
                        <Styles.buttons onClick={props.handleLikeClick} >
                            <Icons.ThumbsUpIcon fill={FRSTTheme['colors'].linkOnfocus} /> &nbsp;{props.textDeslike}
                        </Styles.buttons>
                        :
                        <Styles.buttons onClick={props.handleLikeClick}>
                            <Icons.ThumbsUpIcon fill={FRSTTheme['colors'].linkOnfocus} /> &nbsp;{props.textLikes}
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