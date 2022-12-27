import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import * as Styles from './thumbListContentStyles'
import { useState } from 'react'
import { PlayFilledIcon, PlayLineIcon, PodCast, QuizSucessError } from '@shared/icons'
import { url } from 'inspector'
import Button from '@components/buttons'

type typeThumb = 'video' | 'podcast' | 'question'

interface IThumbListContent{
    imageSrc: string
    typeThumbContent: typeThumb
    title?: string
    description: string
    isLoading: boolean

    textViewMoreButton: string
    textViewLessButton: string

    onClickThumb: () => void

    style?: React.CSSProperties
}

export default function ThumbListContent( props : IThumbListContent ) {
    const [showMore, setShowMore] = useState(false);

    return(
        <ThemeProvider theme={FRSTTheme}>
            <Styles.containerThumbContent style={{...props.style}}>
                {props.imageSrc ?
                    <Styles.imageThumbContent onClick={props.onClickThumb} >
                        <img src={props.imageSrc} />
                    </Styles.imageThumbContent>
                    :
                    <Styles.iconsThumb onClick={props.onClickThumb} >
                        { props.typeThumbContent === 'video' ? <PlayLineIcon fill={FRSTTheme['colors'].shadeWhite} width='48' height='48' /> : null }
                        { props.typeThumbContent === 'podcast' ? <PodCast fill={FRSTTheme['colors'].shadeWhite} width='48' height='48' /> : null }
                        { props.typeThumbContent === 'question' ? <QuizSucessError fill={FRSTTheme['colors'].shadeWhite} width='48' height='48' /> : null }
                    </Styles.iconsThumb>
                }
                <Styles.infoThumbContent onClick={props.onClickThumb}>
                    {props.title ? 
                        <span style={{color: FRSTTheme['colors'].primary1, fontSize: 16, fontWeight: 700}}> {props.title} </span> 
                        : null
                    }
                    <Styles.descriptionThumbContent showText={showMore}> {props.description} </Styles.descriptionThumbContent>
                </Styles.infoThumbContent>
                <Styles.viewMoreContent>
                    <Button variant='link' 
                        label={showMore ? props.textViewLessButton : props.textViewMoreButton} 
                        handleClick={() => setShowMore(!showMore)} 
                        style={{fontSize: 12}}
                    />
                </Styles.viewMoreContent>
            </Styles.containerThumbContent>
        </ThemeProvider>
    )
}