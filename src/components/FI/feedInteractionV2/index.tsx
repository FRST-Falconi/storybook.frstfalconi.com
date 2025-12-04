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
    textLoadMoreComments?: string
    hideComments?: any
    textTotalView?: string
    handleClickTextTotalViews?: () => void
    handleLikeClick?: () => void
    handleShowLikes?: () => void
    isLiked: boolean
    isCommentV2?: boolean
    childrenCommentV2?: any
    style?: React.CSSProperties
}

export default function FeedInteractionV2(props: IFeedInteraction) {
    const [openComments, setOpenComments] = useState(false)
    const [isVisibleComments, setIsVisibleComments] = useState(!props?.hideComments)
    const [stateTotalComments, setStateTotalComments] = useState(props.qtdComments)

    useEffect(() => {
        setIsVisibleComments(!props?.hideComments)
    }, [props?.hideComments])

    useEffect(() => {
        setStateTotalComments(props.qtdComments)
    }, [props.qtdComments])

    const toggleComments = () => setOpenComments(!openComments)

    const qtdLikesText = props?.qtdLikes !== "1" ? `${props.qtdLikes} pessoas curtiram esse desafio` : '1 pessoa curtiu esse desafio'

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Container style={{ ...props.style }} id={props.id}>

                {/* TOP BAR (igual imagem) */}
                <Styles.TopBar>
                    <Styles.LeftAction onClick={() => props.handleLikeClick?.()}>
                        <Icons.ThumbsUpIcon2 />
                       <span style={{marginTop: '2px'}}> {props.isLiked ? props.textDeslike : props.textLikes}</span>
                    </Styles.LeftAction>

                    <Styles.RightInfo>
                        {stateTotalComments && (
                            <span>{stateTotalComments}</span>
                        )}

                        {props.textTotalView && (
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={() => props.handleClickTextTotalViews?.()}
                            >
                                {props.textTotalView}
                            </span>
                        )}
                    </Styles.RightInfo>
                </Styles.TopBar>

                <Styles.Divider />

                {props.qtdLikes && (
                    <Styles.BottomInfo onClick={() => props.handleShowLikes?.()}>
                        <Icons.ThumbsUpCovered2 />
                        <span>{qtdLikesText}</span>
                    </Styles.BottomInfo>
                )}

                {openComments && props.isCommentV2 && (
                    <div>{props.childrenCommentV2}</div>
                )}
            </Styles.Container>
        </ThemeProvider>
    )
}
