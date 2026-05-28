import React, { useEffect, useState } from 'react'
import { MessageCircle, Eye, ThumbsUp } from 'lucide-react'
import { ThemeProvider } from 'styled-components'

import { FRSTTheme } from '../../../theme'
import * as Styles from './feedInteractionV3Styles'

export interface FeedInteractionV3Props {
    style?: React.CSSProperties
    primaryColor?: string
    initialIsLiked?: boolean
    likeCount?: number
    viewCount?: number
    commentCount?: number
    onLikeToggle?: (nextIsLiked: boolean) => void
    handleLikeClick?: () => void
    hiddenViewButton?: boolean
    hiddenCommentButton?: boolean
    hiddenLikeButton?: boolean
    handleViewLikesClick?: () => void
    handleCommentsClick?: () => void
    handleViewsClick?: () => void
}

const DEFAULT_PRIMARY_COLOR = '#FF8A15'

export default function FeedInteractionV3(props: FeedInteractionV3Props) {
    const {
        style,
        primaryColor = DEFAULT_PRIMARY_COLOR,
        initialIsLiked = false,
        likeCount = 0,
        viewCount = 0,
        commentCount = 0,
        onLikeToggle,
        handleLikeClick,
        hiddenViewButton = false,
        hiddenCommentButton = false,
        hiddenLikeButton = false,
        handleViewLikesClick = () => {},
        handleCommentsClick = () => {},
        handleViewsClick = () => {}
    } = props

    const [isLiked, setIsLiked] = useState(Boolean(initialIsLiked))
    const [likes, setLikes] = useState(Number.isFinite(likeCount) ? likeCount : 0)

    useEffect(() => {
        setLikes(Number.isFinite(likeCount) ? likeCount : 0)
    }, [likeCount])

    useEffect(() => {
        setIsLiked(Boolean(initialIsLiked))
    }, [initialIsLiked])

    const handleLike = () => {
        const next = !isLiked
        setIsLiked(next)
        setLikes((prev) => (next ? prev + 1 : Math.max(0, prev - 1)))
        onLikeToggle?.(next)
        handleLikeClick?.()
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Container style={style}>
                <Styles.InteractionRow>
                    {!hiddenLikeButton && (
                        <Styles.InteractionButton
                            $primaryColor={primaryColor}
                            type="button"
                            onClick={()=> {}}
                            $active={isLiked}
                        >
                            <Styles.IconBubble onClick={handleLike} $primaryColor={primaryColor} $active={isLiked}>
                                <ThumbsUp size={18} fill={isLiked ? primaryColor : 'none'} />
                            </Styles.IconBubble>
                            <Styles.InteractionValue onClick={handleViewLikesClick}>{likes}</Styles.InteractionValue>
                        </Styles.InteractionButton>
                    )}

                    {!hiddenViewButton && (
                        <Styles.InteractionButton $primaryColor={primaryColor} type="button" onClick={handleViewsClick}>
                            <Styles.IconBubble>
                                <Eye size={18} />
                            </Styles.IconBubble>
                            <Styles.InteractionValue>{viewCount}</Styles.InteractionValue>
                        </Styles.InteractionButton>
                    )}

                    {!hiddenCommentButton && (
                        <Styles.InteractionButton $primaryColor={primaryColor} type="button" onClick={handleCommentsClick}>
                            <Styles.IconBubble>
                                <MessageCircle size={18} />
                            </Styles.IconBubble>
                            <Styles.InteractionValue>{commentCount}</Styles.InteractionValue>
                        </Styles.InteractionButton>
                    )}
                </Styles.InteractionRow>
            </Styles.Container>
        </ThemeProvider>
    )
}
