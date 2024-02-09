import Rating from '@components/EBR/rating'
import Button from '@components/buttons'
import * as Icons from '@shared/icons'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './feedInteractionStyles'

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
    isChallengeReview?: boolean
    ratingImpacto?: number
    textImpacto?: string
    ratingRelevancia?: number
    textRelevancia?: string
    isPostReview?: boolean
    ratingPostReview?: number
    removeEvaluation?: any
    valueRatingImpacto?: string
    valueRatingRelevancia?: string
    userAvatar?: string
    isUserLoggedChallenge?: boolean
    textLoadMoreComments?: string
    isDisabledAvaluation?: boolean
    style?: React.CSSProperties
    handleLikeClick?: () => void
    handleShowLikes?: () => void
    tooltipLikesText?: string
    handleImpactoChange?: any
    handleRelevanciaChange?: any
    handlePostReviewChange?: any
    hideComments?: any
    textTotalView?: string
    handleClickTextTotalViews?: () => void
    isCommentV2?: boolean
    childrenCommentV2?: any
    isVisibleAvaliations?: boolean
}

export default function FeedInteraction(props: IFeedInteraction) {
    const [openReview, setOpenReview] = useState(false)
    const [openComments, setOpenComments] = useState(false)
    const [isVisibleComments, setIsVisibleComments] = useState(!props?.hideComments)
    const [stateTotalComments, setStateTotalComments] = useState(props.qtdComments)
    const [ratingImpacto, setRatingImpacto] = useState(props.ratingImpacto || 0)
    const [ratingRelevancia, setRatingRelevancia] = useState(props.ratingRelevancia || 0)
    const [ratingPostReview, setRatingPostReview] = useState(props.ratingPostReview || 0)

    useEffect(() => {
        setIsVisibleComments(!props?.hideComments)
    }, [props?.hideComments])

    useEffect(() => {
        setStateTotalComments(props.qtdComments)
    }, [props.qtdComments])

    useEffect(() => {
        setRatingImpacto(props.ratingImpacto || 0)
    }, [props.ratingImpacto])

    useEffect(() => {
        setRatingRelevancia(props.ratingRelevancia || 0)
    }, [props.ratingRelevancia])

    useEffect(() => {
        setRatingPostReview(props.ratingPostReview || 0)
    }, [props.ratingPostReview])

    const OnReviewClick = () => {
        setOpenReview(!openReview)
        setOpenComments(false)
    }

    const OnCommentsClick = () => {
        setOpenComments(!openComments)
        setOpenReview(false)
    }

    const handleImpactoChangeClick = (value: number) => {
        setRatingImpacto(value)
        props?.handleImpactoChange(value)
    }

    const handleRelevanciaChangeClick = (value: number) => {
        setRatingRelevancia(value)
        props?.handleRelevanciaChange(value)
    }

    const handlePostReviewChangeClick = (value: number) => {
        setRatingPostReview(value)
        props?.handlePostReviewChange(value)
    }

    const { isVisibleAvaliations = true } = props;

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Container style={{ ...props.style }} id={props.id}>
                {!props.textTotalView && (props.qtdLikes || stateTotalComments) ? (
                    <Styles.infoContent>
                        {props?.qtdLikes ? (
                            <Styles.info style={{ left: 0 }}>
                                <Icons.ThumbsUpCovered2 /> &nbsp;
                                <span
                                    onClick={() => props?.handleShowLikes?.()}
                                    style={{
                                        cursor: 'pointer',
                                        color: '#222222',
                                        fontFamily: 'PT Sans',
                                        fontSize: '16px',
                                        lineHeight: '16x',
                                        fontWeight: 400,
                                        textDecoration: 'underline'
                                    }}
                                >
                                    {props.qtdLikes}
                                </span>
                            </Styles.info>
                        ) : null}
                        {stateTotalComments ? (
                            <Styles.info style={{ right: 0 }}>{stateTotalComments}</Styles.info>
                        ) : null}
                    </Styles.infoContent>
                ) : (
                    <>
                        {(props.textTotalView || props.qtdLikes || stateTotalComments) && (
                            <Styles.infoContentWithView>
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                                    {props.qtdLikes && (
                                        <Styles.infoWithView onClick={() => props?.handleShowLikes?.()}>
                                            <Icons.ThumbsUpCovered2 /> &nbsp;
                                            <span
                                                onClick={() => props?.handleShowLikes?.()}
                                                style={{
                                                    cursor: 'pointer',
                                                    color: '#222222',
                                                    fontFamily: 'PT Sans',
                                                    fontSize: '16px',
                                                    lineHeight: '16x',
                                                    fontWeight: 400,
                                                    textDecoration: 'underline'
                                                }}
                                            >
                                                {props.qtdLikes}
                                            </span>
                                        </Styles.infoWithView>
                                    )}
                                    {props?.qtdLikes && stateTotalComments && <div>•</div>}
                                    {stateTotalComments && (
                                        <Styles.infoWithView> {stateTotalComments} </Styles.infoWithView>
                                    )}
                                </div>
                                {props.textTotalView && (
                                    <Styles.infoWithView
                                        style={{ color: '#222', cursor: 'pointer' }}
                                        onClick={() => props.handleClickTextTotalViews?.()}
                                    >
                                        {props.textTotalView}
                                    </Styles.infoWithView>
                                )}
                            </Styles.infoContentWithView>
                        )}
                    </>
                )}

                <Styles.buttonsContent>
                    {props.isLiked ? (
                        <Styles.buttons onClick={() => props.handleLikeClick()} style={{ color: '#444' }}>
                            <Icons.ThumbsUpIcon2 />
                            {props.textDeslike}
                        </Styles.buttons>
                    ) : (
                        <Styles.buttons onClick={() => props.handleLikeClick()} style={{ color: '#444' }}>
                            <Icons.ThumbsUpIcon2 />
                            {props.textLikes}
                        </Styles.buttons>
                    )}
                    {isVisibleComments && (
                        <Styles.buttons onClick={OnCommentsClick} style={{ color: '#444' }}>
                            <Icons.TalkIcon fill={'currentColor'} /> {props.textComments}
                        </Styles.buttons>
                    )}
                    {isVisibleAvaliations && (
                        <Styles.buttons onClick={OnReviewClick} style={{ color: '#444' }}>
                            <Icons.StarOutlined2 fill={'currentColor'} /> {props.textAvaluation}
                        </Styles.buttons>
                    )}
                </Styles.buttonsContent>

                {openReview && (
                    <Styles.reviewContainer>
                        {props.textAvaluationTitle}
                        <Styles.reviewContent>
                            {props.isChallengeReview && (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <Rating
                                        isVisibleNumberRating={false}
                                        orientation="horizontal"
                                        qtdStars={5}
                                        sizeStars={20}
                                        marginStars={'3.5px'}
                                        disabled={props.isDisabledAvaluation}
                                        rating={ratingImpacto}
                                        handleRating={handleImpactoChangeClick}
                                        removeEvaluation={props?.removeEvaluation}
                                        evaluationType="impact"
                                        isUserLoggedChallenge={props?.isUserLoggedChallenge}
                                        valueRatingOwner={props?.valueRatingImpacto}
                                    />
                                    <span>{props.textImpacto}</span>
                                </div>
                            )}
                            {props.isChallengeReview && (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        marginLeft: 24
                                    }}
                                >
                                    <Rating
                                        isVisibleNumberRating={false}
                                        orientation="horizontal"
                                        qtdStars={5}
                                        sizeStars={20}
                                        marginStars={'3.5px'}
                                        disabled={props.isDisabledAvaluation}
                                        rating={ratingRelevancia}
                                        handleRating={handleRelevanciaChangeClick}
                                        removeEvaluation={props?.removeEvaluation}
                                        evaluationType="relevance"
                                        isUserLoggedChallenge={props?.isUserLoggedChallenge}
                                        valueRatingOwner={props?.valueRatingRelevancia}
                                    />
                                    <span>{props.textRelevancia}</span>
                                </div>
                            )}
                            {props.isPostReview && (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <Rating
                                        isVisibleNumberRating={false}
                                        orientation="horizontal"
                                        qtdStars={5}
                                        sizeStars={20}
                                        marginStars={'3.5px'}
                                        disabled={props.isDisabledAvaluation}
                                        rating={ratingPostReview}
                                        handleRating={handlePostReviewChangeClick}
                                        removeEvaluation={props?.removeEvaluation}
                                    />
                                </div>
                            )}
                        </Styles.reviewContent>
                    </Styles.reviewContainer>
                )}

                {openComments && props?.isCommentV2 && <div>{props?.childrenCommentV2}</div>}
            </Styles.Container>
        </ThemeProvider>
    )
}
