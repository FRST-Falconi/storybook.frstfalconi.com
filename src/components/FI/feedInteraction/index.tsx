import Rating from '@components/EBR/rating'
import Button from '@components/buttons'
import * as Icons from '@shared/icons'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './feedInteractionStyles'
// latestComment={stateLatestComment}
// textLatestComment={props.textLatestComment}
// userCommentPlaceholder={props.userCommentPlaceholder}
// onCommentChange={props.onCommentChange}
// textSaveCommentBtn={props.textSaveCommentBtn}
// handleSaveCommentBtn={props.handleSaveCommentBtn}

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
  userAvatar?: string
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
}

export default function FeedInteraction(props: IFeedInteraction) {
  const [openReview, setOpenReview] = useState(false)
  const [openComments, setOpenComments] = useState(false)

  const [isVisibleComments, setIsVisibleComments] = useState(!props?.hideComments)

  useEffect(() => {
    setIsVisibleComments(!props?.hideComments)
  }, [props?.hideComments])

  const [stateTotalComments, setStateTotalComments] = useState(props.qtdComments)
  useEffect(() => {
    setStateTotalComments(props.qtdComments)
  }, [props.qtdComments])

  const OnReviewClick = () => {
    setOpenReview(!openReview)
    setOpenComments(false)
  }

  const OnCommentsClick = () => {
    setOpenComments(!openComments)
    setOpenReview(false)
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.Container style={{ ...props.style }} id={props.id}>
        {!props.textTotalView && (props.qtdLikes || stateTotalComments) ? (
          <Styles.infoContent>
            {props?.qtdLikes ? (
              <Styles.info style={{ left: 0 }}>
                {' '}
                <Icons.ThumbsUpCovered /> &nbsp;
                <span
                  onClick={() => props?.handleShowLikes?.()}
                  style={{
                    cursor: 'pointer',
                    color: '#0645AD',
                    fontFamily: 'PT Sans',
                    fontSize: '16px',
                    lineHeight: '17.6px',
                    fontWeight: 400,
                    textDecoration: 'underline'
                  }}
                >
                  {props.qtdLikes}
                </span>
              </Styles.info>
            ) : null}
            {stateTotalComments ? <Styles.info style={{ right: 0 }}>{stateTotalComments}</Styles.info> : null}
          </Styles.infoContent>
        ) : (
          <>
            {(props.textTotalView || props.qtdLikes || stateTotalComments) && (
              <Styles.infoContentWithView>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                  {props.qtdLikes && (
                    <Styles.infoWithView onClick={() => props?.handleShowLikes?.()}>
                      {' '}
                      <Icons.ThumbsUpCovered /> &nbsp;{' '}
                      <span
                        onClick={() => props?.handleShowLikes?.()}
                        style={{
                          cursor: 'pointer',
                          color: '#0645AD',
                          fontFamily: 'PT Sans',
                          fontSize: '16px',
                          lineHeight: '17.6px',
                          fontWeight: 400,
                          textDecoration: 'underline'
                        }}
                      >
                        {props.qtdLikes}
                      </span>
                    </Styles.infoWithView>
                  )}
                  {props?.qtdLikes && stateTotalComments && <div>•</div>}
                  {stateTotalComments && <Styles.infoWithView> {stateTotalComments} </Styles.infoWithView>}
                </div>
                {props.textTotalView && (
                  <Styles.infoWithView
                    style={{ color: '#0645AD', fontWeight: 700, cursor: 'pointer' }}
                    onClick={() => props.handleClickTextTotalViews()}
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
            <Styles.buttons>
              <Button
                startIcon={<Icons.ThumbsUpIcon fill={'currentColor'} />}
                label={props.textDeslike}
                variant="link"
                handleClick={props.handleLikeClick}
              />
            </Styles.buttons>
          ) : (
            <Styles.buttons>
              <Button
                startIcon={<Icons.ThumbsUpIcon fill={'currentColor'} />}
                label={props.textLikes}
                variant="link"
                handleClick={props.handleLikeClick}
              />
            </Styles.buttons>
          )}
          {isVisibleComments && (
            <Styles.buttons
              onClick={OnCommentsClick}
              style={{ color: openComments && FRSTTheme['colors'].linkPressed }}
            >
              <Icons.TalkIcon fill={'currentColor'} /> {props.textComments}
            </Styles.buttons>
          )}
          <Styles.buttons onClick={OnReviewClick} style={{ color: openReview && FRSTTheme['colors'].linkPressed }}>
            <Icons.StarOutlined fill={'currentColor'} /> {props.textAvaluation}
          </Styles.buttons>
        </Styles.buttonsContent>
        {openReview && (
          <Styles.reviewContainer>
            {props.textAvaluationTitle}
            <Styles.reviewContent>
              {props.isChallengeReview && (
                <div
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
                  <Rating
                    isVisibleNumberRating={false}
                    orientation="horizontal"
                    qtdStars={5}
                    sizeStars={20}
                    marginStars={'3.5px'}
                    disabled={props.isDisabledAvaluation}
                    rating={props.ratingImpacto}
                    handleRating={props?.handleImpactoChange}
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
                    rating={props.ratingRelevancia}
                    handleRating={props?.handleRelevanciaChange}
                  />
                  <span>{props.textRelevancia}</span>
                </div>
              )}
              {props.isPostReview && (
                <div
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
                  <Rating
                    isVisibleNumberRating={false}
                    orientation="horizontal"
                    qtdStars={5}
                    sizeStars={20}
                    marginStars={'3.5px'}
                    disabled={props.isDisabledAvaluation}
                    rating={props.ratingPostReview}
                    handleRating={props?.handlePostReviewChange}
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
