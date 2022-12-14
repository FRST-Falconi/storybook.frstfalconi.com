import Avatar from '@components/avatar'
import Button from '@components/buttons'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import FeedInteraction from '../feedInteraction'
import * as Styles from './postFeedStyles' 
import ReactMarkdown from 'react-markdown'

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
    onCommentChange?: (e) => void
}

export default function PostFeed( props : IPostFeed ){
    const FRSTAvatar = 'https://i.gyazo.com/e9608cb76d36242de07661bee9da60dd.png'

    const [descriptionMark, setDescriptionMark] = useState(props.description)

    useEffect(() => {
        setDescriptionMark(props.description)
    }, [props.description])

    return(
        <ThemeProvider theme={FRSTTheme}>
            <Styles.postContainer style={{...props.style}}>
                <Styles.postHeader>
                    <div style={{marginRight: 16}}> <Avatar src={FRSTAvatar} size='40px' /> </div>
                    <span style={{fontFamily: 'Work Sans', fontWeight: 600, fontSize: 20, color: FRSTTheme['colors'].neutralsGrey1}} > FRST Falconi </span>
                </Styles.postHeader>

                <Styles.postTitle> {props.title} </Styles.postTitle>

                {props.postImage ?
                    <Styles.postImage>
                        <img src={props.postImage} />
                    </Styles.postImage>
                    : null
                }

                <Styles.postDescription> 
                    <ReactMarkdown>{descriptionMark}</ReactMarkdown>
                </Styles.postDescription>

                {props.postVideoId ?
                    <Styles.postVideo>
                        <iframe 
                            src= {`https://www.youtube.com/embed/${props.postVideoId}`}
                            frameBorder= "0" 
                            allow="autoplay; fullscreen; picture-in-picture"
                            width={ props.videoWidth ? props.videoWidth : 586}
                            height={ props.videoHeight ? props.videoHeight : 330}
                        />
                        
                    </Styles.postVideo>
                    : null
                }

                {props.handlePostButtonClick ?
                    <div style={{marginTop: 32, width: '100%'}}>
                        <Button variant='expandedPrimary' label={props.textPostButton} handleClick={props.handlePostButtonClick} />
                    </div>
                    : null
                }

            </Styles.postContainer>
            <FeedInteraction 
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