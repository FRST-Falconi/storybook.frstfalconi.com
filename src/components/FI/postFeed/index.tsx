import Avatar from '@components/avatar'
import Button from '@components/buttons'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import FeedInteraction from '../feedInteraction'
import * as Styles from './postFeedStyles' 

import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react'

interface IPostFeed{
    title: string
    description: string
    style?: React.CSSProperties

    postImage?: string
    postVideoId?: string
    videoWidth?: string
    videoHeight?: string

    textPostButton?: string
    handlePostButtonClick?: () => void

/**
 * Feed Interaction props
 */
    postId?: string
    isPostLiked?: boolean
    qtdComments?: string
    qtdLikes?: string
    userAvatar?: string
    textAvaluation?: string
    textAvaluationTitle?: string
    textComments?: string
    textLikes?: string
    textDeslike?: string
    userCommentPlaceholder?: string
    textLoadMoreComments?: string
    textSaveCommentBtn?: string
    isDisabledAvaluation?: boolean
    ratingPostReview?: number
    commentList?: any
    handleLikeClick?: () => void
    handlePostReviewChange?: () => void
    handleSaveCommentBtn?: (comment) => void
    onCommentChange?: (e) => void,
    isVisibleComments?: boolean,
    videoSource?: string
    fixPostButton?: any
}

export default function PostFeed( props : IPostFeed ){
    const FRSTAvatar = 'https://i.gyazo.com/e9608cb76d36242de07661bee9da60dd.png'

    const [isVisibleComments, setIsVisibleComments] = useState(props.isVisibleComments)
    const [ actionArea, setActionArea] = useState(false)

    useEffect(() => {
        setIsVisibleComments(props.isVisibleComments)
    }, [props.isVisibleComments])

    return(
        <ThemeProvider theme={FRSTTheme}>
            <Styles.postContainer style={{...props.style}}>
                <Styles.postHeader style={{width:'100%', justifyContent: 'space-between'}}>
                    <div style={{width: props?.fixPostButton && props?.fixPostButton?.isVisibleButton ? '50px' : '0px'}}></div>
                    <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{marginRight: 16}}> <Avatar src={FRSTAvatar} size='40px' /> </div>
                        <span style={{fontFamily: 'Work Sans', fontWeight: 600, fontSize: 20, color: FRSTTheme['colors'].neutralsGrey1}} > FRST Falconi </span>
                    </div>

                    { props?.fixPostButton && props?.fixPostButton?.isVisibleButton ?
                        <div 
                            onClick={() => props?.fixPostButton?.actionClick()}
                            onMouseOver={() => setActionArea(true)}
                            onMouseOut={() => setActionArea(false)}
                            style={{
                                width: '50px',
                                color: actionArea ? '#0645ad' : '#ff4d0d', 
                                cursor: 'pointer', 
                                justifySelf:'end', 
                                display: 'flex', 
                                justifyContent: 'flex-end', 
                                paddingRight: '22px', 
                                marginTop: '-25px'}}>
                            {/* <p style={{marginRight: '5px', paddingTop: '0px',fontSize: '17px'}}>
                                {actionArea ? props?.fixPostButton?.textUnfix : props?.fixPostButton?.textFixed }
                            </p> */}
                            <IconPin fill={actionArea ? '#0645ad' : '#ff4d0d'}/>
                        </div>
                    : <div></div>}
                </Styles.postHeader>

                <Styles.postTitle> {props.title} </Styles.postTitle>

                {props.postImage ?
                    <Styles.postImage>
                        <img src={props.postImage} />
                    </Styles.postImage>
                    : null
                }

                <Styles.postDescription style={{paddingLeft: '24px', paddingRight: '24px', width: '100%'}}> 
                    <Markdown>
                        {props.description}
                    </Markdown>
                </Styles.postDescription>

                {props.postVideoId ?
                    <Styles.postVideo>
                        { props.videoSource == 'youtube' &&
                        <iframe 
                            src= {`https://www.youtube.com/embed/${props.postVideoId}`}
                            frameBorder= "0" 
                            allow="autoplay; fullscreen; picture-in-picture"
                            width={props.videoWidth ? props.videoWidth : '100%'}
                            height={ props.videoHeight ? props.videoHeight : 430}
                        /> }

                        { props.videoSource == 'vimeo' &&
                        <iframe 
                            src={`https://player.vimeo.com/video/${props.postVideoId}?autoplay=0`}
                            width={props.videoWidth ? props.videoWidth : '100%'}
                            height={ props.videoHeight ? props.videoHeight : 430}
                            allow="autoplay; fullscreen" 
                        /> }
                    </Styles.postVideo>
                    : null
                }
{/* https://vimeo.com/475879762 */}
                {props.handlePostButtonClick ?
                    <div style={{marginTop: 32, width: '100%', paddingLeft: '24px', paddingRight: '24px'}}> 
                        <Button variant='expandedPrimary' label={props.textPostButton} handleClick={props.handlePostButtonClick} />
                    </div>
                    : null
                }

            </Styles.postContainer>
            <FeedInteraction 
                hideComments={isVisibleComments}
                isPostReview={true}
                userAvatar={props.userAvatar}
                id={props.postId}
                isLiked={props.isPostLiked}
                qtdComments={props.qtdComments}
                qtdLikes={props.qtdLikes}
                textAvaluation={props.textAvaluation}
                textAvaluationTitle={props.textAvaluationTitle}
                textComments={props.textComments}
                textDeslike={props.textDeslike}
                textLikes={props.textLikes}
                commentList={props.commentList}
                userCommentPlaceholder={props.userCommentPlaceholder}
                textLoadMoreComments={props.textLoadMoreComments}
                textSaveCommentBtn={props.textSaveCommentBtn}
                ratingPostReview={props.ratingPostReview}
                handleLikeClick={props.handleLikeClick}
                handlePostReviewChange={props.handlePostReviewChange}
                handleSaveCommentBtn={props.handleSaveCommentBtn}
                onCommentChange={props.onCommentChange}
                isDisabledAvaluation={props.isDisabledAvaluation}
            />
        </ThemeProvider>
    )
}

function IconPin({fill}) {
    return <>
        <svg width="20px" height="20px" viewBox="-3 -2.5 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
            <path d='M7.374 12.268l-5.656 5.657A1 1 0 1 1 .303 16.51l5.657-5.656L1.718 6.61A6.992 6.992 0 0 1 7.9 4.67L11.617.954a2 2 0 0 1 2.828 0l2.829 2.828a2 2 0 0 1 0 2.829l-3.716 3.716a6.992 6.992 0 0 1-1.941 6.183l-4.243-4.242z' fill={ fill ? fill : '#ff4d0d'}/>
        </svg>
    </>
}