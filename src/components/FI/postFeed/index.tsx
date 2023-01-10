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
    videoSource?: string,
    fixPostButton?: any,
    isCompletePost?: boolean,
}

export default function PostFeed( props : IPostFeed ){
    const FRSTAvatar = 'https://i.gyazo.com/e9608cb76d36242de07661bee9da60dd.png'

    const [isVisibleComments, setIsVisibleComments] = useState(props.isVisibleComments)
    const [ actionArea, setActionArea] = useState(false)

    useEffect(() => {
        setIsVisibleComments(props.isVisibleComments)
    }, [props.isVisibleComments])

    return(
        <Styles.Wrapper isCompletePost={props.isCompletePost}>
        <ThemeProvider theme={FRSTTheme}>
            <Styles.postContainer style={{...props.style}}>
                <Styles.postHeader style={{width:'100%', justifyContent: 'space-between'}}>
                    <div style={{width: props?.fixPostButton && props?.fixPostButton?.isVisibleButton ? '105px' : '0px'}}></div>
                    <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{marginRight: 16, paddingTop: '18px'}}> <Avatar src={FRSTAvatar} size='40px' /> </div>
                        <span style={{fontFamily: 'Work Sans', fontWeight: 600, fontSize: 20, color: FRSTTheme['colors'].neutralsGrey1, paddingTop: '18px'}} > FRST Falconi </span>
                    </div>

                    { props?.fixPostButton && props?.fixPostButton?.isVisibleButton ?
                            <Styles.TooltipCard>
                                <Styles.TooltipText>
                        <div 
                            onClick={() => props?.fixPostButton?.actionClick()}
                            onMouseOver={() => setActionArea(true)}
                            onMouseOut={() => setActionArea(false)}
                            style={{
                                width: '105px',
                                fontSize: '18px',
                                color: '#0645ad', 
                                cursor: 'pointer', 
                                justifySelf:'end', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                paddingRight: '22px', 
                                marginTop: '-30px'}}>
                            {/* <p style={{marginRight: '5px', paddingTop: '0px',fontSize: '17px'}}>
                                {actionArea ? props?.fixPostButton?.textUnfix : props?.fixPostButton?.textFixed }
                            </p> */}
                                    
                            <IconPin fill={actionArea ? '#0645ad' : '#ff4d0d'}/>
                            <Styles.buttonCheck>{props.fixPostButton?.textFixed}</Styles.buttonCheck>

                        </div>
                        </Styles.TooltipText>
                            <Styles.TooltipBox>
                            <p>{props.fixPostButton?.textTooltip}</p>
                            </Styles.TooltipBox>
                        </Styles.TooltipCard>
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
        </Styles.Wrapper>
    )
}

function IconPin({fill}) {
    return <>
        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 1L6 12L1 7" stroke="#0645AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </>
}